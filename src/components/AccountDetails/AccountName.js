import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  textStyle: {
    color: theme.palette.primary.contrastText,
  },
  accountNameStyle: {
    color: theme.palette.secondary.contrastText,
  },
  // gridStyle: {
  //   border: '2px dotted purple'
  // },
  // itemStyle: {
  //   border: '2px dotted yellow'
  // }
});
  

class AccountName extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        //const { }
        const { classes, accountInfo, eosTotal } = this.props;

        return (
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="flex-end"
            spacing={0}
            >

            <Grid item className={classes.itemStyle}>
              <Typography className={classes.textStyle} variant="h3">
                { Math.floor(eosTotal * 10000) / 10000 } EOS
              </Typography>
            </Grid>

            <Grid item className={classes.itemStyle}>
              <Typography className={classes.accountNameStyle} variant="h5">
                {accountInfo.account_name}
              </Typography>
            </Grid>

          </Grid>
        )
    }
}

export default withStyles(styles)(AccountName);