import React, { useContext, useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

import Grid from '@material-ui/core/Grid';
import { Link, useHistory } from 'react-router-dom';
import { productsContext } from '../../../contexts/ProductsContext';
import MainCard from './MainCard';
import ProductsPagination from '../../Pagination/ProductsPagination';
import './MainList.css'


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


export default function MainList({ }) {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const [ inpSearch, setInpSearch ] = useState('')
  const [ filter, setFilter ] = useState('')


  let history = useHistory();
  const search = new URLSearchParams(history.location.search);

  const [page, setPage] = useState(+search.get("page") || 1);
  const { diamonds, count, getDiamonds } = useContext(productsContext)

  useEffect(() => {
    setPage(+search.get("page") || 1)
  }, [history.location.search])

  useEffect(() => {
    if(filter){
      getDiamonds(`http://localhost:8000/diamonds?_limit=6&_page=${page}&q=${inpSearch}&place=${filter}`)
    }else {
      getDiamonds(`http://localhost:8000/diamonds?_limit=6&_page=${page}&q=${inpSearch}`)
        }
  }, [page, inpSearch, filter])

  const onPaginationChange = (e, value) => {
    history.push(`${history.location.pathname}?page=${value}`);
    // setPage(value)
  }

  return (
    <div className='style'>
      <h2 style={{
        textAlign: 'center',
        marginTop: '50px',
        padding: '0 50px'
      }}>
        Our diamonds are waiting for you
      </h2>
      <p style={{
        // fontFamily: 'Sawarabi Gothic, sans-serif',
        fontSize: '25px',
        padding: '0 30px'
      }}>
        Diamond is a solid form of the element carbon with its atoms arranged in a crystal structure called diamond cubic. 
        At room temperature and pressure, another solid form of carbon known as graphite is the chemically stable form of carbon, 
        but diamond almost never converts to it. Diamond has the highest hardness and thermal conductivity of any natural material, 
        properties that are utilized in major industrial applications such as cutting and polishing tools. 
        They are also the reason that diamond anvil cells can subject materials to pressures found deep in the Earth.
      </p>
      <div className={classes.searchControl}>
        <FormControl className={[classes.margin, classes.inputSearch].join(' ')}>
          <InputLabel htmlFor="demo-customized-textbox"  placeholder = "Name of Villa" />
          <BootstrapInput onChange={(e) => {
            e.preventDefault();
            setInpSearch(e.target.value)
          }} value={inpSearch} placeholder='Write the name of Villa' id="demo-customized-textbox" />
        </FormControl>
        <FormControl className={[classes.margin, classes.inputCountry].join(' ')}>
          <InputLabel htmlFor="demo-customized-select-native">Country</InputLabel>
          <NativeSelect
            id="demo-customized-select-native"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            input={<BootstrapInput />}
          >
            <option aria-label="None" value="" />
            <option value="Necklace">Necklace</option>
            <option value="Earrings">Earrings</option>
            <option value="Rings">Rings</option>
          </NativeSelect>
        </FormControl>
        {/* <Button className={[classes.margin, classes.inputSearch2].join(' ')} variant="contained">
          Search
        </Button> */}
      </div>
      <h1>View our Diamonds</h1>
      <Grid container spacing={3} className="grid_container">
        {
          diamonds?.map(item => (
            <Grid key={item.id} item xs={12} sm={6} lg={4}>
              {/* <Link to={`villas/${item.id}`} style={{ textDecoration: 'none' }}> */}
              <MainCard data={item} />
              {/* </Link> */}
            </Grid>
          ))
        }
      </Grid>
      <ProductsPagination count={Math.ceil(count / 6)} page={page} onChange={onPaginationChange} />

    </div>
  );
}

