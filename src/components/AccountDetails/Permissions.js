import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  permNameStyle: {
    marginRight: '10px'
  },
});

class Permissions extends Component {

    constructor(props) {
        super(props)

    }

    render() {
        //const { }
        const { classes, accountInfo } = this.props;

        return (
          <Grid container direction="row" spacing={8}>

            <Grid item>
            { accountInfo.permissions.map((perm, i) => {
                return <Grid container direction="row" spacing={0} className={"perm"} key={i}>
                          
                          <Grid item className={classes.permNameStyle}>
                            <Typography style={{fontSize:12}} variant="body1" gutterBottom>
                              { perm.perm_name } { perm.required_auth.threshold }
                            </Typography>
                          </Grid>
    
                          <Grid item>
                          { perm.required_auth.keys.map((row, j) => {
                              return <Typography style={{fontSize:12}} variant="body1" className={"row"} key={j}>
                                      { row.weight }: { row.key }
                                    </Typography>
                            }) }
                          { perm.required_auth.accounts.map((row, j) => {
                              return <Typography style={{fontSize:12}} variant="body1" gutterBottom className={"row"} key={j}>
                                        { row.weight }: { row.permission.actor }@{ row.permission.permission }
                                      </Typography>
                          }) }
                          { perm.required_auth.waits.map((row, j) => {
                              return <Typography style={{fontSize:12}} variant="body1" gutterBottom className={"row"} key={j}>
                                      { row.weight }: { row.wait_sec }
                                    </Typography>
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