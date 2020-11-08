const EC = require('elliptic').ec;
const ec=new EC('secp256k1');

const key=ec.genKeyPair();
const publicKey=key.getPublic('hex');
const privateKey=key.getPrivate('hex');

console.log();

console.log(publicKey);
console.log(privateKey);

//public: 04fe3b1a16c6b8e428a6786eb1f2d9e1563700eb1ad8665c1c63d707cd18e1399a89c92def8d3b0010364d892f155d626bd2eabdf5b9094b1d27ba930d94c9e60f
//private: ef4c634158f1834eb19b3dca0d187dde2328ff134808e26026c63158303eb4fd