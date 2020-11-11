const{ Blockchain,Transaction } =require('./blockchain');
const EC = require('elliptic').ec;
const ec=new EC('secp256k1');

const myKey=ec.keyFromPrivate('ef4c634158f1834eb19b3dca0d187dde2328ff134808e26026c63158303eb4fd');
const myWalletAddress=myKey.getPublic('hex');

let coin=new Blockchain();
coin.minePendingTransactions(myWalletAddress);
const tx1=new Transaction(myWalletAddress,'public key',10);
tx1.signTransaction(myKey);
coin.addTransaction(tx1);
console.log('start');
coin.minePendingTransactions(myWalletAddress);
coin.minePendingTransactions(myWalletAddress);
console.log("balance of abc",coin.getBalanceAddress(myWalletAddress));
// const myKey=ec.keyFromPrivate('ef4c634158f1834eb19b3dca0d187dde2328ff134808e26026c63158303eb4fd');
// const wa
// let coin=new Blockchain();

// coin.createTransaction(new Transaction("p1","p2",100));
// coin.createTransaction(new Transaction("p2","p1",50));

// console.log("miner");
// coin.minePendingTransactions("abc");

// console.log('balance of abc is',coin.getBalanceAddress("abc"));
// coin.minePendingTransactions("abc");
// console.log('balance of abc is',coin.getBalanceAddress("abc"));
