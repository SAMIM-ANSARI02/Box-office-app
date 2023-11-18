 import React, { useState } from 'react'
import { searchForShow,searchForpeople } from '../Api/Tvmaza'
import FormSearch from '../components/FormSearch'
import ShowsGrid from '../components/show/ShowsGrid'
import ActorsGrid from '../components/Actor/ActorsGrid'
import { useQuery } from '@tanstack/react-query'
import { TextCenter } from '../components/common/TextCentre'

 
 const Home = () => {
  // const[apidata,setapidata]=useState(null)
  // const[apidataError,setapidataError]=useState(null)
  const [filter, setFilter] = React.useState(null)

  const { data:apidata,error:apidataError } = useQuery({
    queryKey: ['todos', filter],
    queryFn: () =>filter.searchOption==='show'?searchForShow(filter.q):searchForpeople(filter.q) ,
    // ⬇️ disabled as long as the filter is empty
    enabled: !!filter,
    refetchOnWindowFocus:false
})

 


  const onSearch=async({q,searchOption})=>{
    setFilter({q,searchOption});
     
    // try {
    //   setapidata(null)
    //   let result;
    //   if(searchOption==='show'){
    //      result=await searchForShow(q);
    //    }else{
    //      result=await searchForpeople(q); 
    //   }
    //   setapidata(result)
     
    // } catch (error) {
    //   setapidataError(error)
    // }
      
      
  }
  const renderApi=()=>{
    if(apidataError){
      return <TextCenter>Error occured:{apidataError.message}</TextCenter>
    }
    if(apidata?.length===0){
      return <TextCenter>Opps! Result not Found</TextCenter>
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