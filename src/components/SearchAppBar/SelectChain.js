import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';


const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderColor: theme.palette.primary.contrastText,
    borderRadius: 4,
    position: 'relative',
    color: theme.palette.primary.contrastText,
    backgroundColor: 'transparent',
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '"Exo2Regular"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      // borderColor: theme.palette.primary.contrastText,
      boxShadow: '0 0 0 0.2rem rgba(141,255,169,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function CustomizedSelects(setChain) {
  const classes = useStyles()
  const [age, setAge] = React.useState('')

  // Endpoints
  // const localNet = 'http://localhost:888'
  const jungleTestNet = 'https://jungle2.cryptolions.io:443'
  // const mainNet = 'https://api.eosdetroit.io:443'
  const mainNetHistory = 'https://public.eosinfra.io'
  // const mainNetBackup = 'http://api.cypherglass.com:8888'

  const handleChange = event => {
    setAge(event.target.value)
    // console.log(event.target.value)
    setChain.setChainFunction(event.target.value)
  };

  // console.log(setChain.setChainFunction)

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl className={classes.margin}>
        {/* <InputLabel htmlFor="age-customized-native-simple">Age</InputLabel> */}
        <NativeSelect
          value={age}
          onChange={handleChange}
          input={<BootstrapInput name="age" id="age-customized-native-simple" />}
        >
          <option value={mainNetHistory}>Mainnet</option>
          <option value={jungleTestNet}>Jungle</option>
        </NativeSelect>
      </FormControl>
    </form>
  );
}