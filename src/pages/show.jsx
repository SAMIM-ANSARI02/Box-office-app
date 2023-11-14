// import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import { getShowId } from '../Api/Tvmaza';
import { useQuery} from '@tanstack/react-query'
import ShowMaindata from '../components/show/ShowMaindata';
import ShowDetail from '../components/show/showDetail';
import Season from '../components/show/season';
import Cast from '../components/show/cast';


const Show=()=>{
    const {showId}=useParams();
    // const{error,showData}=useShowById(showId)
   const {error,data:showData}= useQuery({
      queryKey: ['show', showId],
        queryFn: () => getShowId(showId),
        refetchOnWindowFocus:false
      })
    
    if(error){
        return <div>we have an Error:{error.message}</div>
     }
     if(showData){
        return(
     <div>
        <ShowMaindata
            name={showData.name}
            image={showData.image}
            summary={showData.summary}
            rating={showData.rating}
            genres={showData.genres}/>
          <div>
            <h2>Details</h2>
            <ShowDetail
              status={showData.status}
              network={showData.network} 
              premiered={showData.premiered}/>
          </div>

          <div>
            <h2>Season</h2>
            <Season seasons={showData._embedded.seasons}/>
          </div>
          <div>
            <h2>Cast</h2>
            <Cast cast={showData._embedded.cast}/>
          </div>

        </div>
           
          
      
        )
       
     }
    return(
        <div>data is loading.....</div>
    )
}

export default Show;