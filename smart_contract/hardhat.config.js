require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/uejzUHKQsxU9q2JcZq4jwmcp9d2zSA-j',
      accounts: [ '565e02d9e07c45aac59c33401713a4b51740dbbd769efcabbf464a4394f54d45' ]
    }
  }
}