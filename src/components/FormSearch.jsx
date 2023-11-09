import { useState } from "react"
const FormSearch=({onSearch})=>{
  const[searchstr,setsearchstr]=useState('')
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
        <input type="text" value={searchstr} onChange={HandleSearchInput}/>
        <label htmlFor="">
          Shows 
          <input type="radio" name='search-option' value='show' checked={searchOption==="show"}  onChange={onsearchInputChange} />
        </label>
        <label htmlFor="">
          Actors 
          <input type="radio" name='search-option' value='actor' checked={searchOption==='actor'} onChange={onsearchInputChange}  />
        </label>
        <button type='submit'>Search</button>
      </form> 
    )
}

export default FormSearch