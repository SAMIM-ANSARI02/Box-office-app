import React from 'react'

const AppTittle = (props) => {
    const{tittle="BOX-OFFICE" ,subtittle='Are you looking for movie or actor?'}=props
  return (
    <div>
        <h1>{tittle}</h1>
        <p>{subtittle}</p>
    </div>
  )
}

export default AppTittle