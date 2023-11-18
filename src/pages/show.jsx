// import { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom'
import { getShowId } from '../Api/Tvmaza';
import { useQuery} from '@tanstack/react-query'
import ShowMaindata from '../components/show/ShowMaindata';
import ShowDetail from '../components/show/showDetail';
import Season from '../components/show/season';
import Cast from '../components/show/cast';
import styled from 'styled-components';
import { TextCenter } from '../components/common/TextCentre';


const Show=()=>{
    const {showId}=useParams();
    // const{error,showData}=useShowById(showId)
   const {error:showError,data:showData}= useQuery({
      queryKey: ['show', showId],
        queryFn: () => getShowId(showId),
        refetchOnWindowFocus:false
      })
    
    if(showError){
        return <TextCenter>we have an Error:{showError.message}</TextCenter>
     }
     if(showData){
        return(
     <ShowPageWrapper>

       <BackHomeWrapper>
         <Link to={'/'}>Go to home</Link>
       </BackHomeWrapper>
       
        <ShowMaindata
            name={showData.name}
            image={showData.image}
            summary={showData.summary}
            rating={showData.rating}
            genres={showData.genres}/>
          <InfoBlock>
            <h2>Details</h2>
            <ShowDetail
              status={showData.status}
              network={showData.network} 
              premiered={showData.premiered}/>
          </InfoBlock>

          <InfoBlock>
            <h2>Season</h2>
            <Season seasons={showData._embedded.seasons}/>
          </InfoBlock>
          <InfoBlock>
            <h2>Cast</h2>
            <Cast cast={showData._embedded.cast}/>
          </InfoBlock>

        </ShowPageWrapper>
           
          
      
        )
       
     }
    return(
        <TextCenter>data is loading.....</TextCenter>
    )
}

export default Show;

const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;