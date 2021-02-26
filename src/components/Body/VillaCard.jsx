import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { villasContext } from '../../contexts/VillaContext';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { cartContext } from '../../contexts/CartContext';
import Truncate from 'react-truncate'
import { ToastContainer } from 'react-toastify';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    maxHeight: 370,
    minHeight: 370
  },
  media: {
    maxHeight: 140,
    minHeight: 140
  },
});

export default function VillaCard({ data, url }) {

  const { villas, getVillas, editVilla, deleteVilla } = useContext(villasContext)
  const { getVillaById } = useContext(cartContext);

  useEffect(() => {
    getVillas(url)
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
      getVillaById(id)
    }
  
    function handleEdit(id) {
      editVilla(id)
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
                Квадратура: {size}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Местонахождение: {place}
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
            <Button size="small" color="primary" onClick={() => deleteVilla(id, url)}>
              Delete
            </Button>
          </CardActions>
        </Card>
    );
}
