import axios from 'axios';
import React, { useReducer } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const cartContext = React.createContext()

const INIT_STATE = {
    cart: [],
    orderInfo: null

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
        case "SAVE_ORDER":
            return {
                ...state,
                orderInfo: action.payload
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
    function test(){
        console.log("test")
        toast("WOW")

    }

    const deleteVilla = async (id) => {
        await axios.delete(`http://localhost:8000/cart/${id}`)
        getVillasInCart()
    }

    // booking

    const handleSendInfo = (orderObj) => {
        dispatch({
            type: "SAVE_ORDER",
            payload: orderObj
        })
        console.log(orderObj);
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
            deleteVilla,
            handleSendInfo,
            cart: state.cart,
            orderInfo: state.orderInfo
        }}>
            {children}
        </cartContext.Provider>
    )
};

export default CartContextProvider;