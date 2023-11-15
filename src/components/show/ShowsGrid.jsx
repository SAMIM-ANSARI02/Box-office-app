import ShowCard from "./ShowCard"
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
const ShowsGrid=({show})=>{
    const[starredShow,dispatchStarred]=usePersistedReducer(starredShowReducer,[],'starred')
    console.log(starredShow)

    const OnstartMEclick=(showId)=>{
        const IsStarred=starredShow.includes(showId)
        if(IsStarred){
        dispatchStarred({type:'UNSTART',showId})
        }
        else{
            dispatchStarred({type:'START',showId})
        }
    }
    return(
        <div>
            {show.map(data=>
                <ShowCard
                     key={data.show.id}
                     name={data.show.name}
                     image={data.show.image?data.show.image.medium:'./Not-found.png'}
                     id={data.show.id}
                     summary={data.show.summary}
                     OnstartMEclick={OnstartMEclick}
                     />
                )}
        </div>
    )
}

export default ShowsGrid