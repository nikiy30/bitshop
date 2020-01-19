package handlers

import (
	"bitshop/backend/coin"
	"bitshop/backend/db"
	"bitshop/backend/httpClient"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

var bitDB db.UserDB

func init() {
	bitDB.BucketName = []byte("users")
	err := bitDB.StartDB()
	if err != nil {
		log.Print(err)
	}
}

func HandlePayment(w http.ResponseWriter, r *http.Request) {
	var payload coin.Payload
	var walletOwner db.User

	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		RespondWithError(w, http.StatusBadRequest, err.Error())
	}
	json.Unmarshal(body, &payload)

	ownerCredentials, err := bitDB.Find([]byte(payload.WalletOwnerAddress))
	if err != nil {
		RespondWithError(w, http.StatusBadRequest, err.Error())
	}
	json.Unmarshal([]byte(ownerCredentials), &walletOwner)

	currencyInBitcoinUrl := fmt.Sprintf("https://blockchain.info/tobtc?currency=USD&value=%f", payload.Amount)
	amount, _ := httpClient.Get(currencyInBitcoinUrl)

	response, statusCode := httpClient.MakePayment(walletOwner.WalletContents.Guid, walletOwner.WalletContents.Password, payload.To, string(amount))
	if statusCode != 200 {
		RespondWithError(w, statusCode, fmt.Sprintf("Error: %s", response))
	} else {
		RespondWithJSON(w, 200, response)
	}
}

//Only requires WalletContents payload and wallet address
func AddUserEntry(w http.ResponseWriter, r *http.Request) {
	var user *db.User

	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		RespondWithError(w, http.StatusBadRequest, err.Error())
	}
	json.Unmarshal(body, &user)

	err = bitDB.CreateUserWallet(user)
	if err != nil {
		log.Printf(err.Error())
		RespondWithError(w, http.StatusBadRequest, err.Error())
	} else {
		value, err := bitDB.Find([]byte(user.WalletAddress))
		if err != nil {
			RespondWithError(w, http.StatusBadRequest, err.Error())
		} else {
			RespondWithJSON(w, 201, fmt.Sprintf("Successfully inserted user entry %s with %s", value, user.WalletAddress))
		}
	}
}

// RespondWithError is called on an error to return info regarding error
func RespondWithError(w http.ResponseWriter, code int, message string) {
	RespondWithJSON(w, code, map[string]string{"error": message})
}

func RespondWithJSON(w http.ResponseWriter, code int, payload interface{}) {
	//encode Payload to json
	response, _ := json.Marshal(payload)

	// set headers and write response
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(code)
	_, writeError := w.Write(response)
	if writeError != nil {
		log.Print(writeError)
	}
}
