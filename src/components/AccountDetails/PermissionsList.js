import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
  headerTextStyle: {
    color: theme.palette.secondary.main,
    textAlign: 'left',
  },
  textStyle: {
    color: theme.palette.primary.main,
    textAlign: 'left',
  },
  ulStyle: {
    // listStyleType: 'none'
    color: theme.palette.secondary.contrastText,
  },
  permNameStyle: {
    marginRight: '10px'
  },
  paper: {
    ...theme.mixins.gutters(),
    borderRadius: '1em',
    backgroundColor: theme.palette.primary.contrastText,
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: 'flex',
  },
  authoriesStyle: {
    //   border: '1px dotted red'
  },
  thresholdStyle: {
    width: 250,
  }
});

class PermissionsList extends Component {

    constructor(props) {
        super(props)

    }

    render() {

        const { classes, options } = this.props;


        return (
            <div>
            {options.map((option, idx) => (
                <ul key={idx}>


                    <Paper className={classes.paper}>

                        <div className={classes.thresholdStyle}>
                            <Grid container direction="row" alignItems="center" spacing={1}>

                                <Grid item>
                                    <Typography className={classes.headerTextStyle} variant="h4">
                                        {option.value.required_auth.threshold}
                                    </Typography>
                                </Grid>
                                
                                <Grid item>
                                    <Typography className={classes.textStyle} variant="h6">
                                        { option.value.perm_name }
                                    </Typography>
                                </Grid>

                            </Grid>
                        </div>


                        <div className={classes.authoriesStyle}>
                            <Grid container direction="column" justify="center" alignItems="flex-start" spacing={0}>

                                {/* KEYS */}
                                {
                                option.value.required_auth.keys.map((row, j) => {
                                    return <Grid item key={j}>
                                                <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
                                                    <Grid item>
                                                        <Typography className={classes.headerTextStyle} variant="h6">
                                                            +{ row.weight }
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography className={classes.textStyle}>
                                                            { row.key }
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                })
                                }
                                

                                {/* ACCOUNTS */}
                                {
                                option.value.required_auth.accounts.map((row, j) => {
                                    return  <Grid item  key={j}>
                                                <Grid container direction="row" justify="flex-start" alignItems="center" spacing={1}>
                                                    <Grid item>
                                                        <Typography className={classes.headerTextStyle} variant="h6">
                                                            +{ row.weight }
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography className={classes.textStyle}>
                                                            { row.permission.actor }@{ row.permission.permission }
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                })
                                }
                                

                                {/* WAITS */}
                                {
                                option.value.required_auth.waits.map((row, j) => {
                                    return  <Grid item  key={j}>
                                                <Grid container direction="row" justify="flex-start" alignItems="center" spacing={1}>
                                                    <Grid item>
                                                        <Typography className={classes.headerTextStyle} variant="h6">
                                                            +{ row.weight }
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography className={classes.textStyle}>
                                                            { row.wait_sec } seconds
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                    })
                                }

                            </Grid>
                        </div>

                    </Paper>

                    {/* Base Case */}
                    {
                        (option.children) &&
                        <PermissionsList
                            classes={classes}
                            options={option.children}
                        />
                    }

                </ul>
            ))}
            </div>
        )
    }
}

export default withStyles(styles)(PermissionsList);