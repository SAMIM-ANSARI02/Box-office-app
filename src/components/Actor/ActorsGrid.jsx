import ActorCard from "./ActorCard"
import {FlexGrid} from '../common/FlexGrid'
const ActorsGrid=({actor})=>{
return (
    <FlexGrid>
            {actor.map(data=>
                <ActorCard
                key={data.person.id}
                name={data.person.name}
                country={data.person.country?data.person.country.name:null}
                birthday={data.person.birthday}
                gender={data.person.gender}
                deathday={data.person.deathday}
                image={data.person.image?data.person.image.medium:'./Not-found.png'}
                />
                )}
        </FlexGrid>
)
}

export default ActorsGrid