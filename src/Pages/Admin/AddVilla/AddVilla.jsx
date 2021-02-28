import React, { useContext, useState } from 'react';
import { villasContext } from '../../../contexts/VillaContext';
import { Link } from 'react-router-dom'
import './AddVilla.css' 
import Navbar from '../../../components/Header/Navbar/Navbar'
import VillaList from '../../../components/Body/VillaList';

const AddVilla = () => {
  const [inpTitle, setInpTitle] = useState ('')
  const [inpDesc, setInpDesc] = useState('')
  const [inpPrice, setInpPrice] = useState('')
  const [inpSize, setInpSize] = useState('')
  const [inpPlace, setInpPlace] = useState('')
  const [inpImage, setInpImage] = useState('')
  const [inpImage2, setInpImage2] = useState('')
  const [inpImage3, setInpImage3] = useState('')
  const {addVilla} = useContext(villasContext)

  function handleClickAdd(){
    let newObj = {
      title: inpTitle,
      description: inpDesc,
      price: inpPrice,
      size: inpSize,
      place: inpPlace,
      image: [
        inpImage,
        inpImage2,
        inpImage3
      ]
    }
    if(!newObj.title.trim() || !newObj.description.trim() || !newObj.price.trim() || !newObj.size.trim() || !newObj.place.trim()){
      return alert("Заполните все поля")
    }
    addVilla(newObj)
    setInpTitle('')
    setInpDesc('')
    setInpPrice('')
    setInpSize('')
    setInpPlace('')
    setInpImage('')
    setInpImage2('')
    setInpImage3('')
  }

  return (
    <div className="add-block">
      <div className="form add-page-form">
      <h2 className="name-of-page">Add Brand New Villa</h2>
        <input value={inpTitle} onChange={(e) => setInpTitle(e.target.value)} placeholder="название" type="text"/>
        <input value={inpDesc} onChange={(e) => setInpDesc(e.target.value)} placeholder="описание" type="text"/>
        <input value={inpPrice} onChange={(e) => setInpPrice(e.target.value)} placeholder="цена" type="text"/>
        <input value={inpSize} onChange={(e) => setInpSize(e.target.value)} placeholder="квадратура" type="text"/>
        <input value={inpPlace} onChange={(e) => setInpPlace(e.target.value)} placeholder="локация" type="text"/>
        <input value={inpImage} onChange={(e) => setInpImage(e.target.value)} placeholder="картинка" type="text"/>
        <input value={inpImage2} onChange={(e) => setInpImage2(e.target.value)} placeholder="картинка" type="text"/>
        <input value={inpImage3} onChange={(e) => setInpImage3(e.target.value)} placeholder="картинка" type="text"/>
        <button onClick={handleClickAdd}>Add</button>
      </div>
      <VillaList />
    </div>
  );
};

export default AddVilla;