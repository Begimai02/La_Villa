import React, { useReducer } from 'react'
import axios from 'axios'

export const userContext = React.createContext()

const INIT_STATE = {
  users: [],
  yes: null
}

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload
      }
    case "IS_ADMIN":
      return {
        ...state,
        yes: action.payload
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
    console.log(newUser)
    console.log("user Reg")
    await axios.post('http://localhost:8000/users', newUser)
    getUsers()
  }

  const isAdmin = (yes) => {
    console.log(yes)
    dispatch({
      type: "IS_ADMIN",
      payload: yes
    })
  }


  return (
    <userContext.Provider value={{
      users: state.users,
      yes: state.yes,
      getUsers,
      addUser,
      isAdmin
    }}>
      {children}
    </userContext.Provider>
  )
}

export default UserContextProvider