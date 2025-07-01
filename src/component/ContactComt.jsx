import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';

const Contact = () => {
  return (
    <>
    <Navbar />
          <div className='text-2xl text-center py-60'>
            <h1> Contact no: 123456789</h1>
           <h1> E-mail:abc@gmail.com</h1>
           <h1> LinkedIn:www.abclinkedin.com</h1>
          </div>
          <Footer />
    </>
  )
}

export default Contact;