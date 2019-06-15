import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  textStyle: {
    color: theme.palette.secondary.contrastText,
  },
  headerTextStyle: {
    color: theme.palette.primary.contrastText,
    fontFamily: 'Exo2Bold',
    fontSize: 12,
    letterSpacing: '0.25em',
    textAlign: 'left',
  }
});
  

class REXBalance extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        //const { }
        const { classes, accountInfo, rexBalance } = this.props;

        var rexVoteStake = '0.0000 EOS'
        var rex_balance = '0.0000 REX'
        var rexMatured = 0

        if (rexBalance.owner === accountInfo.account_name) {
          rexVoteStake = rexBalance.vote_stake
          rex_balance = rexBalance.rex_balance
          rexMatured = rexBalance.matured_rex
        }


        return (
          <div>

                <Typography className={classes.headerTextStyle} gutterBottom>
                  REX
                </Typography>


            {/* <Grid container direction="column" justify="center" alignItems="stretch" spacing={0} className={classes.root}> */}
              
              {/* <Grid item> */}
                <Grid container direction="row" justify="space-between" alignItems="center" spacing={2}>
      
                  <Grid item>
                    <Typography className={classes.textStyle}>
                      Staked 
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Typography className={classes.textStyle}>
                      {rexVoteStake}
                    </Typography>
                  </Grid> 

                </Grid>
              {/* </Grid> */}

              {/* <Grid item> */}
                <Grid container direction="row" justify="space-between" alignItems="center" spacing={2}>
      
                  <Grid item>
                    <Typography className={classes.textStyle}>
                      Balance 
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Typography className={classes.textStyle}>
                      {rex_balance}
                    </Typography>
                  </Grid>   

                </Grid>
              {/* </Grid> */}

            {/* <Typography style={{fontSize:12}} variant="body1" gutterBottom>
              REX Matured: 
            </Typography>
            <Typography style={{fontSize:12}} variant="body1" gutterBottom>
              {rexMatured}
            </Typography> */}

            {/* </Grid> */}
          </div>
        )
    }
}

export default withStyles(styles)(REXBalance);