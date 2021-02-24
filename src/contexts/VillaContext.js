import React, { useReducer } from 'react'
import axios from 'axios'

export const villasContext = React.createContext()

const INIT_STATE = {
    villas: [],
    count: 0,
    forDetail: null,
    forEdit: null,
}



const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
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
        case "DETAIL_VILLA": {
            return {
                ...state,
                forDetail: action.payload
            }
        }
        case "EDIT_VILLA":
            return {
                ...state,
                forEdit: action.payload
            }
        default: return state
    }
}
    const VillasContextProvider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, INIT_STATE)

        const getVillas = async (url) => {
            try {
                const res = await fetch(url);
                const data = await res.json();
    
                
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

        const addVilla = async (newVilla) => {
            // console.log(newVilla)
            console.log("ASKAT")
            await axios.post('http://localhost:8000/villas', newVilla)
            getVillas()
        }

        const villaDetail = async (id) => {
            console.log(id)
            let { data } = await axios(`http://localhost:8000/villas/${id}`)
            console.log('detail: ', data);

            dispatch({
                type: "DETAIL_VILLA",
                payload: data
            })
        }
        const editVilla = async (id) => {
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
                count: state.count,
                forDetail: state.forDetail,
                forEdit: state.forEdit,
                getVillas,
                addVilla,
                editVilla,
                saveNewEditVilla,
                deleteVilla,
                villaDetail
            }}>
                {children}
            </villasContext.Provider>
        )
    }

    export default VillasContextProvider