import React, { useContext, useState } from 'react';
import { villasContext } from '../../../contexts/VillaContext';
import { Link } from 'react-router-dom'
import './AddVilla.css' 
import VillaList from '../../../components/Body/VillaList';

const AddVilla = () => {
  const [inpTitle, setInpTitle] = useState ('')
  const [inpDesc, setInpDesc] = useState('')
  const [inpPrice, setInpPrice] = useState('')
  const [inpSize, setInpSize] = useState('')
  const [inpPlace, setInpPlace] = useState('')
  const [inpImage, setInpImage] = useState([])
  const {addVilla} = useContext(villasContext)

  function handleClickAdd(){
    let newObj = {
      title: inpTitle,
      description: inpDesc,
      price: inpPrice,
      size: inpSize,
      place: inpPlace,
      image: inpImage
    }
    console.log(newObj);
    addVilla(newObj)
    setInpTitle('')
    setInpDesc('')
    setInpPrice('')
    setInpSize('')
    setInpPlace('')
    setInpImage('')
  }

  return (
    <div>
      <h2>Add Brand New Villa</h2>
      <div className="form">
        <input value={inpTitle} onChange={(e) => setInpTitle(e.target.value)} placeholder="название" type="text"/>
        <input value={inpDesc} onChange={(e) => setInpDesc(e.target.value)} placeholder="описание" type="text"/>
        <input value={inpPrice} onChange={(e) => setInpPrice(e.target.value)} placeholder="цена" type="text"/>
        <input value={inpSize} onChange={(e) => setInpSize(e.target.value)} placeholder="квадратура" type="text"/>
        <input value={inpPlace} onChange={(e) => setInpPlace(e.target.value)} placeholder="локация" type="text"/>
        <input value={inpImage} onChange={(e) => setInpImage(e.target.value)} placeholder="картинка" type="text"/>
      <Link to="/list">

        <button onClick={handleClickAdd}>Add</button>
      </Link>
      </div>
      <VillaList />
    </div>
  );
};

export default AddVilla;