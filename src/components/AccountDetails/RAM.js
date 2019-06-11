import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({

});

class RAM extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        //const { }
        const { accountInfo } = this.props;

        return (
          <Grid container direction="row" spacing={8}>
      
            <Grid item>
              <Typography style={{fontSize:12}} variant="body1" gutterBottom>
                RAM Utilization: 
              </Typography>
            </Grid>
    
            <Grid item>
              <Typography style={{fontSize:12}} variant="body1" gutterBottom>
                { Math.floor((accountInfo.ram_usage / accountInfo.ram_quota)*100) }%
              </Typography>
            </Grid>

            <Grid item>
              <Typography style={{fontSize:12}} variant="body1" gutterBottom>
                <span>{accountInfo.ram_usage} / { + accountInfo.ram_quota} Bytes</span>
              </Typography>
            </Grid>

          </Grid>
        )
    }
}

export default withStyles(styles)(RAM);