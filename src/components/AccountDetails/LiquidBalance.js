import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  textStyle: {
    color: theme.palette.secondary.contrastText,
  },
  specialTextStyle: {
    color: theme.palette.secondary.main
  },    
  itemStyle: {
    marginLeft: '25px',
  }
});
  

class LiquidBalance extends Component {

    render() {
        //const { }
        const { classes, eosBalanceLiquid } = this.props;

        return (
          <Grid container direction="row" justify="space-between" alignItems="center" spacing={2} className={classes.root}>

            <Grid item>
              <Typography className={classes.textStyle}>
                Balance
              </Typography>
            </Grid>

            <Grid item>
              <Typography className={classes.textStyle}>
                { eosBalanceLiquid } EOS
              </Typography>
            </Grid>
          </Grid>
        )
    }
}

export default withStyles(styles)(LiquidBalance);