import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import { getShowId } from '../Api/Tvmaza';
const Show=()=>{
    const {showId}=useParams();
    const[showData,setshowData]=useState(null)
    const[error,seterror]=useState(null)
     useEffect(()=>{
      async function fetchdata(){
        try {
            const data=await getShowId(showId)
            // console.log('data:',data) 
            setshowData(data)
        } catch (err) {
            seterror(err)
        }
         
       }
       fetchdata()
     },[showId])

     if(error){
        return <div>we have an Error:{error.message}</div>
     }
     if(showData){
        return <div>Got show data:{showData.name}</div>
     }
    return(
        <div>
            <h1>show page for show {showId}</h1>
        </div>
    )
}

export default Show;