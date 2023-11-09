import ShowCard from "./ShowCard"

const ShowsGrid=({show})=>{
    return(
        <div>
            {show.map(data=>
                <ShowCard
                     key={data.show.id}
                     name={data.show.name}
                     image={data.show.image?data.show.image.medium:'./Not-found.png'}
                     id={data.show.id}
                     summary={data.show.summary}
                     />
                )}
        </div>
    )
}

export default ShowsGrid