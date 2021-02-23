import React, { useReducer } from 'react'
import axios from 'axios'

export const villasContext = React.createContext()

const INIT_STATE = {
  villas: []
}


const reducer = (state=INIT_STATE, action) => {
    switch(action.type){
        case "GET_VILLAS":
            return {
                ...state,
                villas: action.payload
            }
        default: return state
    }
}

const VillasContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getVillas = async () => {
        const { data } = await axios('http://localhost:8000/villas')
        console.log(data);
        dispatch({
            type: "GET_VILLAS",
            payload: data
            
        })
    }

    const addVilla = async ( newVilla ) => {
        // console.log(newVilla)
        console.log("ASKAT")
        await axios.post('http://localhost:8000/villas', newVilla)
        // getVillas()
    }
    
    return (
        <villasContext.Provider value={{
            getVillas,
            addVilla,
            villas: state.villas
        }}>
            {children}
        </villasContext.Provider>
    )
}

export default VillasContextProvider