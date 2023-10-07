import React from 'react'
import Navbar from './Navbar';

import HeroImg2 from './HeroImg2';
import WorkCard from './WorkCard';

const Project = () => {
  return <div>
    <Navbar/>
    <HeroImg2 heading="PROJECTS"  text= "As a dedicated MERN stack developer, I’ve had the privilege of working on a diverse range of projects, from dynamic web applications to scalable back-end systems. Below, you’ll find a selection of some of my recent projects" />
    <WorkCard/>
   
    </div>
  
}

export default Project
