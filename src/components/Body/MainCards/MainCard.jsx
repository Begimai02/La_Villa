import React, { useContext, useEffect, useState } from 'react';
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
import { productsContext } from '../../../contexts/ProductsContext';
import { cartContext } from '../../../contexts/CartContext';
import Truncate from 'react-truncate'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import Favorite from '../../Favorite/Favorite';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MainCard({ data }) {

  // const {id} = useParams();
  const { getDiamondById } = useContext(cartContext)
  const [like, setLike] = useState(false)
  const [favorite, setFavorite] = useState(false)

  useEffect(() => {
    setLike()
  }, [])

  const { villas, getDiamonds, diamondsDetail, getFavoriteId } = useContext(productsContext)
  useEffect(() => {
    getDiamonds()
  }, [])

  const classes = useStyles();

  const {
    title,
    description,
    price,
    size,
    place,
    image,
    id
  } = data;

  function handleDetail(id) {
    diamondsDetail(id)
  }

  function handleBuy() {
    getDiamondById(id)
  }

  function handleFavorite() {
    getFavoriteId(id)
    setFavorite(!favorite)
  }

  function handleLike() {
    setLike(!like);

    if (!localStorage.getItem('likes')) {//проверка есть ли что-нибудь в localStorage
      localStorage.setItem('likes', '[]')//если нет то добавляем туда путой массив
    }

    let localLike = JSON.parse(localStorage.getItem('likes'));//стягиваем массив из localStorage и преобразоваем в обычный формат js
    localLike.push(like)//в массив добавляем новый обьект
    localStorage.setItem('likes', JSON.stringify(localLike))//обновленный массив преобразовываем в формат json и отправляем обратно в localStorage

  }

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <Link to={`/detail/${id}`} style={{ textDecoration: "none" }}>
            <CardMedia
              className={classes.media}
              image={image}
              title={title}
            />
          </Link>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <Truncate lines={2} ellipsis={<span>...</span>}>
                Описание: {description}
              </Truncate>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              $ {price}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Карат: {size}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Тип: {place}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={handleBuy}>
            Buy
          </Button>
          <Link to={`/detail/${id}`} style={{ textDecoration: "none" }}>
            <Button size="small" color="primary" >
              Details
            </Button>
          </Link>
          <Button size="small" color="primary" onClick={handleFavorite}>
             {favorite ? <BookmarkIcon /> : <BookmarkBorderIcon /> }
            </Button>
          <Button size="small" color="primary" onClick={handleLike}>
            {like ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </Button>

        </CardActions>
      </Card>
    </>
  );
}


