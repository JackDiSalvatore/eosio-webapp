import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    // border: '1mm solid rgba(174, 223, 212, .6)'
  },
  bandwithTextStyle: {
    color: theme.palette.primary.contrastText,
    fontSize: 16,
  },
  headerTextStyle: {
    color: theme.palette.primary.contrastText,
    // fontFamily: 'Exo2Bold',
    // fontSize: 12,
    letterSpacing: '0.25em',
    textAlign: 'left',
  },
  textStyle: {
    color: theme.palette.secondary.contrastText,
    fontSize: 12,
  },
  specialTextStyle: {
    color: theme.palette.secondary.main,
  },
  itemStyle: {
    // marginRight: '15px',
    // marginLeft: '15px',
    // border: '1px solid red'
  }
});

class TotalResources extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        //const { }
        const { classes, accountInfo } = this.props;

        // Self Delegated Resources
        var selfResourcesCPU = 0.0000
        var selfResourcesNET = 0.0000 

        // Total Resources
        var totalResourcesCPU = 0.0000;
        var totalResourcesNET = 0.0000;
        
        if (accountInfo.total_resources) {
            totalResourcesCPU = parseFloat(accountInfo.total_resources.cpu_weight.split(' ')[0]);
            totalResourcesNET = parseFloat(accountInfo.total_resources.net_weight.split(' ')[0]);
        }

        if (accountInfo.self_delegated_bandwidth) {
          selfResourcesCPU = parseFloat(accountInfo.self_delegated_bandwidth.cpu_weight.split(' ')[0])
          selfResourcesNET = parseFloat(accountInfo.self_delegated_bandwidth.net_weight.split(' ')[0])
        }

        return (
          <div className={classes.root}>
          <Grid container direction="row" alignItems="center" justify="center" spacing={2}>
      
            <Grid item>
            <Typography className={classes.bandwithTextStyle}>
                Bandwidth
              </Typography>
              <Typography className={classes.textStyle}>
                {Math.floor((accountInfo.cpu_limit.used / accountInfo.cpu_limit.max)*100)}%
              </Typography>
              <Typography className={classes.textStyle}>
                {Math.floor((accountInfo.net_limit.used / accountInfo.net_limit.max)*100)}% 
              </Typography>
            </Grid>

            <Grid item className={classes.itemStyle}>
              <Typography className={classes.specialTextStyle} variant="h5">
                CPU
              </Typography>

              <Typography className={classes.specialTextStyle} variant="h5">
                NET
              </Typography>
            </Grid>

            <Grid item style={{textAlign:'left'}}>
              <Typography className={classes.headerTextStyle} variant="caption">
                Staked
              </Typography>
              <Typography className={classes.textStyle}>
                <span> {selfResourcesCPU} EOS</span>
              </Typography>
              <Typography className={classes.textStyle}>
                <span> {selfResourcesNET} EOS</span>
              </Typography>
            </Grid>

            <Grid item style={{textAlign:'left'}}>
              <Typography className={classes.headerTextStyle} variant="caption">
                Delegated
              </Typography>
              <Typography className={classes.textStyle}>
                <span> { Math.floor((totalResourcesCPU - selfResourcesCPU) * 10000) / 10000 } EOS</span>
              </Typography>
              <Typography className={classes.textStyle}>
                <span> { Math.floor((totalResourcesNET - selfResourcesNET) * 10000) / 10000 } EOS</span>
              </Typography>
            </Grid>

            <Grid item style={{textAlign:'left'}}>
              <Typography className={classes.headerTextStyle} variant="caption">
                Delegating
              </Typography>
              <Typography className={classes.textStyle}>
                <span> todo...</span>
              </Typography>
              <Typography className={classes.textStyle}>
                <span> todo...</span>
              </Typography>
            </Grid>

            {/* <Grid item>
              <Typography style={{fontSize:12}} variant="body1" gutterBottom>
                Available
              </Typography>
              <Typography style={{fontSize:12}} variant="body1" gutterBottom>
                <span> { (accountInfo.cpu_limit.available / 1000000) } seconds</span>
              </Typography>
              <Typography style={{fontSize:12}} variant="body1" gutterBottom>
                <span> {accountInfo.net_limit.available} bytes </span>
              </Typography>
            </Grid> */}

          </Grid>
          </div>
        )
    }
}

export default withStyles(styles)(TotalResources);