require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift regret spice pumpkin inflict cloth equal genuine'; 
let testAccounts = [
"0xeaa3885a2003d15c93f26b2c360718f36bfe9ae58d1353452f57b8d1e8b0c32e",
"0xda36be98ba9f606c3fb9e1f6d67eb82c3af35e661a63c56d3a84a6544c27f0ad",
"0x7d69313308f2c8799a4bb6634f6cf505e18ca5868201660067d37b8221aa14c8",
"0x659c58d9cd4faf266a1c95254bdbbde7a1597ff8d83fcc7b84b457de35572a2f",
"0x564ae4c444780d89cd1631629ecc5fdceae047ffab589bc371e350dd7becb928",
"0xe44624e5c1d24e2503c0eaa2c81ef8d2e21d38d68d2860dba868acdb6f3142e4",
"0x1f4c86540b65d4ffa7a1d4f70677742459d8b23f6c80e5c55e72c26f20430061",
"0xb30c8b040f27f3ef94e2178a5021c0df60f392653370be71a6d0ce831a2141de",
"0xde2412f9116084bf8f1f850449468c132e6251102f059c411f71e3da137ad842",
"0xb349c59a734d86b83a4b29d2dc10b08d6ad8e4dc927a2c51b6ebf9f1f6e84643"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

