package httpClient

import (
	"bitshop/backend/httpClient/responseHandlers"
	"fmt"
	"log"
	"net/http"
	url2 "net/url"
)

func MakePayment(guid, password, address, amount string) ([]byte, int) {
	url := fmt.Sprintf("https://blockchain.info/merchant/%s/payment?", guid)
	params := fmt.Sprintf("password=%s&to=%s&amount=%s", url2.QueryEscape(password), url2.QueryEscape(address), url2.QueryEscape(amount))
	requestUrl := url + params
	return Get(requestUrl)
}

func Get(url string) ([]byte, int) {
	log.Printf("Making GET request to %s", url)
	response, err := http.Get(url)
	if err != nil {
		log.Printf("Error making GET request: %s", err)
	}
	return responseHandlers.ResponseHandler(response)
}
