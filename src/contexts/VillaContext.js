import React, { useReducer } from 'react'
import axios from 'axios'

export const villasContext = React.createContext()

const INIT_STATE = {
    villas: [],
    count: 0,
    forDetail: null,
    forEdit: null,
    favorite: null,
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
        case "DETAIL_VILLA": 
            return {
                ...state,
                forDetail: action.payload
            }
        case "EDIT_VILLA":
            return {
                ...state,
                forEdit: action.payload
            }
        case "FAVO_VILLA": 
            return {
              ...state,
              favorite: action.payload
            }
        default: return state
    }
}
    const VillasContextProvider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, INIT_STATE)

        const getVillas = async (url) => {
            console.log(url, "222222")
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
            await axios.post('http://localhost:8000/villas', newVilla)
            getVillas('http://localhost:8000/villas?_limit=3')
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
            getVillas()
        }

        const saveNewEditVilla = async (newEditVilla) => {
            await axios.patch(`http://localhost:8000/villas/${newEditVilla.id}`, newEditVilla)
            getVillas('http://localhost:8000/villas?_limit=3')
        }

        const deleteVilla = async (id, url) => {
            console.log(url)
            await axios.delete(`http://localhost:8000/villas/${id}`)
            getVillas(url)
        }

        const getFavoriteId = async (id) => {
          let { data } = await axios(`http://localhost:8000/villas/${id}`)
            dispatch({
                type: "FAVO_VILLA",
                payload: data
            })


            if(!localStorage.getItem('favorite')){//проверка есть ли что-нибудь в localStorage
              localStorage.setItem('favorite', '[]')//если нет то добавляем туда путой массив
              }
          
              let local = JSON.parse(localStorage.getItem('favorite'));//стягиваем массив из localStorage и преобразоваем в обычный формат js
              local.push(data)//в массив добавляем новый обьект
              localStorage.setItem('favorite', JSON.stringify(local))//обновленный массив преобразовываем в формат json и отправляем обратно в localStorage
        }

        return (
            <villasContext.Provider value={{
                villas: state.villas,
                count: state.count,
                forDetail: state.forDetail,
                forEdit: state.forEdit,
                favorite: state.favorite,
                getFavoriteId,
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