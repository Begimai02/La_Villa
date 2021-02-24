import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { villasContext } from '../../contexts/VillaContext';
import './VillaDetail.css';

const VillaDetail = () => {
  const { villas, villaDetail, forDetail } = useContext(villasContext);  //, getVillaDetail
  const [detail, setDetail] = useState(null)

  const { id } = useParams();

  useEffect(() => {
    setDetail(forDetail)
  }, [forDetail])

  useEffect(() => {
    villaDetail(id)
  }, [id])
  // useEffect(() => {
  // 	getVillaDetail(); //here maybe id inside parenthesies
  // }, [])

  // console.log(villaDetail)

  return (
    <>
    <h1>Detail</h1>
      {
        detail ?
          <>
            <div className="det-container">
              <div className="det-img">
                <img src={detail.image} alt="some villa" />
              </div>
              <h1>{detail.title}</h1>
            </div>
          </>
        : <h1>Loading...</h1>
    }
    </>
  );
};

export default VillaDetail;