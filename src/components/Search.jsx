import React, { useState } from 'react'

import useUserContext from '../hook/useUserContext'

const Search = () => {
  const { searchUser} = useUserContext()
  const [searchText, setSearchText]=useState("")

  const handleSubmit =(e)=>{
    e.preventDefault()
    const value = searchText.toLowerCase()
    searchUser(value)
    setSearchText("")
  }
  return (
    <div>
       <form onSubmit={handleSubmit}>
         <input type="text" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
         <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default Search