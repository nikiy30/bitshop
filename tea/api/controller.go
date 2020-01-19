package api

import (
	"bitshop/tea/handlers"
	"github.com/gorilla/mux"
	"log"
	"net/http"
)

const (
	payment = "/bithub/user/payment"
	addUser = "/bithub/user/create"
)

func Api() {
	router := mux.NewRouter().StrictSlash(false)
	router.HandleFunc(payment, handlers.HandlePayment).Methods(http.MethodPost)
	router.HandleFunc(addUser, handlers.AddUserEntry).Methods(http.MethodPost)
	log.Print("Api routes enabled on 8081")
	log.Fatal(http.ListenAndServe(":8081", router))
}
