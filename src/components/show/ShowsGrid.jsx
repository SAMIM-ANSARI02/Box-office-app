import ShowCard from "./ShowCard"
import { UsestartedShow } from "../lib/UsestartedShow"


const ShowsGrid=({show})=>{
    const[starredShow,dispatchStarred]=UsestartedShow()
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
                     IsStarred={starredShow.includes(data.show.id)}
                     />
                )}
        </div>
    )
}

export default ShowsGrid