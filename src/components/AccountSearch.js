import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  searchBarGridStyles: {
    flexGrow: 1,
    margin: '1% auto 1% auto',
  },
  searchBarStyles: {
    //flexGrow: 1,
    width: '25%',
    //margin: 'auto auto auto auto',
  },
  accountSearchButton: {
    margin: 'auto 0 auto 0',
  },
  formButton: {
    //marginTop: theme.spacing.unit,
    //width: "100%",
  },
  floatingLabelFocusStyle: {

  },
});
  

class AccountSearch extends Component {

  constructor(props) {
    super(props)

    //this.handleFormEvent = this.handleFormEvent.bind(this);
  }

  async handleFormEvent(event) {
    // stop default behaviour
    event.preventDefault();

    let accountName = event.target.accountNameSearch.value;
    console.log('Account Name is ' + accountName);
    
    this.props.getAccountDetails(event.target.accountNameSearch.value);
    //this.setState({todoInput: ""});
  }

  render() {
    //const { }
    const { classes } = this.props;

    return (
      <form onSubmit={this.handleFormEvent.bind(this)}>

        <Grid container direction="row" justify="center" spacing={8} className={classes.searchBarGridStyles}>
              
          <Grid item className={classes.searchBarStyles}>
            <TextField
              className={classes.floatingLabelFocusStyle}
              name="accountNameSearch"
              autoComplete="off"
              label="Account Name"
              placeholder="eosio"
              margin="normal"
              fullWidth
            />
          </Grid>

          <Grid item className={classes.accountSearchButton}>
            <Button
              color="primary"
              className={classes.formButton}
              type="search">
              SEARCH
            </Button>
          </Grid>

        </Grid>

      </form>
    )
  }
}

export default withStyles(styles)(AccountSearch);