import React, { Component } from 'react';
import { JsonRpc, RpcError } from 'eosjs';

import './App.css';
import { withStyles } from '@material-ui/core/styles';

//import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import TextField from '@material-ui/core/TextField';
//import Paper from '@material-ui/core/Paper';
//import Button from '@material-ui/core/Button';

// Components
import AccountDetails from '../../components/AccountDetails/AccountDetails';
import SearchAppBar from '../../components/SearchAppBar/SearchAppBar';

// Endpoints;
//const localNet = 'http://localhost:888';
//const jungleTestNet = 'https://jungle2.cryptolions.io:443'
const mainNet = 'https://api.eosdetroit.io:443';
//const mainNetBackup = 'http://api.cypherglass.com:8888';
const endpoint = mainNet;

const styles = theme => ({

});

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      chainInfo: {
        "chain_id": "DISCONNECTED",
      },
      accountInfo: {
        "account_name": "testacc",
        "core_liquid_balance": "25.8044 EOS",
        "head_block_num": 1079,
        "head_block_time": "2018-11-10T00:45:53.500",
        "privileged": false,
        "last_code_update": "1970-01-01T00:00:00.000",
        "created": "2018-11-10T00:37:05.000",
        "ram_quota": -1,
        "net_weight": -1,
        "cpu_weight": -1,
        "net_limit": { "used": -1, "available": -1, "max": -1 },
        "cpu_limit": { "used": -1, "available": -1, "max": -1 },
        "ram_usage": 2724,
        "permissions": [
          { 
            "perm_name": "active",
            "parent": "owner",
            "required_auth": {
              "accounts": [
                {
                  "actor": "",
                  "permission": "",
                  "weight": 0,
                }
              ],
              "keys": [
                {
                  "key": "",
                  "weight": 0,
                }
              ],
              "threshold": 0,
              "waits": [
                {
                  "wait_sec": 0,
                  "weight": 0,
                }
              ]
            }
          } 
        ],
        "total_resources": {
          cpu_weight: "10.5481 EOS",
          net_weight: "10.5482 EOS",
          owner: "eosio",
          ram_bytes: 14021,
        },
        "self_delegated_bandwidth": {
          cpu_weight: "10.5481 EOS",
          from: "eosio",
          net_weight: "10.5482 EOS",
          to: "eosio"
        },
        "refund_request": {
          cpu_amount: "0.0000 EOS",
          net_amount: "880.0000 EOS",
          owner: "eosio",
          request_time: "2019-05-15T12:25:29"
        },
        "voter_info": {
          flags1: 0,
          is_proxy:0,
          last_vote_weight: "6335582760066.02734375000000000",
          owner: "testacc",
          producers: ["1eostheworld"],
          proxied_vote_weight: "0.00000000000000000",
          proxy: "",
          reserved2: 0,
          reserved3: "0.0000 EOS",
          staked: 9012760
        } 
      },
      rexBalance: {
        version: 0,
        owner: 'eosio',
        vote_stake: '880.1797 EOS',
        rex_balance: '8799320.5007 REX',
        matured_rex: 0,
        rex_maturities: [{
            first: '2019-05-06T00:00:00',
            second: '87993205007'
          }
        ]
      }
    }

  }

  async getAccountDetails(accountName) {
    const rpc = new JsonRpc(endpoint, { fetch });
    console.log('Account Name is ' + accountName);
    try {
      rpc.get_info().then(result => this.setState({chainInfo: result}))
      rpc.get_account(accountName).then(result => this.setState({accountInfo: result}));
      // rpc.get_currency_balance('eosio.token', accountName, 'EOS').then(result => this.setState({ eosBalance: result}));
      rpc.get_table_rows({
       json: true,
       code: 'eosio',                // contract who owns the table
       scope: 'eosio',               // scope of the table
       table: 'rexbal',              // name of the table as specified by the contract abi
       lower_bound: accountName,
       limit: 1,                     // Here we limit to 1 to get only the
       reverse: false,               // Optional: Get reversed data
       show_payer: false,            // Optional: Show ram payer
      }).then(result => this.setState({ rexBalance: result.rows[0] }));
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getAccountDetails('jdisalvatore');
  }

  render() {
    const { chainInfo, accountInfo, rexBalance } = this.state;
    const { classes } = this.props;

    return (

      <div className="App">
        <SearchAppBar chainId={chainInfo.chain_id} getAccountDetails={this.getAccountDetails.bind(this)}></SearchAppBar>

        <AccountDetails accountInfo={accountInfo} rexBalance={rexBalance}></AccountDetails>
      </div>

    )

  };

}

export default withStyles(styles)(App);
