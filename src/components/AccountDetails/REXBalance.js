import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({

  });
  

class REXBalance extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        //const { }
        const { accountInfo, rexBalance } = this.props;

        var rexVoteStake = '0.0000 EOS'
        var rex_balance = '0.0000 REX'
        var rexMatured = 0

        if (rexBalance.owner === accountInfo.account_name) {
          rexVoteStake = rexBalance.vote_stake
          rex_balance = rexBalance.rex_balance
          rexMatured = rexBalance.matured_rex
        }


        return (
          <Grid container direction="row" spacing={16}>
  
          <Grid item>
            <Typography style={{fontSize:12}} variant="body1" gutterBottom>
              REX Vote Stake / REX Balance: 
            </Typography>
            <Typography style={{fontSize:12}} variant="body1" gutterBottom>
              REX Matured: 
            </Typography>
          </Grid>
  
          <Grid item>
            <Typography style={{fontSize:12}} variant="body1" gutterBottom>
              {rexVoteStake} / {rex_balance}
            </Typography>
            <Typography style={{fontSize:12}} variant="body1" gutterBottom>
              {rexMatured}
            </Typography>
          </Grid>   
  
        </Grid>
        )
    }
}

export default withStyles(styles)(REXBalance);