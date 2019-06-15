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
    // marginLeft: '25px',
  }
});


class RefundRequest extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        //const { }
        const { classes, accountInfo } = this.props;

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
          <Grid container direction="row" justify="space-between" alignItems="center" spacing={2}>
            <Grid item>
              <Typography className={classes.textStyle}>
                Refunding
              </Typography>
            </Grid>
    
            <Grid item className={classes.itemStyle}>
              <Typography className={classes.textStyle}>
                {totalRefund}
              </Typography>
            </Grid>
    
            {/* <Grid item>
              <Typography style={{fontSize:12}} className={classes.textStyle}>
                {refundRequestCPU} CPU / {refundRequestNET} NET
                <span> {requestTime}</span>
              </Typography>
            </Grid> */}
          </Grid>
        )
    }
}

export default withStyles(styles)(RefundRequest);