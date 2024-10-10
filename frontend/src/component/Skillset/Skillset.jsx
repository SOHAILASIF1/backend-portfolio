import React from 'react';
import './Skillset.css'


function Skillset({icon,skillName}) {
  return (
    <div className='skill' data-skill-name={skillName}>
  <div className='skills-container'>{icon}</div>
</div>

  );
}

export default Skillset;
