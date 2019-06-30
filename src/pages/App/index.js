import React, { Component } from 'react';
import { connect } from 'react-redux';
import { JsonRpc } from 'eosjs';
// import { RpcError } from 'eosjs';

import './App.css';
import { withStyles } from '@material-ui/core/styles';

// Actions
import { SetAccountAction } from '../../actions/SetAccountAction';
import { SetChainInfoAction } from '../../actions/SetChainInfoAction';
import { SetREXBalanceAction } from '../../actions/SetREXBalanceAction';
import { SetdelbandAction } from '../../actions/SetdelbandAction';

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

    }

  }

  async getAccountDetails(accountName) {
    const rpc = new JsonRpc(endpoint, { fetch });
    console.log('Account Name is ' + accountName);
    try {
      rpc.get_info().then(result => {
        this.setState({chainInfo: result})
        // CALL ACTION
        this.props.setChainInfo(result)
      })

      rpc.get_account(accountName).then(result => {
        this.setState({accountInfo: result})
        // CALL ACTION
        this.props.setUser(result)
      });

      // get bandwidth delegated to other accounts
      rpc.get_table_rows({
        json: true,
        code: 'eosio',                // contract who owns the table
        scope: accountName,               // scope of the table
        table: 'delband',              // name of the table as specified by the contract abi
        limit: 1000,                    // Here we limit to 1 to get only the
        reverse: false,               // Optional: Get reversed data
        show_payer: false,            // Optional: Show ram payer
       }).then(result => {
         this.setState({ delband: result.rows })
         // CALL ACTION
         this.props.setdelbandAction(result.rows)
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
      }).then(result => {
        this.setState({ rexBalance: result.rows[0] })
        // CALL ACTION
        this.props.setREXBalance(result.rows[0])
      });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getAccountDetails('eos');
  }

  render() {
    // const {  } = this.state;
    const { accountInfo, chainInfo, delband, rexBalance } = this.props;

    return (

      <div className="App">
        <SearchAppBar chainId={chainInfo.chain_id} getAccountDetails={this.getAccountDetails.bind(this)}></SearchAppBar>

        <AccountDetails accountInfo={accountInfo} delband={delband} rexBalance={rexBalance}></AccountDetails>
      </div>

    )

  };

}

function mapStateToProps(state) {
  return {
    accountInfo: state.accountInfo,
    chainInfo: state.chainInfo,
    rexBalance: state.rexBalance,
    delband: state.delband,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (accountInfo) => { dispatch(SetAccountAction(accountInfo)) },
    setChainInfo: (chainInfo) => { dispatch(SetChainInfoAction(chainInfo)) },
    setREXBalance: (rexBalance) => { dispatch(SetREXBalanceAction(rexBalance)) },
    setdelbandAction: (delband) => { dispatch(SetdelbandAction(delband)) },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));
