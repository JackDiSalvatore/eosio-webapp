import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({

});
  

class AccountName extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        //const { }
        const { accountInfo, eosTotal } = this.props;

        return (
          <Grid container direction="row" spacing={8}>

            <Grid item>
              <Typography style={{marginTop:'0.35em'}} color="secondary" variant="h6" gutterBottom>
                {accountInfo.account_name}
              </Typography>
            </Grid>

            <Grid item>
              <Typography variant="h4" gutterBottom>
                { Math.floor(eosTotal * 10000) / 10000 } EOS
              </Typography>
            </Grid>

          </Grid>
        )
    }
}

export default withStyles(styles)(AccountName);