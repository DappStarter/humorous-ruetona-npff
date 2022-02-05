require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half problem forward tooth warrior ridge remind exchange grace pet swear segment'; 
let testAccounts = [
"0x253caf9b490bed9fd6324bc5db1787b54e0c008bd002d912c3a26cd53fe7fc6b",
"0xa91b9d5042d988609f691620e638f72e45e5a88f130626cd9f4245d5c160c743",
"0x6c02c10da7a23d0def22c7d746a59f039068e8359b8b436e1225063e6aad18a8",
"0xb0bfcaff11351b5ee08cad63d867fcabd959109802154ac2874e5c12a59be7ab",
"0x00974e4268283749621b4392750c68680c14e39bcf8a47ef3b4ded1d6fa2c226",
"0xce37cac94da5ec6b2490ef82f2b098ee65e97b39be3512aa1eb7a674d6d63c44",
"0x684f1aa5d98e4c83fb213fdebd042e99055d0cffb18b901f5a74997a24b800be",
"0xefa2f73c719db460a9442ac2c921e14a73d0a5cedd422ac230b4eba830f06d58",
"0xcf1cbcc9c876adce176f64f5274a0338730a9baf5af76dddad7701075e5d0bad",
"0xe018f5318063a469045090e865e85cbdb0023875210b8bbbd49c80fef28fd2de"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


