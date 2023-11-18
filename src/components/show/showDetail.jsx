import React from 'react'
import styled from 'styled-components'


const ShowDetail = ({network,premiered,status}) => {
  return (
    <DetailsWrapper>
        <p>status:{status}</p>
        <p>premiered: {premiered} {!!network && `on ${network.name}`} </p>
    </DetailsWrapper>

  )
}

export default ShowDetail
const DetailsWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;