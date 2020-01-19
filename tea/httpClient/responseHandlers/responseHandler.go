package responseHandlers

import (
	"io/ioutil"
	"log"
	"net/http"
)

func ResponseHandler(response *http.Response) ([]byte, int) {
	body, responseBodyErr := ioutil.ReadAll(response.Body)
	if responseBodyErr != nil {
		log.Print(responseBodyErr)
	}
	status := response.StatusCode
	log.Printf("Response status %v with response body: %v", status, string(body))
	return body, status
}
