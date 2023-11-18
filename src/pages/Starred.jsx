import React from 'react'
import {UsestartedShow} from '../components/lib/UsestartedShow'
import { useQuery} from '@tanstack/react-query'
import ShowsGrid from '../components/show/ShowsGrid'
import { getshowByIds } from '../Api/Tvmaza'
import { TextCenter } from '../components/common/TextCentre'


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
        return <TextCenter>NO shows are starred</TextCenter>
      }
      if(starredShow?.length>0){
        return <ShowsGrid show={starredShow}/>
      }
      if(starredShowError){
        return <TextCenter>Error occured:{starredShowError.message}</TextCenter>
      }
  return (
    <TextCenter>shows are still Loading .....</TextCenter>
  )
}

export default Starred;