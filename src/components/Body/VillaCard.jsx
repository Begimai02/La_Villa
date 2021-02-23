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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function VillaCard({ data }) {

  const {id} = useParams();

  const { villas, getVillas, editVilla, deleteVilla } = useContext(villasContext)
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
    image
  } = data;

  function handleEdit(id) {
    editVilla(id)
  }
  function handleDelete(id) {
    deleteVilla(id)
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
            Buy
                    </Button>
          <Button size="small" color="primary" >
            Details
                    </Button>
          <Link to="/edit">
            <Button size="small" color="primary" onClick={() => handleEdit(id)}>
              Edit
            </Button>
          </Link>
          <Button size="small" color="primary" onClick={() => handleDelete(id)}>
            Delete
                    </Button>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        </CardActions>
      </Card>
    </>
  );
}


