import React, { useReducer } from "react";
import { UserContext } from "../hook/UserContext";
import { initialState, reducer } from "../reducer/usersReducer";



const UsersStor = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initialState)

   const value ={
      users: state.users,
      addUser:(newName)=>{
         dispatch({type: "ADD", payload: newName})
      },
      deleteUser:(id)=>{
         dispatch({type: "DELETE", payload:id})
      },
      searchUser:(value)=>{
         dispatch({type: "SEARCH", payload: value});
      }
   }
   
   return (
      <UserContext.Provider value={ value }>
         {children}
      </UserContext.Provider>
   );
};

export default UsersStor;
