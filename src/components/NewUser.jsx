import React, { useState } from 'react'

import useUserContext from '../hook/useUserContext'

const NewUser = () => {
   const { addUser} = useUserContext()

   const [newUser, setNewUser]=useState('')

   const handleSubmit =(e)=>{
      e.preventDefault()
      const newName ={id: new Date().getTime().toString(), name: newUser}
     addUser(newName)
      setNewUser("")
   }
  return (
    <div>
      <form onSubmit={handleSubmit}>
         <input type="text" value={newUser} onChange={(e)=>{setNewUser(e.target.value)}}/>
         <button type="submit">Add User</button>
      </form>
    </div>
  )
}

export default NewUser