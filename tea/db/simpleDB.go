package db

import (
	"bitshop/tea/coin"
	"bytes"
	"encoding/json"
	"fmt"
	"github.com/boltdb/bolt"
)

type UserDB struct {
	Db         *bolt.DB
	BucketName []byte
}

type User struct {
	WalletAddress  string      `json:"walletAddress"`
	WalletContents coin.Wallet `json:"walletContents"`
}

func (udb *UserDB) StartDB() error {
	// Open the my.Db data file in your current directory.
	// It will be created if it doesn't exist.
	db, err := bolt.Open("my.Db", 0600, nil)
	if err != nil {
		return err
	}
	// create a bucket
	err = db.Update(func(tx *bolt.Tx) error {
		_, err := tx.CreateBucketIfNotExists(udb.BucketName)
		return err
	})

	udb.Db = db

	return err
}

func (udb *UserDB) CreateUserWallet(u *User) error {
	return udb.Db.Update(func(tx *bolt.Tx) error {
		// Retrieve the users bucket.
		// This should be created when the DB is first opened.
		b := tx.Bucket(udb.BucketName)

		// Marshal user data into bytes.
		buf, err := json.Marshal(u)
		if err != nil {
			return err
		}

		// Persist bytes to users bucket.
		return b.Put([]byte(u.WalletAddress), buf)
	})
}

func (udb *UserDB) ForEachKey() {
	udb.Db.View(func(tx *bolt.Tx) error {
		// Assume bucket exists and has keys
		b := tx.Bucket([]byte("users"))

		c := b.Cursor()

		for k, v := c.First(); k != nil; k, v = c.Next() {
			fmt.Printf("key=%s, value=%s\n", k, v)
		}

		return nil
	})
}

func (udb *UserDB) Insert(key, value []byte) error {
	err := udb.Db.Update(func(tx *bolt.Tx) error {
		err := tx.Bucket(udb.BucketName).Put(key, value)
		return err
	})
	return err
}

func (udb *UserDB) Find(key []byte) (string, error) {
	var value string
	err := udb.Db.View(func(tx *bolt.Tx) error {
		c := tx.Bucket(udb.BucketName).Cursor()
		if k, v := c.Seek(key); k == nil {
			// db is empty, key not found
			return fmt.Errorf("db is empty, key %s not found", string(key))
		} else if bytes.Equal(k, key) {
			// found, use 'v'
			value = string(v)
		} else {
			// key not found
			return fmt.Errorf("key %s not found", string(key))
		}
		return nil
	})
	return value, err
}
