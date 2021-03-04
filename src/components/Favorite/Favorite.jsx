import React, { useContext, useEffect, useState } from 'react';
import { productsContext } from '../../contexts/ProductsContext';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { cartContext } from '../../contexts/CartContext';
import Truncate from 'react-truncate';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    maxHeight: 370,
    minHeight: 370,
    margin: "5px"
  },
  media: {
    maxHeight: 140,
    minHeight: 140
  },
});

const Favorite = () => {
  
  const { favorite } = useContext(productsContext);

  let favos = JSON.parse(localStorage.getItem('favorite'));//стягиваем массив из localStorage и преобразоваем в обычный формат js
  const [ f, setF ] = useState(favos)

 
  useEffect(() => {
    
  }, [f])
  const {
    title,
    description,
    price,
    size,
    place,
    image,
    id
  } = favos;

  function handleRemove(id){
    favos.splice(id, 1)//удаляем нужный элемент из массива
    localStorage.setItem('favorite', JSON.stringify(favos))//отправляем и заменяем старый массив на новый

    let parsed = JSON.parse(localStorage.getItem('favorite'));
    setF(parsed)
  }

  const classes = useStyles();

  return (
    <>
    <h1>Wish List</h1>
    {
      favos.length !== 0 ?
      <>
      <Grid container spacing={3} className="grid_container">
           {
        f.map(item => (
          <>
          <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={item.image[0]}
              title={item.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {item.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Truncate lines={2} ellipsis={<span>...</span>}>
                  Описание: {item.description}
                </Truncate>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                $ {item.price}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Квадратура: {item.size}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Местонахождение: {item.place}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to={`/detail/${id}`} style={{ textDecoration: "none" }}>
              <Button size="small" color="primary" >
                Details
            </Button>
            </Link>
            <Button size="small" color="primary" onClick={() => handleRemove()}>
                Remove
            </Button>
          </CardActions>
        </Card>
          </>
        ))
      }
      </Grid>
      </>
      : <Link to="/">
        <div style={{width: "700px", margin: "auto auto"}}>
          <img style={{width: "100%"}} src="https://cdn.dribbble.com/users/1010436/screenshots/13921028/dribble_shot_62_4x.jpg" alt=""/>
        </div>
      </Link>
    }
    
     
      
    </>
  );
};

export default Favorite;