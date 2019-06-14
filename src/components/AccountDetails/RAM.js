import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    // border: '1mm solid rgba(174, 223, 212, .6)'
  },
  textStyle: {
    color: theme.palette.secondary.contrastText,
  },
  specialTextStyle: {
    color: theme.palette.secondary.main
  }
});

class RAM extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        //const { }
        const { classes, accountInfo } = this.props;

        return (
          <Grid container direction="column" spacing={0} className={classes.root}>
    
            <Grid item>
              <Typography className={classes.textStyle}  gutterBottom>
                { Math.floor((accountInfo.ram_usage / accountInfo.ram_quota)*100) }%
              </Typography>
            </Grid>

            <Grid item>
              <Typography className={classes.specialTextStyle} variant="h5">
                RAM
              </Typography>
            </Grid>

            {/* <Grid item>
              <Typography style={{fontSize:12}} variant="body1" gutterBottom>
                <span>{accountInfo.ram_usage} / { + accountInfo.ram_quota} Bytes</span>
              </Typography>
            </Grid> */}

          </Grid>
        )
    }
}

export default withStyles(styles)(RAM);