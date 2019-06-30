import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { ThemeProvider } from 'styled-components';

import ProgressBar from '../ProgressBar.js';

const styles = theme => ({
  root: {
    flexGrow: 1,
    // border: '1mm solid rgba(174, 223, 212, .6)'
  },
  bandwithTextStyle: {
    color: theme.palette.primary.contrastText,
    letterSpacing: '0.1em',
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

const CPUBarColor = {
  backgroundImage: 'linear-gradient(270deg, #13A3FF 0%, #002C86 100%)',
}

const NETBarColor = {
  backgroundImage: 'linear-gradient(270deg, #2BDB00 0%, #167000 100%)',
}

class TotalResources extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        //const { }
        const { classes, accountInfo, delband } = this.props;

        // Self Delegated Resources
        var selfResourcesCPU = 0.0000
        var selfResourcesNET = 0.0000 

        // Total Resources
        var totalResourcesCPU = 0.0000;
        var totalResourcesNET = 0.0000;

        var total_cpu_percentage = 0
        var total_net_percentage = 0

        // Resources Delegated to other accounts
        var total_cpu_delegated = 0.0000
        var total_net_delegated = 0.0000

        delband.map((el, idx) => {
          if (el.to !== el.from) {
            total_cpu_delegated += parseFloat(el.cpu_weight.split(' ')[0])
            total_net_delegated += parseFloat(el.net_weight.split(' ')[0])
          }
        })
        total_cpu_delegated =  Math.floor(total_cpu_delegated * 10000) / 10000
        total_net_delegated =  Math.floor(total_net_delegated * 10000) / 10000
        // console.log('----------')
        // console.log('total cpu = ' + total_cpu_delegated)
        // console.log('total net = ' + total_net_delegated)
        // console.log('----------')
        
        if (accountInfo.total_resources) {
            totalResourcesCPU = parseFloat(accountInfo.total_resources.cpu_weight.split(' ')[0]);
            totalResourcesNET = parseFloat(accountInfo.total_resources.net_weight.split(' ')[0]);

            // Displaying the percentage as resources still available instead of as resources currently used
            total_cpu_percentage = 100 - Math.floor((accountInfo.cpu_limit.used / accountInfo.cpu_limit.max)*100)
            total_net_percentage = 100 - Math.floor((accountInfo.net_limit.used / accountInfo.net_limit.max)*100)

            if (total_cpu_percentage == '-Infinity' || isNaN(total_net_percentage))
              total_cpu_percentage = 100

            if (total_net_percentage == '-Infinity' || isNaN(total_net_percentage))
              total_net_percentage = 100

        }

        if (accountInfo.self_delegated_bandwidth) {
          selfResourcesCPU = parseFloat(accountInfo.self_delegated_bandwidth.cpu_weight.split(' ')[0])
          selfResourcesNET = parseFloat(accountInfo.self_delegated_bandwidth.net_weight.split(' ')[0])
        }

        return (
          <Grid item container direction="column" justify="center" alignItems="flex-start" spacing={0} className={classes.root}>

            <Grid item>
                <Typography className={classes.bandwithTextStyle} varient="h5">
                  Bandwidth
                </Typography>
            </Grid>


            <Grid item>
              <Grid container direction="row" alignItems="center" justify="center" spacing={2}>
          
                <Grid item>
                {/* <Typography className={classes.bandwithTextStyle}>
                    Bandwidth
                  </Typography> */}
            
                  <ThemeProvider theme={CPUBarColor}>
                    <ProgressBar percentage={total_cpu_percentage} />
                  </ThemeProvider>

                  <ThemeProvider theme={NETBarColor}>
                    <ProgressBar percentage={total_net_percentage} />
                  </ThemeProvider>

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
                    <span> {total_cpu_delegated} EOS</span>
                  </Typography>
                  <Typography className={classes.textStyle}>
                    <span> {total_net_delegated} EOS</span>
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
            </Grid>

          </Grid>
          
        )
    }
}

export default withStyles(styles)(TotalResources);