import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  avatar: {
    background: `url "https://devitt-forand.com/wp-content/uploads/2018/05/person-icon.png"`
  }
}));

export default function AlignItemsList({item}) {
  const classes = useStyles();


  let userComm = JSON.parse(localStorage.getItem('person'));//стягиваем массив из localStorage и преобразоваем в обычный формат js
  // console.log(userComm[0].email)

  console.log(item)

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" className={classes.avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={item.data}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
               
              >
                {userComm[0].email}
              </Typography>
              <Typography
                 color="textPrimary"
                 >
                {item.comment}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}