import axios from 'axios';
import React, { useReducer } from 'react';
import { toast } from 'react-toastify';

export const cartContext = React.createContext()

const INIT_STATE = {
    cart: []
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "SHOW_VILLAS_IN_CART":
            return {
                ...state,
                cart: action.payload
            }
        case "ADD_TO_CART":
            return {
                ...state,
                cart: action.payload
            }
        default: return state
    }
}
const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getVillasInCart = async () => {
        const { data } = await axios('http://localhost:8000/cart')
        console.log(data)
        dispatch({
            type: "SHOW_VILLAS_IN_CART",
            payload: data
        })
    }

    const getVillaById = async (id) => {
        const { data } = await axios(`http://localhost:8000/villas/${id}`)
        addToCard(data)
    }

    const addToCard = async (newVillaToCart) => {
        try {
            await axios.post('http://localhost:8000/cart', newVillaToCart)
            getVillasInCart()
        }
        catch (e) {
            notifyError()
        }
    }
    
    const notifyError = () => toast('Уже в корзине!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        newestOnTop: false,
        closeOnClick: true,
        rtl: false,
        pauseOnFocusLoss: true,
        draggable: true,
        pauseOnHover: true,
        type: 'error'
    });        

    return (
        <cartContext.Provider value={{
            getVillasInCart,
            getVillaById,
            addToCard,
            cart: state.cart
        }}>
            {children}
        </cartContext.Provider>
    )
};

export default CartContextProvider;