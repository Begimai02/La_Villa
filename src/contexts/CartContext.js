import axios from 'axios';
import React, { useReducer } from 'react';

export const cartContext = React.createContext()

const INIT_STATE = {
    cart: []
}

const reducer = (state=INIT_STATE, action) => {
    switch(action.type){
        case "SHOW_VILLAS_IN_CART":
            return {
                ...state,
                cart: action.payload
            }
        case "ADD_TO_CART": 
            return{
                ...state,
                cart: action.payload
            }
        default: return state
    }
}
const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getVillasInCart = async () => {
        const { data } = await axios('http://localhost:8000/cart')
        dispatch({
            type: "SHOW_VILLAS_IN_CART",
            payload: data
        })
    }

    const getVillaById = async(id) => {
        // const { data } = await axios(`http://localhost:8000/villas/${id}`)
        // dispatch({
        //     type: "ADD_TO_CART",
        //     payload: data
        // })
        console.log(id);
    }

    const addToCard = async(newVillaToCart) => {
        await axios.post('http://localhost:8000/cart', newVillaToCart)
        getVillasInCart()
    }


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