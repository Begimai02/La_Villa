import React, { useReducer } from 'react'
import axios from 'axios'

export const userContext = React.createContext()

const INIT_STATE = {
  users: []
}


const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload
      }
    default: return state
  }
}

const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE)

  const getUsers = async () => {
    const { data } = await axios('http://localhost:8000/users')
    console.log(data);
    dispatch({
      type: "GET_USERS",
      payload: data

    })
  }

  const addUser = async (newUser) => {
    // console.log(newUser)
    console.log("user Reg")
    await axios.post('http://localhost:8000/users', newUser)
    getUsers()
  }

  const isAdmin = () => {

  }

  return (
    <userContext.Provider value={{
      users: state.users,
      getUsers,
      addUser,
      isAdmin,
    }}>
      {children}
    </userContext.Provider>
  )
}

export default UserContextProvider