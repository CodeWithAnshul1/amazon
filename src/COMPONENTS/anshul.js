import React from 'react'

export default function Navbar() {
  return (
    <div className="  text-white flex bg-black h-[60px] items-center justify-between fixed top-0 w-full mb-20 ">
        <li className='pl-10 text-mediam font-bold '>Anshul</li>
        <ul className=' hidden md:flex gap-5  pl-10 '>
           
            <li>About</li>
            <li>Skills</li>
            <li>Contect</li>
            <li>Project</li>
        </ul>
        <div className="search space-x-2 pr-10 ">
            <input  className="px-20  py-1 bg-white text-black" type="text" placeholder='enter'/>
            <button className='bg-blue-500 px-2 text-center'>search</button>
        </div>
      
    </div>
  )
}
