import { useState } from "react"
import { useSearchStr } from "./lib/useSearchStr"
import CustomRadio from "./CustomRadio"
import styled from "styled-components"
const FormSearch=({onSearch})=>{
  const[searchstr,setsearchstr]=useSearchStr()
  const[searchOption,setsearchOption]=useState('show')

  
  const onsearchInputChange=(e)=>{
    setsearchOption(e.target.value)
}

const HandleSearchInput=(ev)=>{
    setsearchstr(ev.target.value)
  }

  const onsubmit=(ev)=>{
    ev.preventDefault()
     const options={
        q:searchstr,
        searchOption
     } 
     onSearch(options)

   }
    return(
        <form action="" onSubmit={onsubmit}>
        <SearchInput type="text" value={searchstr} onChange={HandleSearchInput} placeholder="search for somethings"/>

        <RadiosWrapper>
        <CustomRadio
        label='shows'
        name='search-option' 
        value='show' 
        checked={searchOption==="show"} 
        onChange={onsearchInputChange}
        />
       <CustomRadio
        label='Actors'
        type="radio" name='search-option'
        value='actor' 
        checked={searchOption==='actor'} 
        onChange={onsearchInputChange}
        />
        </RadiosWrapper>
            
        <SearchButtonWrapper>
        <button type='submit'>Search</button>
        </SearchButtonWrapper>
      
  
      </form> 
    )
}

export default FormSearch

const SearchInput = styled.input`
  display: block;
  font-family: 'Roboto', sans-serif;
  width: 200px;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 12px;
  color: #8d8d8d;
  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
`;

export const RadiosWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  label {
    margin: 0 15px;
  }
`;

const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;
  button {
    color: #fff;
    background-color: ${({ theme }) => theme.mainColors.blue};
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  }
`;