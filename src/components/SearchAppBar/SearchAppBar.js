import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
// import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import eosLogo from './eosLogo.png';
// import arrowIcon from'./arrow.png';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  toolbarStyles: {
    padding: '10px 32px 10px 32px'
  },
  gridStyles: {
    // border: '2px solid purple',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    // borderRadius: theme.shape.borderRadius,
    borderRadius: '10px',
    border: '1px solid #8DFFA9',
    // backgroundColor: fade(theme.palette.common.white),
    // backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.10),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    color: '#8DFFA9',
    // pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  eosLogo: {
    width: theme.spacing(4),
    // marginTop: '0.25%',
    // marginLeft: '0.152%',
  },
  eosTicker: {
    marginLeft: '1.25px',
    // fontSize: '0.75rem',
  },
  arrowContainer: {
    margin: 0,
    padding: 0,
    border: '1px dotted white',
  },
  arrowIcon: {
    width: theme.spacing(7),
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    // [theme.breakpoints.up('sm')]: {
    //   width: 120,
    //   '&:focus': {
    //     width: 150
    //   },
    // },
  },
});

// export default function SearchAppBar() 
class SearchAppBar extends Component {

  async handleFormEvent(event) {
    // stop default behaviour
    event.preventDefault();

    this.props.getAccountDetails(event.target.accountNameSearch.value);
  }

  render() {
    // const { classes, chainId } = this.props;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbarStyles}>

        <Grid container
            spacing={0}
            direction="row"
            justify="flex-start"
            alignItems="center"
            className={classes.gridStyles}
          >

          <Grid item>
            <Grid container spacing={0} direction="column">
              <Grid item>
                <img className={classes.eosLogo} src={eosLogo} alt={"not loaded"}/>
              </Grid>

              <Grid item>
                <Typography className={classes.eosTicker}>
                  EOS
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          {/* <Grid item>
            <img className={classes.arrowIcon} src={arrowIcon}/>
          </Grid> */}

          <Grid item>

          <form onSubmit={this.handleFormEvent.bind(this)} >
            <div className={classes.search}>
            
              <Button className={classes.searchIcon} type="submit">
                <SearchIcon />
              </Button>
              
              <InputBase
                name="accountNameSearch"
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'Search' }}
              />
              
            </div>
          </form>

          </Grid>

          {/* <Grid item>
            <Typography>
              {chainId}
            </Typography>
          </Grid> */}

        </Grid>

        </Toolbar>
      </AppBar>
    </div>
    )
  };
}

export default withStyles(styles)(SearchAppBar);