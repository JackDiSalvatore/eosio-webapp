import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({

});
  

class RefundRequest extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        //const { }
        const { accountInfo } = this.props;

        // Refunding
        var requestTime = null;
        var refundRequestCPU = '0.0000 EOS';
        var refundRequestNET = '0.0000 EOS';
        var totalRefund = '0.0000 EOS';

        if (accountInfo.refund_request) {
          requestTime = accountInfo.refund_request.request_time
          refundRequestCPU = accountInfo.refund_request.cpu_amount
          refundRequestNET = accountInfo.refund_request.net_amount
          totalRefund = parseFloat(refundRequestCPU.split(' ')[0])
                        + parseFloat(refundRequestNET.split(' ')[0])
        }

        return (
          <Grid container direction="row" spacing={16}>
            <Grid item>
              <Typography style={{fontSize:12}} variant="body1" gutterBottom>
                Refunding:
              </Typography>
            </Grid>
    
            <Grid item>
              <Typography style={{fontSize:12}} variant="body1" gutterBottom>
                {totalRefund}
              </Typography>
            </Grid>
    
            <Grid item>
              <Typography style={{fontSize:12}} variant="body1" gutterBottom>
                {refundRequestCPU} CPU / {refundRequestNET} NET
                <span> {requestTime}</span>
              </Typography>
            </Grid>
          </Grid>
        )
    }
}

export default withStyles(styles)(RefundRequest);