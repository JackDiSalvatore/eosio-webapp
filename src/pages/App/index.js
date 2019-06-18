import React, { Component } from 'react';
import { connect } from 'react-redux';
import { JsonRpc, RpcError } from 'eosjs';

import './App.css';
import { withStyles } from '@material-ui/core/styles';

// import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import TextField from '@material-ui/core/TextField';
//import Paper from '@material-ui/core/Paper';
//import Button from '@material-ui/core/Button';

// Actions
import { SetAccountAction } from '../../actions';

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
  textStyle: {
    color: theme.palette.secondary.contrastText,
  },
});

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      chainInfo: {
        "chain_id": "DISCONNECTED",
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
      rpc.get_account(accountName).then(result => {
        this.setState({accountInfo: result})
        // CALL ACTION
        this.props.setUser(result)
      });
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
    this.getAccountDetails('eos');
  }

  render() {
    const { chainInfo, rexBalance } = this.state;
    const { classes, accountInfo } = this.props;

    return (

      <div className="App">
        <SearchAppBar chainId={chainInfo.chain_id} getAccountDetails={this.getAccountDetails.bind(this)}></SearchAppBar>

        <AccountDetails accountInfo={accountInfo} rexBalance={rexBalance}></AccountDetails>
      </div>

    )

  };

}

function mapStateToProps(state) {
  return {
    accountInfo: state.accountInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (accountInfo) => { dispatch(SetAccountAction(accountInfo)) },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));
