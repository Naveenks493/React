import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
  return (
    <>
    <Navbar />
    <p className='font-semibold text-2xl py-60  text-center'>I'm Naveen, a Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js).
         I enjoy building scalable web applications and writing clean, efficient code. With a strong foundation in both frontend and backend development,
         I'm passionate about learning new technologies and solving real-world problems through code.</p>
         <Footer />
    </>
  )
}

export default About;