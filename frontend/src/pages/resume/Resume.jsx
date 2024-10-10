import React from 'react'
import "./Resume.css"
import Headings from '../../component/Headings/Headings'

function Resume() {
  return (
    <div className='resume'>
        <Headings tittle="Resume" span="Download"/>

      <div className='heading-comp'>  <a 
            href="/cv.pdf"
            download
            className='btn'
          >
            Download CV
          </a></div>
          
    </div>
  )
}

export default Resume