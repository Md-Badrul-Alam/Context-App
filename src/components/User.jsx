import React from "react";

import useUserContext from "../hook/useUserContext";

const User = ({ user }) => {
const {deleteUser} = useUserContext()
  
   const { id, name } = user;


   const handleClick =(id)=>{
    deleteUser(id)
   }
   return (
      <div className="user">
         <h1>User Name</h1>
         <hr />
         <hr />
         <h2> {id} </h2>
         <h2> {name} </h2>
         <br />
         <button
            type="submit"
            onClick={() => {
               handleClick(id);
            }}
         >
            Delete
         </button>
      </div>
   );
};

export default User;
