import React from 'react'
import { Link } from 'react-router';

const SideNavbar = () => {
  return (
    <div className='bg-blue-400 w-[20%] h-full fixed left-0 top-0 text-white p-3'>
      <h1 className='font-bold text-2xl py-4'>Side Navbar</h1>
      <ul className='space-y-2 font-bold text-2xl cursor-pointer'>
        <li className="hover:text-red-500">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-red-500">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:text-red-500">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="hover:text-red-500">
          <Link to="/faq">Faq</Link>
        </li>
        <li className="hover:text-red-500">
          <Link to="/links">Links</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNavbar;
