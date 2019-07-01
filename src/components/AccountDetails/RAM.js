import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

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
  },
  progress: {
    // color: 'radial-gradient(50% 76%, #E424C8 77%, #7A0025 70%)',
    // color: theme.palette.secondary.main,
    fontFamily: 'Exo2Regular',
    height: '10em',
    width: 'auto',
    // border: '2px solid #8DFFA9',
    // boxShadow: '0 0 8px 1px #9200A5',
  },
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

class RAM extends Component {

    render() {
        //const { }
        const { classes, accountInfo } = this.props;

        const percentage = Math.floor((accountInfo.ram_usage / accountInfo.ram_quota)*100);

        return (
          <Grid container direction="column" spacing={0} className={classes.root}>

            <Grid item>
              <CircularProgressbarWithChildren
                value={percentage}
                // text={`${percentage}%`}
                className={classes.progress}
                strokeWidth={12}
                styles={buildStyles({
                    fontFamily: `Exo2Regular`,
                    // pathColor: `radial-gradient(50% 76%, #E424C8 77%, #7A0025 70%)`,
                    pathColor: `#E424C8`,
                    textColor: `#E424C8`,
                    trailColor: `#8DFFA9`,
                    strokeLinecap: 'butt',
                    textSize: '16px',
                  })}
              >
                <HtmlTooltip title={
                  <React.Fragment>
                    <Typography>
                      {accountInfo.ram_usage} Bytes / { + accountInfo.ram_quota} Bytes
                    </Typography>
                  </React.Fragment>
                  } placement="top">

                  <Typography className={classes.textStyle} variant="h6">
                    {percentage}%
                  </Typography>

                </HtmlTooltip>

                <Typography className={classes.specialTextStyle} variant="h5">
                  RAM
                </Typography>
              </CircularProgressbarWithChildren>;
            </Grid>

          </Grid>
        )
    }
}

export default withStyles(styles)(RAM);