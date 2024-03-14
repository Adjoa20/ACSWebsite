'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import NavLinks from './NavLinks'

const Navbar = () => {
  const currentPath = usePathname()
  console.log(currentPath)

  return (
    <section className="fixed mx-auto border border-[#33353f] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
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
          <ul className={`md:hidden bg-white absolute w-full h-full bottom-0 pl-4`}>
            <li>
              <Link href="/" className="py-7 px-3 inline-block">
                Home
              </Link>
            </li>
            <NavLinks />
          </ul>
        </div>
      </nav>
    </section>
  )
}

export default Navbar
