import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 18,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
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
      borderColor: '#f4eee3',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  searchControl:{
    display: 'flex',
    alignItems: 'center',
    height: '200px',
    backgroundColor: '#ffff',
    display: 'flex',
    justifyContent: 'center',
    
  },
  inputSearch:{
    width: '30%',
  },
  inputSearch2: {
    width: '270px',
    height: '40px',
    marginTop: '30px',
    backgroundColor: '#93dde3',
    fontFamily: 'DM Serif Text, serif',
  },
  inputPrice: {
    width: '10%',
  },
  inputCountry: {
    width: '15%',
  }
}));

export default function CustomizedSelects() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <h2 style={{
        textAlign: 'center', 
        fontFamily: 'Sawarabi Gothic, sans-serif',
        marginTop: '50px',
        }}>
          Our villas are waiting for you!
      </h2>
      <p style={{
        fontFamily: 'Sawarabi Gothic, sans-serif',
        fontSize: '25px',
      }}>
        La Villa offers diverse  villas in different countries to help you spend your dream vacation. <br></br>
        Order your villa online quickly and safely with La Vitta.
      </p>
      <div className={classes.searchControl}>
      <FormControl className={[classes.margin, classes.inputSearch].join(' ')}>
        <InputLabel htmlFor="demo-customized-textbox">Name of Villa</InputLabel>
        <BootstrapInput placeholder='Write the name of Villa' id="demo-customized-textbox" />
      </FormControl>
      
      <FormControl className={[classes.margin, classes.inputPrice].join(' ')}>
        <InputLabel id="demo-customized-select-label">Price</InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={age}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value="">
            <em>from</em>
          </MenuItem>
          <MenuItem value={10}>15000$</MenuItem>
          <MenuItem value={20}>25000$</MenuItem>
          <MenuItem value={30}>45000$</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={[classes.margin, classes.inputCountry].join(' ')}>
        <InputLabel htmlFor="demo-customized-select-native">Country</InputLabel>
        <NativeSelect
          id="demo-customized-select-native"
          value={age}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <option aria-label="None" value="" />
          <option value={10}>Dubai</option>
          <option value={20}>Spain</option>
          <option value={30}>Italy</option>
          <option value={40}>Turkey</option>
          <option value={50}>Brasil</option>
          <option value={60}>Maldives</option>
        </NativeSelect>
      </FormControl>
      <Button className={[classes.margin, classes.inputSearch2].join(' ')} variant="contained">
          Search
        </Button>
    </div>
    </>
  );
}
