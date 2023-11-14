import React from 'react'

const ShowMaindata = ({image,summary,rating,genres,name}) => {
  return (
    <div>
        <img src={image?image.original:'/Not-found.png'} alt="" />
      <div>
        <h2>{name}</h2>
        <div>{rating.average || "N/A"}</div>
        <div dangerouslySetInnerHTML={{__html:summary}}/>
        <div>geners:
            <div>{genres.map((gener)=>(<span key={gener}>{gener}</span>))}</div>
            
        </div>
        
        
      </div>
    </div>
  )
}

export default ShowMaindata