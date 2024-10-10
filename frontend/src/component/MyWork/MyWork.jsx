import React from 'react'
import './MyWork.css'

function MyWork({img,tittle,disc,url}) {
  return (
    <div className='mywork'>
        <img src={img} alt=''/>
        <h4>{tittle}</h4>
        <p>{disc}</p>
        <a href={url} target='_blank'>Github</a>



    </div>
  )
}

export default MyWork