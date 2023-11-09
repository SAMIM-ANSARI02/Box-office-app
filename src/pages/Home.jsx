 import React, { useState } from 'react'
import { searchForShow,searchForpeople } from '../Api/Tvmaza'
import FormSearch from '../components/FormSearch'
import ShowsGrid from '../components/show/ShowsGrid'
import ActorsGrid from '../components/Actor/ActorsGrid'

 
 const Home = () => {
  const[apidata,setapidata]=useState(null)
  const[apidataError,setapidataError]=useState(null)

 


  const onSearch=async({q,searchOption})=>{
     
    try {
      setapidata(null)
      let result;
      if(searchOption==='show'){
         result=await searchForShow(q);
       }else{
         result=await searchForpeople(q); 
      }
      setapidata(result)
     
    } catch (error) {
      setapidataError(error)
    }
      
      
  }
  const renderApi=()=>{
    if(apidataError){
      return <div>Error occured:{apidataError.message}</div>
    }
    if(apidata?.length===0){
      return <div>Opps! Result not Found</div>
    }
     if(apidata){
      return apidata[0].show
      ? <ShowsGrid show={apidata}/>
      :
      <ActorsGrid  actor={apidata}/>
     }
     return null
  }
   return (
     <div>
      <FormSearch onSearch={onSearch}/>
      
      <div>{renderApi()}</div>
      </div>
   )
 }
 
 export default Home