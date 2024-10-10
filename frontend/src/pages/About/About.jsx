import React from 'react';

import Headings from '../../component/Headings/Headings';
import './About.css'
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa";
import Skillset from '../../component/Skillset/Skillset';
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { RiTailwindCssLine } from "react-icons/ri";
import { FiFigma } from "react-icons/fi";
import { SiRedux } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";


const  skills = [
  { icon: <FaHtml5 />, name: 'HTML5' },
  { icon: <FaCss3 />, name: 'CSS3' },
  { icon: <FaJsSquare />, name: 'JavaScript' },
  { icon: <FaReact />, name: 'React' },
  { icon: <FaNode />, name: 'Node.js' },
  { icon: <SiExpress />, name: 'Express' },
  { icon: <SiMongodb />, name: 'MongoDB' },
  { icon: <FaBootstrap />, name: 'Bootstrap' },
  { icon: <RiTailwindCssLine />, name: 'Tailwind CSS' },
  { icon: <FiFigma />, name: 'Figma' },
  { icon: <SiRedux />, name: 'Redux' }
];
const Tools=[
  {icon:<VscVscode/>,name:"VS CODE"},
  {icon:<FaGithub/>,name:"Github"},
  {icon:<SiPostman/>,name:"Postman"},
  {icon:<FaGitAlt/>,name:"Git"},

]

function About() {
  return (
    <>
    <div className="about">
      <Headings tittle="Professional" span="SkillSet"/>

    <div className="container-about">
      {skills.map((skill,index)=>(
        <Skillset key={index} icon={skill.icon} skillName={skill.name}/>

      ))}
    </div>
    <Headings tittle='Tool I ' span="Use"/>
    <div className="container-about">
      {Tools.map((tool,index)=>(
        <Skillset key={index} icon={tool.icon} skillName={tool.name}/>

      ))}
    </div>
    </div>
    </>
  );
}

export default About;
