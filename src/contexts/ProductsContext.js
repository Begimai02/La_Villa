import React, { useReducer } from 'react'
import axios from 'axios'

export const productsContext = React.createContext()

const INIT_STATE = {
    diamonds: [],
    count: 0,
    forDetail: null,
    forEdit: null,
    favorite: null,
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_DIAMONDS":
            return {
                ...state,
                diamonds: action.payload
            }
        case "GET_DIAMONDS_COUNT":
            return {
                ...state,
                count: action.payload
            }
        case "DETAIL_DIAMONDS":
            return {
                ...state,
                forDetail: action.payload
            }
        case "EDIT_DIAMONDS":
            return {
                ...state,
                forEdit: action.payload
            }
        case "FAVO_DIAMONDS":
            return {
                ...state,
                favorite: action.payload
            }
        default: return state
    }
}
const DiamondContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getDiamonds = async (url) => {
               try {
            const res = await fetch(url);
            const data = await res.json();
            dispatch({
                type: "GET_DIAMONDS",
                payload: data
            })
            dispatch({
                type: "GET_DIAMONDS_COUNT",
                payload: parseInt(res.headers.get("x-total-count"))
            })
        } catch (error) {

        }
    }

    const addDiamonds = async (newVilla) => {
        await axios.post('http://localhost:8000/diamonds', newVilla)
        getDiamonds('http://localhost:8000/diamonds?_limit=6')
    }

    const diamondsDetail = async (id) => {
        console.log(id)
        let { data } = await axios(`http://localhost:8000/diamonds/${id}`)
        console.log('detail: ', data);

        dispatch({
            type: "DETAIL_DIAMONDS",
            payload: data
        })
    }
    const editDiamonds = async (id) => {
        console.log(id)
        let { data } = await axios(`http://localhost:8000/diamonds/${id}`)
        console.log('data: ', data);
        dispatch({
            type: "EDIT_DIAMONDS",
            payload: data
        })
        getDiamonds()
    }

    const saveNewEditDiamonds = async (newEditVilla) => {
        await axios.patch(`http://localhost:8000/diamonds/${newEditVilla.id}`, newEditVilla)
        getDiamonds('http://localhost:8000/diamonds?_limit=6')
    }

    const deleteDiamonds = async (id, url) => {
        await axios.delete(`http://localhost:8000/diamonds/${id}`)
        getDiamonds(url)
    }

    const getFavoriteId = async (id) => {
        let { data } = await axios(`http://localhost:8000/diamonds/${id}`)
        dispatch({
            type: "FAVO_DIAMONDS",
            payload: data
        })


        if (!localStorage.getItem('favorite')) {//проверка есть ли что-нибудь в localStorage
            localStorage.setItem('favorite', '[]')//если нет то добавляем туда путой массив
        }

        let local = JSON.parse(localStorage.getItem('favorite'));//стягиваем массив из localStorage и преобразоваем в обычный формат js
        local.push(data)//в массив добавляем новый обьект
        localStorage.setItem('favorite', JSON.stringify(local))//обновленный массив преобразовываем в формат json и отправляем обратно в localStorage
    }

    return (
        <productsContext.Provider value={{
            diamonds: state.diamonds,
            count: state.count,
            forDetail: state.forDetail,
            forEdit: state.forEdit,
            favorite: state.favorite,
            getFavoriteId,
            getDiamonds,
            addDiamonds,
            editDiamonds,
            saveNewEditDiamonds,
            deleteDiamonds,
            diamondsDetail
        }}>
            {children}
        </productsContext.Provider>
    )
}

export default DiamondContextProvider