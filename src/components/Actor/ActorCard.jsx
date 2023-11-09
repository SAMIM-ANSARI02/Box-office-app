
const ActorCard=({name,image,id,birthday,deathday,gender,country})=>{
  return(
        <div>
            <div>
                <img src={image} alt={name} />
            </div>
            <h1>{name}{!!gender && `(${gender})`}</h1>
            <p>{country?`comes from ${country}`:"No country known"}</p>
            {!!birthday && <p>born {birthday}</p>}
            <p>{deathday?`died ${deathday}`:"Alive"}</p>
            
            
        </div>
    )
}

export default ActorCard