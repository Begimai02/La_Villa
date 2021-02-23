import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { villasContext } from '../../contexts/VillaContext';
import './VillaDetail.css';

const VillaDetail = () => {
  const { villas } = useContext(villasContext);  //, getVillaDetail
  
  const {id} = useParams();
  // useEffect(() => {
	// 	getVillaDetail(); //here maybe id inside parenthesies
	// }, [])

	// console.log(villaDetail)

  return (
    <>
      <div className="det-container">
        <div className="det-img">
          <img src="" alt="some villa"/>
        </div>
        <h1>La Villa</h1>
      </div>
    </>
  );
};

export default VillaDetail;