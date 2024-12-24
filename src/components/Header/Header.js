import React from 'react';

function Header() {
  return (
    <div>
    <div className='flex justify-between items-center w-full p-4' style={{ backgroundColor: 'rgb(241, 247, 247)' }}>
      <div className='text-2xl' style={{ color: 'rgb(11, 13, 14)' }}>
        Karthikeya
      </div>
      <div className='flex space-x-4' style={{ color: 'rgb(11, 13, 14)' }}>
        <a href='/' className='hover:text-gray-400'>Home</a>
        <a href='/about' className='hover:text-gray-400'>About</a>
        <a href='/services' className='hover:text-gray-400'>Services</a>
      </div>
    </div>
    <div className='border-b-2 border-gray-400'></div>
    </div>
  );
}

export default Header;
