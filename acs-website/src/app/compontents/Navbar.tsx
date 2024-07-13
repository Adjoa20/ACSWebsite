'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import NavLinks from './NavLinks'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const Navbar = () => {
  const [open, setOpen] = useState(false)

const toggleMenu = () => {
  setOpen(!open)
}

 

  return (
    <section className="fixed mx-auto top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
    <nav className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
      <div className="max-h-screen-2xl mx-4 lg:mx-25 px-6 flex justify-between items-center">
        <ul className="hidden md:flex lg:flex-grow uppercase items-center gap-8 text-white">
          <li>
            <Link href="/" className="flex items-center flex-shrink-0">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
        {/* FOR MOBILE NAVIGATION */}
        <div className={`mobile-menu block md:hidden`}>
            <button onClick={toggleMenu} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
            {open ? 
              <XMarkIcon className="h-5 w-5" />
             : 
              <Bars3Icon className="h-5 w-5" />
            }
            </button>
          {open && (
            <ul className={`bg-white w-full top-0 bottom-0 pl-4 duration-500 ${open ? 'left-0' : 'left-[-100%]'}`}>
              <li>
                <Link href={"/" }className="py-7 px-3 inline-block">
                  Home
                </Link>
              </li>
              <NavLinks />
            </ul>
          )}
        </div>
      </div>
    </nav>
  </section>
  )
}

export default Navbar
