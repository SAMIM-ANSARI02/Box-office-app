import ActorCard from "./ActorCard"
const ActorsGrid=({actor})=>{
return (
    <div>
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
        </div>
)
}

export default ActorsGrid