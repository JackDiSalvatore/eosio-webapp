import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
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

const HtmlTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: '#979797',
    color: theme.palette.primary.contrastText,
    // maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    // border: '1px solid #dadde9',
  },
}))(Tooltip);


class RefundRequest extends Component {

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
          totalRefund = Math.floor(
                        ( parseFloat(refundRequestCPU.split(' ')[0])
                        + parseFloat(refundRequestNET.split(' ')[0])
                        ) * 10000) / 10000
        }

        return (
          <Grid container direction="row" justify="space-between" alignItems="center" spacing={2}>
            <Grid item>
              <Typography className={classes.textStyle}>
                Refunding
              </Typography>
            </Grid>
    
            <Grid item className={classes.itemStyle}>
              <HtmlTooltip title={
                <React.Fragment>
                  <Typography>
                    CPU: {refundRequestCPU}
                  </Typography>
                  <Typography>
                    NET: {refundRequestNET}
                  </Typography>
                  <Typography>
                    Requested: {requestTime}
                  </Typography>
                </React.Fragment>
                } placement="bottom">

                <Typography className={classes.textStyle}>
                  {totalRefund}
                </Typography>

              </HtmlTooltip>
            </Grid>
          </Grid>
        )
    }
}

export default withStyles(styles)(RefundRequest);