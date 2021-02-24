import React, { useContext, useEffect } from 'react';
import { villasContext } from '../../contexts/VillaContext';
import Grid from '@material-ui/core/Grid';
import classes from './VillaList.module.css';
import VillaCard from './VillaCard';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom';


export default function VillaList({ }) {
  let history = useHistory()

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
                <VillaCard data={item} />
              {/* </Link> */}
            </Grid>
          ))
        }
      </Grid>
        <button onClick={() => history.push('/cart')} >test</button>
    </>
  );
}

