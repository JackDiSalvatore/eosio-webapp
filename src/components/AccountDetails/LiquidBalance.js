import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({

  });
  

class LiquidBalance extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        //const { }
        const { eosBalanceLiquid } = this.props;

        return (
          <Grid container direction="row" spacing={16}>
            <Grid item>
              <Typography style={{fontSize:12}} variant="body1" gutterBottom>
                Balance:
              </Typography>
            </Grid>
            <Grid item>
              <Typography style={{fontSize:12}} variant="body1" gutterBottom>
                { eosBalanceLiquid } EOS
              </Typography>
            </Grid>
          </Grid>
        )
    }
}

export default withStyles(styles)(LiquidBalance);