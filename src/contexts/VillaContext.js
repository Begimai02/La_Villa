import React, { useReducer } from 'react'
import axios from 'axios'

export const villaContext = React.createContext()

const INIT_STATE = {
    villas: []
}


const reducer = (state=INIT_STATE, action) => {
    switch(action.type){
        case "GET_VILLAS":
            return {
                ...state,
                villas: action.payload.villas
            }
        default: return state
    }
}

const VillasContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getVillas = async () => {
        const {data} = await axios.get('http://localhost:3000/villas')
        console.log(data);
        dispatch({
            type: "GET_VILLAS",
            payload: {
                villas: data
            }
        })
    }
    return (
        <villasContext.Provider value={{
            getVillas
        }}>
            {children}
        </villasContext.Provider>
    )
}

export default VillasContextProvider