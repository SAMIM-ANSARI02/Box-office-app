import React from 'react'

const ShowDetail = ({network,premiered,status}) => {
  return (
    <div>
        <p>status:{status}</p>
        <p>premiered: {premiered} {!!network && `on ${network.name}`} </p>
    </div>

  )
}

export default ShowDetail