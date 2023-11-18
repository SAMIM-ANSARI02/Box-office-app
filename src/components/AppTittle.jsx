import React from 'react'
import styled from 'styled-components'

const AppTittle = (props) => {
    const{tittle="BOX-OFFICE" ,subtittle='Are you looking for movie or actor?'}=props
  return (
    <TitleWrapper>
        <h1>{tittle}</h1>
        <p>{subtittle}</p>
    </TitleWrapper>
  )
}

export default AppTittle

const TitleWrapper = styled.div`
  text-align: center;
  margin: 0 0 40px;
  h1 {
    color: ${({ theme }) => theme.mainColors.blue};
    letter-spacing: 10px;
    text-transform: uppercase;
    margin: 0 0 10px;
  }
  p {
    color: ${({ theme }) => theme.mainColors.dark};
    margin: 0;
  }
`;