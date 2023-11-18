import {SearchCard,SearchImgWrapper} from '../common/searchCard'

const ActorCard=({name,image,id,birthday,deathday,gender,country})=>{
  return(
        <SearchCard>
            <SearchImgWrapper>
                <img src={image} alt={name} />
            </SearchImgWrapper>
            <h1>{name}{!!gender && `(${gender})`}</h1>
            <p>{country?`comes from ${country}`:"No country known"}</p>
            {!!birthday && <p>born {birthday}</p>}
            <p>{deathday?`died ${deathday}`:"Alive"}</p>
            
            
        </SearchCard>
    )
}

export default ActorCard