import React, { useContext, useEffect } from 'react';
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
import { villasContext } from '../../../contexts/VillaContext';
import { cartContext } from '../../../contexts/CartContext';
import Truncate from 'react-truncate'


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
  const { getVillaById } = useContext(cartContext)

  const { villas, getVillas, villaDetail } = useContext(villasContext)
  useEffect(() => {
    getVillas()
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
    villaDetail(id)
  }

  function handleBuy() {
    getVillaById(id)
  }

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={image}
            title={title}
          />
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
              Квадратура: {size}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Местонахождение: {place}
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

        </CardActions>
      </Card>
    </>
  );
}


