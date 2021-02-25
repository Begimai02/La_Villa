import React, { useContext, useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import { villasContext } from '../../contexts/VillaContext';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import NativeSelect from '@material-ui/core/NativeSelect';
import classes from './VillaList.module.css';
import InputBase from '@material-ui/core/InputBase';
import VillaCard from './VillaCard';
import { useHistory } from 'react-router-dom';
import ProductsPagination from '../Pagination/ProductsPagination';
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
  searchControl: {
    display: 'flex',
    alignItems: 'center',
    height: '200px',
    backgroundColor: '#ffff',
    display: 'flex',
    justifyContent: 'center',

  },
  inputSearch: {
    width: '30%',
  },
  inputSearch2: {
    width: '270px',
    height: '40px',
    marginTop: '30px',
    backgroundColor: '#dffafc',
    fontFamily: 'DM Serif Text, serif',
  },
  inputPrice: {
    width: '10%',
  },
  inputCountry: {
    width: '15%',
  }
}));


export default function VillaList({ }) {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  let history = useHistory();
  const search = new URLSearchParams(history.location.search);

  const [page, setPage] = useState(+search.get("page") || 1);
  const { villas, count, getVillas } = useContext(villasContext)


  useEffect(() => {
    setPage(+search.get("page") || 1)
  }, [history.location.search])

  useEffect(() => {
    getVillas(`http://localhost:8000/villas?_limit=3&_page=${page}`)
  }, [page, villas])

  const onPaginationChange = (e, value) => {
    history.push(`${history.location.pathname}?page=${value}`);
    // setPage(value)
  }



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
        <FormControl className={[classes.margin, classes.inputCountry].join(' ')}>
          <InputLabel htmlFor="demo-customized-select-native">Country</InputLabel>
          <NativeSelect
            id="demo-customized-select-native"
            value={age}
            // onChange={}
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
      <Grid container spacing={3} className={classes.grid_container}>
        {
          villas.map(item => (
            <Grid key={item.id} item xs={12} sm={6} lg={4}>
              {/* <Link to={`villas/${item.id}`} style={{ textDecoration: 'none' }}> */}
              <VillaCard data={item} />
              {/* </Link> */}
            </Grid>
          ))
        }

      </Grid>

      <ProductsPagination count={Math.ceil(count / 3)} page={page} onChange={onPaginationChange} />
      <button onClick={() => history.push('/cart')} >test</button>

    </>

  );
}



// import { villasContext } from '../../contexts/VillaContext';

// const VillaList = () => {
//     const {villas, getVillas} = useContext(villasContext)
//     useEffect(() => {
//         getVillas()
//     }, [])
//     return (
//         <div>

//         </div>
//     );
// };

// export default VillaList;
