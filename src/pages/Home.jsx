 import React, { useState } from 'react'
import { searchForShow } from '../Api/Tvmaza'
 
 const Home = () => {
  const[searchstr,setsearchstr]=useState('')
  const[apidata,setapidata]=useState(null)
  const[apidataError,setapidataError]=useState(null)

  const HandleSearchInput=(ev)=>{
    setsearchstr(ev.target.value)
  }

  const onSearch=async(e)=>{
    e.preventDefault();
    try {
      const result=await searchForShow(searchstr);
      setapidata(result)
    } catch (error) {
      setapidataError(error)
    }
      
      
  }
  const renderApi=()=>{
    if(apidataError){
      return <div>Error occured:{apidataError.message}</div>
    }
     if(apidata){
      return apidata.map((data)=>(
        <div key={data.show.id}>{data.show.name}</div> 
      ))
     }
     return null
  }
   return (
     <div>
      <form action="" onSubmit={onSearch}>
        <input type="text" value={searchstr} onChange={HandleSearchInput}/>
        <button type='submit'>Search</button>
      </form> 
      <div>{renderApi()}</div>
      </div>
   )
 }
 
 export default Home