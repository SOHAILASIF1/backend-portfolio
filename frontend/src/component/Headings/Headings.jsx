import React from 'react'
import './Heading.css'

function Headings({tittle,span}) {
  return (
    <div className='heading-comp'>
        <h1 className='heading-heading'>{tittle} <span className='heading-span'>{span}</span></h1>
    </div>
  )
}

export default Headings