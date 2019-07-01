# eosio-webapp

[View App](https://eosio-webapp.herokuapp.com/)

![demo image could not be displayed: https://raw.githubusercontent.com/JackDiSalvatore/eosio-webapp/master/docs/design/demo-image.png](https://raw.githubusercontent.com/JackDiSalvatore/eosio-webapp/master/docs/design/demo-image.png)

### About
eosio-webapp is an EOS account explorer / configurator.  Simply type in the name of any EOS Mainnet account you wish to view and search.
Currently eosio-webapp displays the following information:

* Total EOS Balance (including all tokens staked to self, staked to others, and staked to REX)
* Account Name
* Total RAM use
* CPU and NET bandwidth values
* Total Resources (staked to self, delegated to self, and delegating to others)
* Account Permissions Tree
* Liquid EOS Balance
* Refunding EOS (CPU / NET)
* EOS Staked to REX
* REX Balance

### Road Map
[] - Futher Details for:
    * Accounts Delegated To
    * Permission linkauth details
[X] - Support for Jungle Testnet / EOS sister chains
[] - Login via wallet / Scatter
[] - Support for Token transfers
[] - Support for Smart Account creation
[] - Support for new account creation
[] - Support for further account configuration

### Install
`yarn install`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Run
`yarn start`

`yarn run`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
