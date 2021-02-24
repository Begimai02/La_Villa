import React, { useReducer } from 'react'
import axios from 'axios'

export const villasContext = React.createContext()

const INIT_STATE = {
  villas: [],
  count: 0
}


const reducer = (state=INIT_STATE, action) => {
    switch(action.type){
        case "GET_VILLAS":
            return {
                ...state,
                villas: action.payload
            }
        case "GET_VILLAS_COUNT": 
            return {
                ...state,
                count: action.payload
            }
        default: return state
    }
}

const VillasContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getVillas = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            
            console.log(parseInt(res.headers.get("x-total-count")))
            console.table(res)
            dispatch({
                type: "GET_VILLAS",
                payload: data
            })
            dispatch ({
                type: "GET_VILLAS_COUNT",
                payload: parseInt(res.headers.get("x-total-count"))
            })
        } catch (error) {
            
        }
    }




    const addVilla = async ( newVilla ) => {
        await axios.post('http://localhost:8000/villas', newVilla)
        getVillas()
    }
    
    return (
        <villasContext.Provider value={{
            getVillas,
            addVilla,
            villas: state.villas,
            count: state.count
        }}>
            {children}
        </villasContext.Provider>
    )
}

export default VillasContextProvider