import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import "./Home.css"; // Ensure this file contains your styles
import FindMe from '../../component/FindMe/FindMe';

const Home = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['MERN Stack Developer.', '& a Frontend Web Designer'],
      typeSpeed: 100,      // Speed of typing
      backSpeed: 50,       // Speed of deleting
      backDelay: 1000,     // Delay before starting to delete
      loop: true,          // Loop through the strings
      showCursor: true,    // Show the cursor
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy(); // Cleanup on component unmount
    };
  }, []);

  return (
    <>
    <div className="home">
      {/* Myself Section */}
      <div className="box-1">
        <h1 className="Heading">
          My Self Sohail Asif <br />
          And I Am <span className="span-heading" ref={typedElement}></span>
        </h1>
        
        <div className='button'>
          <a 
            href="/cv.pdf"
            download
            className='btn'
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Icon Image */}
      <div className="img">
        <img src="/png.png" alt="Icon" className="w-3/4 mx-auto md:w-full" />
      </div>
    </div>
    

     <div className="homea" id='home'>
      <div className="box-1a" id='box-1'>
        <h1 className='Heading' id='Heading'>LET ME INTRODUCE <span className='span-heading'>MYSELF</span> </h1>
        <p className='paragraph'>
  Hi, my name is <span className="span-heading">Sohail Asif</span> and I'm from <span className="span-heading">Karachi</span>.
</p>
<p className='paragraph'>
  I recently graduated with a <span className="span-heading">Bachelor's degree in Computer Science and Engineering</span> in 2021.
</p>
<p className='paragraph'>
  As a <span className="span-heading">Full-Stack developer</span> specializing in the <span className="span-heading">MERN stack</span> (MongoDB, Express.js, React.js, and Node.js), I enjoy tackling new challenges and continuously expanding my skillset. My experience includes <span className="span-heading">building and maintaining responsive web applications</span>, <span className="span-heading">implementing RESTful APIs</span>, and <span className="span-heading">optimizing performance</span> to enhance user experience.
</p>
<p className='paragraph'>
  I am passionate about leveraging <span className="span-heading">modern frameworks and technologies</span> to create <span className="span-heading">efficient, scalable, and user-friendly applications</span>. Whether it's developing <span className="span-heading">interactive front-end features</span> or designing <span className="span-heading">robust back-end services</span>, I thrive on the dynamic nature of full-stack development and am always eager to learn and adapt to new technologies.
</p>


        
        
      </div>
      <div className="img" id='img'>
      
      <img src='/pngegg.png' alt=''/>
      </div>

     </div>
     <FindMe/>
    
    </>
    
  );
};

export default Home;
