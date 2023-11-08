 import React, { useState } from 'react'
 
 const Home = () => {
  const[searchstr,setsearchstr]=useState('')

  const HandleSearchInput=(ev)=>{
    setsearchstr(ev.target.value)
  }

  const onSearch=async(e)=>{
    e.preventDefault();
    const response=await fetch(`https://api.tvmaze.com/search/shows?q=${searchstr}`)
    const body=await response.json();
    console.log(body)
  }
   return (
     <div>
      <form action="" onSubmit={onSearch}>
        <input type="text" value={searchstr} onChange={HandleSearchInput}/>
        <button type='submit'>Search</button>
      </form> 
     </div>
   )
 }
 
 export default Home