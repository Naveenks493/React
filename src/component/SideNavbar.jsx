import React from 'react'

const SideNavbar = () => {
  return (
    <div className='bg-blue-400 inline-block  w-[10%] h-screen text-white '>
        <h1 className='font-bold text-2xl py-4'>Side Navbar</h1>
       <ul className='space-y-2 font-bold text-2xl text-transform: cursor-pointer'>
         <li className=" hover:text-red-500">Home</li>
        <li className=" hover:text-red-500">About</li>
        <li className=" hover:text-red-500">Contact</li>
        <li className=" hover:text-red-500">Faq</li>
        <li className=" hover:text-red-500">Links</li>
       </ul>
    </div>
  )
}

export default SideNavbar;