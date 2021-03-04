import React, { useContext, useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import { productsContext } from '../../contexts/ProductsContext';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import NativeSelect from '@material-ui/core/NativeSelect';
import classes from './DiamondsList.module.css';
import InputBase from '@material-ui/core/InputBase';
import DiamondCard from './DiamondCard';
import { useHistory } from 'react-router-dom';
import ProductsPagination from '../Pagination/ProductsPagination';
import Button from '@material-ui/core/Button';
import './MainCards/MainList.css';



export default function DiamondsList({ }) {


  let history = useHistory();
  const search = new URLSearchParams(history.location.search);

  const [page, setPage] = useState(+search.get("page") || 1);
  const { diamonds, count, getDiamonds } = useContext(productsContext)


  useEffect(() => {
    setPage(+search.get("page") || 1)
  }, [history.location.search])

  useEffect(() => {
    getDiamonds(`http://localhost:8000/villas?_limit=6&_page=${page}`)
  }, [page])

  const onPaginationChange = (e, value) => {
    history.push(`${history.location.pathname}?page=${value}`);
  }

  return (
    <>
      
      <Grid container spacing={3} className="grid_container">
        {
          diamonds.map(item => (
            <Grid key={item.id} item xs={12} sm={6} lg={4}>
              <DiamondCard data={item} url={`http://localhost:8000/villas?_limit=6&_page=${page}`} />
            </Grid>
          ))
        }

      </Grid>

      <ProductsPagination count={Math.ceil(count / 6)} page={page} onChange={onPaginationChange} />
      

    </>

  );
}




