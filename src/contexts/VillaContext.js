import React, { useReducer } from 'react'
import axios from 'axios'

export const villasContext = React.createContext()

const INIT_STATE = {
  villas: [],
  forEdit: null,
}


const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_VILLAS":
      return {
        ...state,
        villas: action.payload
      }
    case "EDIT_VILLA":
      return{
        ...state,
        forEdit: action.payload
      }
    default: return state
  }
}

const VillasContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE)

  const getVillas = async () => {
    const { data } = await axios('http://localhost:8000/villas')
    console.log(data);
    dispatch({
      type: "GET_VILLAS",
      payload: data

    })
  }

  const addVilla = async (newVilla) => {
    // console.log(newVilla)
    console.log("ASKAT")
    await axios.post('http://localhost:8000/villas', newVilla)
    getVillas()
  }

  const editVilla = async(id) => {
    console.log(id)
    let { data } = await axios(`http://localhost:8000/villas/${id}`)
    console.log('data: ', data);

    dispatch({
      type: "EDIT_VILLA",
      payload: data
  })
  }

  const saveNewEditVilla = async (newEditVilla) => {
    await axios.patch(`http://localhost:8000/villas/${newEditVilla.id}`, newEditVilla)
    getVillas()
  }

  const deleteVilla = (id) => {
    console.log(id);
    axios.delete(`http://localhost:8000/villas/${id}`)
    getVillas()
  }


return (
  <villasContext.Provider value={{
    villas: state.villas,
    forEdit: state.forEdit,
    getVillas,
    addVilla,
    editVilla,
    saveNewEditVilla,
    deleteVilla,
  }}>
    {children}
  </villasContext.Provider>
)
}

export default VillasContextProvider