import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

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
      textAlign: 'center',
      //width: '75%',
      // margin: '1% auto 1% auto',
      // border: '1mm solid rgba(174, 223, 212, .6)'
    },
    gridStyles: {
      margin: 'auto',
      width: '100%',
    },
    itemStyle: {
      // marginRight: '5px',
      // marginLeft: '5px',
      // border: '1px dotted blue'
    },
    hrStyle: {
      // marginTop: '37px',
      // clear: 'both',
      visibility: 'hidden',
    }
});
  

class AccountDetails extends Component {

    render() {
        //const { }
        const { classes, accountInfo, delband, rexBalance } = this.props;
       
         // Liquid Balance
        var eosBalanceLiquid = 0.0000

        // Resources
        var totalResources = 0.0000

        // Resources Delegated to others
        var totalResourcesDelegated = 0.0000

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

        if (delband) {
          delband.map((el) => {
            if (el.to !== el.from) {
              totalResourcesDelegated += ( parseFloat(el.cpu_weight.split(' ')[0])
                                          + parseFloat(el.net_weight.split(' ')[0]) )
            }
            return 0
          })
        }

        if (accountInfo.refund_request)
          totalRefund = parseFloat(accountInfo.refund_request.cpu_amount.split(' ')[0])
                        + parseFloat(accountInfo.refund_request.net_amount.split(' ')[0])

        // Total Balance
        var eosTotal =  eosBalanceLiquid 
                        + totalRefund 
                        + totalResources
                        + totalResourcesDelegated
                        + rexVoteStake
        
        return (
          <div className={classes.root}>
          <Grid
            container
            spacing={10}
            direction="column"
            alignItems="center"
            justify="center"
            className={classes.gridStyles}
          >

            <Grid item className={classes.itemStyle}>
              <Grid
                container
                spacing={1}
                direction="row"
                alignItems="center"
                justify="center"
                className={classes.root}
              >
              
                <Grid item>
                  <AccountName accountInfo={accountInfo} eosTotal={eosTotal}></AccountName>
                </Grid>

                <Grid item>
                  <RAM accountInfo={accountInfo}></RAM>
                </Grid>

                <Grid item>
                  <TotalResources accountInfo={accountInfo} delband={delband}></TotalResources>
                </Grid>

              </Grid>
            </Grid>

            <Grid item className={classes.itemStyle}>
              <Permissions accountInfo={accountInfo}></Permissions>
            </Grid>

            <Grid item className={classes.itemStyle}>
              <Grid
                container
                spacing={5}
                direction="row"
                justify="center"
                alignItems="stretch"
                className={classes.root}
              >

                <Grid item>
                  <Grid
                    container
                    spacing={4}
                    direction="column"
                    justify="center"
                    alignItems="stretch"
                  >
                  
                    <Grid item>
                      <LiquidBalance eosBalanceLiquid={eosBalanceLiquid}></LiquidBalance>
                      <RefundRequest accountInfo={accountInfo}></RefundRequest>
                    </Grid>


                    {/* <Grid item>
                      <hr className={classes.hrStyle}></hr>
                    </Grid> */}

                    <Grid item>
                      <REXBalance accountInfo={accountInfo} rexBalance={rexBalance}></REXBalance>
                    </Grid>

                  </Grid>
                  
                </Grid>

                <Grid item>
                  <VoterInfo accountInfo={accountInfo}></VoterInfo>
                </Grid>

              </Grid>

            </Grid>
          </Grid>
          </div>

        )
    }
}

export default withStyles(styles)(AccountDetails);