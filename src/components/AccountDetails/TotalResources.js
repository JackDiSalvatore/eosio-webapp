import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({

});

class TotalResources extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        //const { }
        const { accountInfo } = this.props;

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
          <Grid container direction="row" spacing={16}>
      
            <Grid item>
              <Typography style={{fontSize:12}} variant="body1" gutterBottom>
                Bandwidth
              </Typography>
              <Typography style={{fontSize:12}} variant="body1" gutterBottom>
                CPU:
              </Typography>
              <Typography style={{fontSize:12}} variant="body1" gutterBottom>
                NET:
              </Typography>
            </Grid>
    
            <Grid item>
              <Typography style={{fontSize:12}} variant="body1" gutterBottom>
                Used
              </Typography>
              <Typography style={{fontSize:12}} variant="body1" gutterBottom>
                {Math.floor((accountInfo.cpu_limit.used / accountInfo.cpu_limit.max)*100)}%
              </Typography>
              <Typography style={{fontSize:12}} variant="body1" gutterBottom>
                {Math.floor((accountInfo.net_limit.used / accountInfo.net_limit.max)*100)}% 
              </Typography>
            </Grid>

            <Grid item style={{textAlign:'right'}}>
              <Typography style={{fontSize:12}} variant="body1" gutterBottom>
                Staked
              </Typography>
              <Typography style={{fontSize:12}} variant="body1" gutterBottom>
                <span> {selfResourcesCPU} EOS</span>
              </Typography>
              <Typography style={{fontSize:12}} variant="body1" gutterBottom>
                <span> {selfResourcesNET} EOS</span>
              </Typography>
            </Grid>

            <Grid item style={{textAlign:'right'}}>
              <Typography style={{fontSize:12}} variant="body1" gutterBottom>
                Delegated
              </Typography>
              <Typography style={{fontSize:12}} variant="body1" gutterBottom>
                <span> { Math.floor((totalResourcesCPU - selfResourcesCPU) * 10000) / 10000 } EOS</span>
              </Typography>
              <Typography style={{fontSize:12}} variant="body1" gutterBottom>
                <span> { Math.floor((totalResourcesNET - selfResourcesNET) * 10000) / 10000 } EOS</span>
              </Typography>
            </Grid>

            <Grid item style={{textAlign:'right'}}>
              <Typography style={{fontSize:12}} variant="body1" gutterBottom>
                Delegating
              </Typography>
              <Typography style={{fontSize:12}} variant="body1" gutterBottom>
                <span> todo...</span>
              </Typography>
              <Typography style={{fontSize:12}} variant="body1" gutterBottom>
                <span> todo...</span>
              </Typography>
            </Grid>

            <Grid item>
              <Typography style={{fontSize:12}} variant="body1" gutterBottom>
                Available
              </Typography>
              <Typography style={{fontSize:12}} variant="body1" gutterBottom>
                <span> { (accountInfo.cpu_limit.available / 1000000) } seconds</span>
              </Typography>
              <Typography style={{fontSize:12}} variant="body1" gutterBottom>
                <span> {accountInfo.net_limit.available} bytes </span>
              </Typography>
            </Grid>

          </Grid>
        )
    }
}

export default withStyles(styles)(TotalResources);