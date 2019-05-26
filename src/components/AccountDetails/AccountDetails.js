import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import AccountName from './AccountName';
import LiquidBalance from './LiquidBalance';
import Permissions from './Permissions';
import RefundRequest from './RefundRequest';
import RAM from './RAM';
import REXBalance from './REXBalance';
import TotalResources from './TotalResources';
import VoterInfo from './VoterInfo';

const styles = theme => ({
    root: {
      flexGrow: 1,
      //width: '75%',
      margin: '1% auto 1% auto',
      // border: '1mm solid rgba(174, 223, 212, .6)'
    },
    voteInfo: {
      // margin: 'auto',
      padding: '0 20px 0 20px'
    },
  });
  

class AccountDetails extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        //const { }
        const { classes, accountInfo, rexBalance } = this.props;
       
         // Liquid Balance
        var eosBalanceLiquid = 0.0000

        // Resources
        var totalResources = 0.0000

        // Refunding
        var totalRefund = 0.0000

        // REX
        var rexVoteStake =  0.0000

        if (accountInfo.core_liquid_balance)
          eosBalanceLiquid = parseFloat(accountInfo.core_liquid_balance.split(' ')[0])

        if (rexBalance.owner === accountInfo.account_name)
          rexVoteStake = parseFloat(rexBalance.vote_stake.split(' ')[0])

        if (accountInfo.self_delegated_bandwidth)
          totalResources = parseFloat(accountInfo.self_delegated_bandwidth.cpu_weight.split(' ')[0])
                           + parseFloat(accountInfo.self_delegated_bandwidth.net_weight.split(' ')[0])

        if (accountInfo.refund_request)
          totalRefund = parseFloat(accountInfo.refund_request.cpu_amount.split(' ')[0])
                        + parseFloat(accountInfo.refund_request.net_amount.split(' ')[0])

        // Total Balance
        var eosTotal =  eosBalanceLiquid 
                        + totalRefund 
                        + totalResources 
                        + rexVoteStake
        
        return (
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            className={classes.root}
          >
          
            <Grid item>
              <AccountName accountInfo={accountInfo} eosTotal={eosTotal}></AccountName>
              <Permissions accountInfo={accountInfo}></Permissions>
              <LiquidBalance eosBalanceLiquid={eosBalanceLiquid}></LiquidBalance>
              <RefundRequest accountInfo={accountInfo}></RefundRequest>
              <REXBalance accountInfo={accountInfo} rexBalance={rexBalance}></REXBalance>
              <RAM accountInfo={accountInfo}></RAM>
              <TotalResources accountInfo={accountInfo}></TotalResources>
              <VoterInfo accountInfo={accountInfo}></VoterInfo>
            </Grid>

          </Grid>
        )
    }
}

export default withStyles(styles)(AccountDetails);