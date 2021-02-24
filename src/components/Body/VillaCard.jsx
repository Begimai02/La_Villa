import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';git 
import { villasContext } from '../../contexts/VillaContext';
import { cartContext } from '../../contexts/CartContext';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    maxHeight: 140,
    minHeight: 140
  },
});

export default function VillaCard({data}) {

  const { villas, getVillas } = useContext(villasContext)
  const {getVillaById} = useContext(cartContext)
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

  function handleBuy () {
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
                  {description}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {price}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {size}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {place}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Delete
                    </Button>
              <Button onClick={handleBuy} size="small" color="primary">
                Buy
              </Button>
              <Button size="small" color="primary">
                Details
                    </Button>
            </CardActions>
          </Card>
    </>
  );
}

