import { useReducer ,useEffect} from "react"

const usePersistedReducer=(reducer,intialState,localStoragekey)=>{
    const[state,dispatch]=useReducer(reducer,intialState,(intial)=>{
      const persistedValue=localStorage.getItem(localStoragekey)
      return persistedValue? JSON.parse(persistedValue):intial;

    })
    useEffect(()=>{
      localStorage.setItem(localStoragekey,JSON.stringify(state))
    },[state,localStoragekey])
  return [state,dispatch]
}
const starredShowReducer=(currentStarred,action)=>{
    switch(action.type){
      case 'START':
          return currentStarred.concat(action.showId)
      case 'UNSTART':
          return currentStarred.filter(showId=>showId!==action.showId) 
      default :
      return currentStarred       
  
    }
  }

 export const UsestartedShow=()=>{
    return usePersistedReducer(starredShowReducer,[],'starredShow')
  }
  