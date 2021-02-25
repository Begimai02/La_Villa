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
import './MainCards/MainList.css';



export default function VillaList({ }) {


  let history = useHistory();
  const search = new URLSearchParams(history.location.search);

  const [page, setPage] = useState(+search.get("page") || 1);
  const { villas, count, getVillas } = useContext(villasContext)


  useEffect(() => {
    setPage(+search.get("page") || 1)
  }, [history.location.search])

  useEffect(() => {
    getVillas(`http://localhost:8000/villas?_limit=3&_page=${page}`)
  }, [page])

  const onPaginationChange = (e, value) => {
    history.push(`${history.location.pathname}?page=${value}`);
    // setPage(value)
  }



  return (
    <>
      
      <Grid container spacing={3} className="grid_container">
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
