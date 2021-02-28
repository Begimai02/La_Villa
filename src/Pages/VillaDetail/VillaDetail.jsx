import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { villasContext } from '../../contexts/VillaContext';
import './VillaDetail.css';
import { useTransition, animated } from 'react-spring'
import SlideBox from '../../components/MainBox/Slider';
import { commentContext } from '../../contexts/CommentContext';
import Paper from '@material-ui/core/Paper';
import Comment from './Comment';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 1200,
    margin: "0 auto"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


const VillaDetail = () => {
  const { villas, villaDetail, forDetail } = useContext(villasContext);  //, getVillaDetail
  const { addComment, getComments, comments } = useContext(commentContext);

  const [inpComm, setInpComm] = useState('');

  
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  function handleAddComment() {
    let obj = {
      comment: inpComm,
      villaID: id,
      data: new Date().toLocaleString()
    }
    console.log(obj)
    setInpComm('');
    addComment(obj);
  }

  const { id } = useParams();

  console.log(id)  // Villa's ID

  useEffect(() => {
    villaDetail(id)
  }, [id])

  useEffect(() => {
    getComments(id)
  }, [])

  console.log(comments)

  const [toggle, set] = useState(false)
  const transitions = useTransition(toggle, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })


  let userComm = JSON.parse(localStorage.getItem('person'));//стягиваем массив из localStorage и преобразоваем в обычный формат js
  // console.log(userComm[0].email)

  return (
    <>
      {
        forDetail ?
          <>
            
            <div className="det-container">
              <div>
                <SlideBox images={forDetail} style={{ marginTop: "50px" }} />
              </div>
              
              <div style={{ marginTop: '550px', padding: "15px" }}>
           
            
                <Card className={classes.root}>
                  <CardContent>
                  <Typography style={{fontSize: '30px'}}>{forDetail.title}</Typography>
                    <Typography style={{fontSize: '20px', textAlign: 'start', marginTop: '15px'}} variant="h5" component="h2">
                      {forDetail.description}
                    </Typography>
                    <Typography  className={classes.pos} style={{fontSize: '20px', textAlign: 'start', marginTop: '10px'}} color="textSecondary">
                    Country:  {forDetail.place}
                    </Typography>
                    <Typography variant="body2" component="p" style={{fontSize: '18px', textAlign: 'start'}}>
                    Price:  {forDetail.price}$
                    </Typography>
                  </CardContent>
                </Card>
              </div>
             

              {
                comments ?
                  <>

                    <div className="comment-section" style={{ padding: '15px 70px' }}>
                      <Typography style={{ textAlign: "start", fontWeight: "bold", fontSize: '20px' }}>
                        Comments:
                          </Typography>
                      <div style={{ textAlign: "start" }}>
                        <input style={{maxWidth: '150px'}} value={inpComm} type="text" onChange={(e) => setInpComm(e.target.value)} />
                        <button style={{ height: "38px", border: "none", pointer: "cursor", background: "#68cff6", borderRadius: "7px" }} onClick={() => handleAddComment()}>Add comment</button>
                      </div>
                      {comments.map((item, index) => (
                        <>
                          {/* <Paper key={index + "comm"}>
                            <b>{userComm[0].email}:</b> {item.comment}
                          </Paper>
                          {/* <div className="oneComm" key={index + "comm"}>
                             <b>{userComm[0].email}:</b> {item.comment}
                          </div> */}
                          {/* <div>{item.data}</div> */}

                          <Comment item={item} />

                        </>
                      ))}
                    </div>

                  </>
                  : <h3>Loading...</h3>
              }

            </div>
          </>


          : transitions.map(({ item, key, props }) =>
            item
              ? <animated.div style={props} key={key}>😄Loading</animated.div>
              : <animated.div style={props} key={key}>🤪</animated.div>
          )
      }
    </>
  );
};

export default VillaDetail;








