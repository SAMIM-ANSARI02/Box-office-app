// import {Link} from 'react-router-dom'
const ShowCard=({name,image,id,summary,OnstartMEclick})=>{

    const summaryStripped=summary?summary.split(' ').slice(0,10).join(" ").replace(/<.+?>/g,''):'no description'
    return(
        <div>
            <div>
                <img src={image} alt={name} />
            </div>
            <h1>{name}</h1>
            <p>{summaryStripped}</p>
            <div>
              <a href={`/show/${id}`} target='_blank' rel='noreferrer'>read more..</a>
              <button type='button' onClick={()=>OnstartMEclick(id)}>start me</button>
            </div>
        </div>
    )
}

export default ShowCard