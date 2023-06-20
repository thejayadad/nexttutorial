'use client'
import { AiOutlineMenu, AiOutlineClose,AiOutlineSmile } from "react-icons/ai";
import React, { useState } from 'react'
import Link from "next/link";
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'


const Navbar = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
        return !curState;
    })
}

const Links = [
      {name:"HOME",link:"/"},
      {name:"GALLERY",link:"/gallery"},
      {name:"ABOUT",link:"/about"},
      {name:"CONTACT",link:"/contact"},
      {name: ""}
]  
return (
    <header className='cursor-pointer container mx-auto px-5 flex justify-between py-4 items-center z-50'>
    <div> 
        <Link href='/' className="text-gray-900 text-3xl font-bold hover:bg-gray-500 p-2 border-md hover:text-white transition-all duration-300">Site Logo</Link>
    </div>
    <div className="lg:hidden z-50">
        {navIsVisible ? ( <AiOutlineClose
         className="w-6 h-6"
         onClick={navVisibilityHandler}
        /> 
        
        ) : ( 
        <AiOutlineMenu
        className="w-6 h-6" onClick={navVisibilityHandler}
        />
    )}
    </div>
    <nav className={`${navIsVisible ? "right-0" : "right-full"
     } transition-all duration-300 bg-gray-900 flex flex-col w-full fixed top-0 bottom-0 -right-full lg:bg-transparent lg:static gap-x-9 items-center lg:w-auto lg:flex-row justify-center lg:justify-end`}>
      <ul className='z-50 gap-y-5 items-center flex gap-x-5 flex flex-col font-semibold gap-x-2 lg:flex-row'> 
        {
          Links.map((link) => (
        <li>
          <Link className="text-orange-700 text-2xl font-bold hover:bg-orange-900 p-2 border-md hover:text-white transition-all duration-300" href={link.link}>{link.name}</Link>
        </li>
        ))
        }
      </ul>    
    </nav>
   </header>
  )
}

export default Navbar