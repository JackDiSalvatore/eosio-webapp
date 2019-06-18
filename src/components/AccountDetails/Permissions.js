import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  textStyle: {
    color: theme.palette.secondary.contrastText,
  },
  permNameStyle: {
    marginRight: '10px'
  },
});

class Permissions extends Component {

    constructor(props) {
        super(props)

    }
    
    componentDidMount() {
      console.log('Permissions mounted')
    }

    render() {
        //const { }
        const { classes, accountInfo } = this.props;

        return (
          <Grid container direction="row" spacing={0}>

            <Grid item>
            { accountInfo.permissions.map((perm, i) => {
                return <Grid container direction="row" spacing={0} className={"perm"} key={i}>
                          
                          <Grid item className={classes.permNameStyle}>
                            <Typography className={classes.textStyle}>
                              { perm.perm_name } { perm.required_auth.threshold }
                            </Typography>
                          </Grid>
    
                          <Grid item>
                          { perm.required_auth.keys.map((row, j) => {
                              return <div className={"row"} key={j}>
                                        <Typography className={classes.textStyle}>
                                          { row.weight }: { row.key }
                                        </Typography>
                                      </div> 
                            }) }
                          { perm.required_auth.accounts.map((row, j) => {
                              return <div className={"row"} key={j}>
                                      <Typography className={classes.textStyle}>
                                        { row.weight }: { row.permission.actor }@{ row.permission.permission }
                                      </Typography>
                                    </div>
                          }) }
                          { perm.required_auth.waits.map((row, j) => {
                              return <div className={"row"} key={j}>
                                      <Typography className={classes.textStyle}>
                                        { row.weight }: { row.wait_sec }
                                      </Typography>
                                    </div>
                          }) }
                          </Grid>
    
                        </Grid>
              })
            }
            </Grid>
  
          </Grid>
        )
    }
}

export default withStyles(styles)(Permissions);