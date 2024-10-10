import React from 'react'
import './Logo.css'


function Logo({tittle,link}) {
  return (
    <div className='logo'>
      <a href={link} target='_blank'>
        {tittle}
        </a>


    </div>
  )
}

export default Logo