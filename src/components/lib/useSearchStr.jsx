import { useState,useEffect} from "react"

const usePersistedstate=(intialState,localSessionKey)=>{
    const[state,setstate]=useState(()=>{
      const persistedValue=sessionStorage.getItem(localSessionKey)
      return persistedValue? JSON.parse(persistedValue):intialState;

    })
    useEffect(()=>{
      sessionStorage.setItem(localSessionKey,JSON.stringify(state))
    },[state,localSessionKey])
  return [state,setstate]
}

export const useSearchStr=()=>{
    return usePersistedstate('','searchString')
}