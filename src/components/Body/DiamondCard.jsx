import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { productsContext } from '../../contexts/ProductsContext';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { cartContext } from '../../contexts/CartContext';
import Truncate from 'react-truncate'
import { ToastContainer } from 'react-toastify';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    maxHeight: 470,
    minHeight: 470
  },
  media: {
    maxHeight: 140,
    minHeight: 140
  },
});

export default function DiamondCard({ data, url }) {

  const { diamonds, getDiamonds, editDiamonds, deleteDiamonds } = useContext(productsContext)
  const { getDiamondById } = useContext(cartContext);

  useEffect(() => {
    getDiamonds(url)
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

    function handleBuy() {
      getDiamondById(id)
    }
  
    function handleEdit(id) {
      editDiamonds(id)
    }



    return (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={image[0]}
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
                Карат: {size}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Тип: {place}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to={`/detail/${id}/`} style={{ textDecoration: "none" }}>
              <Button size="small" color="primary" >
                Details
            </Button>
            </Link>
            <Link to={`/edit/${id}`} style={{ textDecoration: "none" }}>
              <Button size="small" color="primary">
                Edit
            </Button>
            </Link>
            <Button size="small" color="primary" onClick={() => deleteDiamonds(id, url)}>
              Delete
            </Button>
          </CardActions>
        </Card>
    );
}
