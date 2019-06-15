import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1
    },
    headerTextStyle: {
        color: theme.palette.primary.contrastText,
        fontFamily: 'Exo2Bold',
        fontSize: 12,
        letterSpacing: '0.25em',
    },
    textStyle: {
    color: theme.palette.secondary.contrastText,
    },
    itemStyle: {
    marginLeft: '25px',
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    gridListRoot: {
        // display: 'flex',
        // flexWrap: 'wrap',
        // justifyContent: 'space-around',
        // overflow: 'hidden',
        // backgroundColor: theme.palette.background.paper,
      },
      gridList: {
        width: 600,
        // height: 450,
      },
});

class VoterInfo extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        //const { }
        const { classes, accountInfo } = this.props;

        // Votes
        var votes = [''];

        if (accountInfo.voter_info) {
        votes = accountInfo.voter_info.producers;
        }

        return (
          <Grid container direction="column" justify="center" alignItems="flex-start" spacing={0}>
      
              <Grid item>
                  <Typography className={classes.headerTextStyle}>
                  Voting
                  </Typography>
              </Grid>

              <Grid item className={classes.gridListRoot}>
                <GridList cellHeight={20} className={classes.gridList} cols={5} rows={6}>
                    {votes.map(vote => (
                        <GridListTile key={vote} cols={1}>
                            <Typography className={classes.textStyle}>{vote}</Typography>
                        </GridListTile>
                    ))}
                </GridList>
              </Grid>
  
          </Grid>
        )
    }
}

export default withStyles(styles)(VoterInfo);