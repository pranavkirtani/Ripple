'use strict';
const RippleAPI= require('ripple-lib').RippleAPI;

const api = new RippleAPI({server: 'wss://s1.ripple.com:443'});
const address = 'r3kmLJN5D28dHuH8vZNUZpMC43pEHpaocV';

api.connect().then(() => {
  api.getBalances(address).then(balances => {
    console.log(JSON.stringify(balances, null, 2));
    process.exit();
  });
});