import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({

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
          <Grid container direction="row" spacing={16}>
      
              <Grid item>
                  <Typography style={{fontSize:12}} variant="body1" gutterBottom>
                  Voting For: 
                  </Typography>
              </Grid>
      
              <Grid item>
                  <Grid container direction="row" spacing={8}>
      
                  <Grid item className={classes.voteInfo}>
                      {votes.map((prod, i) => {
                      if (i<6)
                          return <Typography style={{fontSize:12}} variant="body1" gutterBottom className={"prod"} key={i}>
                                      {prod}
                                  </Typography>     
                      })
                      }         
                  </Grid>
      
                  <Grid item className={classes.voteInfo}>
                      {votes.map((prod, i) => {
                      if (i>=6 && i<12)
                      return <Typography style={{fontSize:12}} variant="body1" gutterBottom className={"prod"} key={i}>
                                  {prod}
                              </Typography>
                      })
                      }         
                  </Grid>
      
                  <Grid item className={classes.voteInfo}>
                      {votes.map((prod, i) => {
                      if (i>=12 && i<18)
                      return <Typography style={{fontSize:12}} variant="body1" gutterBottom className={"prod"} key={i}>
                                  {prod}
                              </Typography>
                      })
                      }         
                  </Grid>
      
                  <Grid item className={classes.voteInfo}>
                      {votes.map((prod, i) => {
                      if (i>=18 && i<24)
                      return <Typography style={{fontSize:12}} variant="body1" gutterBottom className={"prod"} key={i}>
                                  {prod}
                              </Typography>
                      })
                      }         
                  </Grid>
      
                  <Grid item className={classes.voteInfo}>
                      {votes.map((prod, i) => {
                      if (i>=24 && i<30)
                      return <Typography style={{fontSize:12}} variant="body1" gutterBottom className={"prod"} key={i}>
                                  {prod}
                              </Typography>
                      })
                      }         
                  </Grid>
      
                  </Grid>
              </Grid>
  
          </Grid>
        )
    }
}

export default withStyles(styles)(VoterInfo);