import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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

class RAM extends Component {

    constructor(props) {
        super(props)

    }

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
                <Typography className={classes.textStyle} variant="h6">
                  {percentage}%
                </Typography>
                <Typography className={classes.specialTextStyle} variant="h5">
                  RAM
                </Typography>
              </CircularProgressbarWithChildren>;
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