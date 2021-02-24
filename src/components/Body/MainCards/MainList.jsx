import React, { useContext, useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import classes from './MainList.module.css';
import { Link, useHistory } from 'react-router-dom';
import { villasContext } from '../../../contexts/VillaContext';
import MainCard from './MainCard';
import ProductsPagination from '../../Pagination/ProductsPagination';


export default function MainList({  }) {
  let history = useHistory();
  const search  = new URLSearchParams(history.location.search);

  const [page, setPage] = useState(+search.get("page") || 1);
  const { villas, count, getVillas } = useContext(villasContext)

  useEffect(()=>{
    setPage(+search.get("page") || 1)
  },[history.location.search])

  useEffect(() => {
    getVillas(`http://localhost:8000/villas?_limit=3&_page=${page}`)
  }, [page, villas])

  const onPaginationChange = (e, value) => {
    history.push(`${history.location.pathname}?page=${value}`);
    // setPage(value)
  }

  return (
    <>
    <h1>Test</h1>
      <Grid container spacing={3} className={classes.grid_container}>
        {
          villas.map(item => (
            <Grid key={item.id} item xs={12} sm={6} lg={4}>
              {/* <Link to={`villas/${item.id}`} style={{ textDecoration: 'none' }}> */}
                <MainCard data={item} />
              {/* </Link> */}
            </Grid>
          ))
        }
      </Grid>
      <ProductsPagination count={Math.ceil(count/3)} page={page} onChange={onPaginationChange} />

    </>
  );
}

