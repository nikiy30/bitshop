package coin

type Coin struct {
	Amount string
}

type Wallet struct {
	Guid       string `json:"guid"`
	Password   string `json:"password"`
	PrivateKey string `json:"privateKey"`
	PublicKey  string `json:"publicKey"`
}

type Transaction struct {
	From string
	To   string
}

type TransactionHash struct {
	Tx string
}

type Payload struct {
	WalletOwnerAddress string  `json:"walletOwnerAddress"`
	Amount             float64 `json:"amount"`
	To                 string  `json:"to"`
}
