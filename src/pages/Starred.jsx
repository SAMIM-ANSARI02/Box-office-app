import React from 'react'
import {UsestartedShow} from '../components/lib/UsestartedShow'
import { useQuery} from '@tanstack/react-query'
import ShowsGrid from '../components/show/ShowsGrid'
import { getshowByIds } from '../Api/Tvmaza'


const Starred = () => {
    const[starredShowId]=UsestartedShow()
    const {data:starredShow,error:starredShowError}= useQuery({
      queryKey: ['starred',starredShowId],
        queryFn: () => 
        getshowByIds(starredShowId).then(result=>
          result.map((show)=>({show}))),
        refetchOnWindowFocus:false
      })
      if(starredShow===0){
        return <div>NO shows are starred</div>
      }
      if(starredShow?.length>0){
        return <ShowsGrid show={starredShow}/>
      }
      if(starredShowError){
        return <div>shows are still Loading .....</div>
      }
  return (
    <div>hello</div>
  )
}

export default Starred;