import React from 'react'
import "./FindMe.css"
import Logo from '../Logo/Logo'
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { MdOutlineWhatsapp } from "react-icons/md";

function FindMe() {
  return (
    <div className='Findme'>
        <h1 className='Heading'>FIND ME ON</h1>
        <p id="paragraph">Please don't hesitate to reach out to me and connect</p>
        <div className='profile'>
            <a href=''><Logo link="https://www.linkedin.com/in/sohail-asif-40a95b264/" tittle={<TiSocialLinkedin />}/></a>
            <a href=''><Logo tittle={<TiSocialFacebook/>}/></a>
            <a target='_blank' href=''><Logo link='htttps://github.com/SOHAILASIF1' tittle={<FaGithub/>}/></a>
            <a href=''><Logo link="https://wa.me/923063683343
" tittle={<MdOutlineWhatsapp/>}/></a>


        </div>

    </div>
  )
}

export default FindMe