import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { villasContext } from '../../contexts/VillaContext';
import './VillaDetail.css';
import { useTransition, animated } from 'react-spring'
import SlideBox from '../../components/MainBox/Slider';
import { commentContext } from '../../contexts/CommentContext';

const VillaDetail = () => {
  const { villas, villaDetail, forDetail } = useContext(villasContext);  //, getVillaDetail
  const { addComment, getComments, comments } = useContext(commentContext);

  const [inpComm, setInpComm] = useState('');

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
          <div style={{marginTop: "40px"}}>
            <h1>{forDetail.title}</h1>
          </div>
            <div className="det-container">
              <div style={{marginBottom: "40px"}}>
                <SlideBox images={forDetail} style={{marginTop: "50px"}} />
              </div>
              <div style={{ marginTop: '550px', padding: "15px" }}>
                <p>{forDetail.description}</p>
              </div>
              <div>
                <h4>{forDetail.price}</h4>
              </div>
              <div>
                <h4>{forDetail.place}</h4>
              </div>

              {
                comments ?
                  <>
                    <div>
                      <input value={inpComm} type="text" onChange={(e) => setInpComm(e.target.value)} />
                      <button onClick={() => handleAddComment()}>Save</button>
                    </div>
                    <div className="comment-section">
                        {comments.map((item, index) => (
                          <>
                          <div className="oneComm" key={index + "comm"}>
                             <b>{userComm[0].email}:</b> {item.comment}
                          </div>
                          <div>{item.data}</div>

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
















// import React, { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { villasContext } from '../../contexts/VillaContext';
// import './VillaDetail.css';

// const VillaDetail = () => {
//   const { villas, villaDetail, forDetail } = useContext(villasContext);  //, getVillaDetail
//   const [detail, setDetail] = useState(null)

//   const { id } = useParams();

//   useEffect(() => {
//     setDetail(forDetail)
//   }, [forDetail])

//   useEffect(() => {
//     villaDetail(id)
//   }, [id])
//   // useEffect(() => {
//   // 	getVillaDetail(); //here maybe id inside parenthesies
//   // }, [])

//   // console.log(villaDetail)

//   return (
//     <>
//     <h1>Detail</h1>
//       {
//         detail ?
//           <>
//             <div className="det-container">
//               <div className="det-img">
//                 <img src={detail.image} alt="some villa" />
//               </div>
//               <h1>{detail.title}</h1>
//             </div>
//           </>
//         : <h1>Loading...</h1>
//     }
//     </>
//   );
// };

// export default VillaDetail;