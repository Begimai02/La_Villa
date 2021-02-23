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

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function VillaList({}) {

    const { villas, getVillas } = useContext(villasContext)
    useEffect(() => {
        getVillas()
    }, [])

    const classes = useStyles();

    return (
        <>
        {
            villas.map(item => (
                <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={item.image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {item.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {item.description}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {item.price}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {item.size}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {item.place}
                    </Typography>
                </CardContent>
            </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Delete
                    </Button>
                    <Button size="small" color="primary">
                        Buy
                    </Button>
                    <Button size="small" color="primary">
                        Details
                    </Button>
            </CardActions>
        </Card>
            ))
        }
        
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