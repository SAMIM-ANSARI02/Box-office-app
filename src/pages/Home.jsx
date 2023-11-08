 import React, { useState } from 'react'
import { searchForShow,searchForpeople } from '../Api/Tvmaza'
 
 const Home = () => {
  const[searchstr,setsearchstr]=useState('')
  const[apidata,setapidata]=useState(null)
  const[apidataError,setapidataError]=useState(null)
  const[searchOption,setsearchOption]=useState('show')

  
  const onsearchInputChange=(e)=>{
     setsearchOption(e.target.value)
     
  }
  console.log(searchOption)
  const HandleSearchInput=(ev)=>{
    setsearchstr(ev.target.value)
  }

  const onSearch=async(e)=>{
    e.preventDefault();
    try {
      if(searchOption==='show'){
        const result=await searchForShow(searchstr);
        setapidata(result)
      }else{
        const result=await searchForpeople(searchstr);
        setapidata(result)
      }
     
    } catch (error) {
      setapidataError(error)
    }
      
      
  }
  const renderApi=()=>{
    if(apidataError){
      return <div>Error occured:{apidataError.message}</div>
    }
     if(apidata){
      return apidata[0].show
      ? apidata.map((data)=><div key={data.show.id}>{data.show.name}</div>)
      :
      apidata.map((data)=>(<div key={data.person.id}>{data.person.name}</div>))
     }
     return null
  }
   return (
     <div>
      <form action="" onSubmit={onSearch}>
        <input type="text" value={searchstr} onChange={HandleSearchInput}/>
        <label htmlFor="">
          Shows 
          <input type="radio" name='search-option' value='show' checked={searchOption==="show"}  onChange={onsearchInputChange} />
        </label>
        <label htmlFor="">
          Actors 
          <input type="radio" name='search-option' value='actor' checked={searchOption==='actor'} onChange={onsearchInputChange}  />
        </label>
        <button type='submit'>Search</button>
      </form> 
      <div>{renderApi()}</div>
      </div>
   )
 }
 
 export default Home