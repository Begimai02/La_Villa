import React, { useContext, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import classes from './MainList.module.css';
import { Link } from 'react-router-dom';
import { villasContext } from '../../../contexts/VillaContext';
import MainCard from './MainCard';


export default function MainList({ }) {

  const { villas, getVillas } = useContext(villasContext)
  useEffect(() => {
    getVillas()
  }, [])


  return (
    <>
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

    </>
  );
}

