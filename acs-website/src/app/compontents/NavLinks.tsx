'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { links } from './Links'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

const NavLinks = () => {
   const [heading, setHeading] = useState('')
    return (
        <>
            {links.map((link) => (
                <div key={link.name}>
                    <div className='px-3 text-left md:cursor-pointer group'>
                        <h1 className='py-7 flex justify-between items-center md:pr-0 pr-5' onClick={() => heading !== link.name ? setHeading(link.name) : setHeading('')}>{link.name}
                        <span className='text-xl md:mt-1 md:hidden inline'>
                           <ChevronDownIcon className='h-5 w-5 md:h-3 md:w-3'/> 
                        </span>
                        <span className='text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:mt-2'>
                           <ChevronDownIcon className='h-5 w-5 md:h-3 md:w-3'/> 
                        </span>
                        </h1>
                        {link.submenu && (
                            <div>
                                <div className='absolute top-20 hidden group-hover:md:block hover:md:block'>
                                    <div className='py-3'>
                                        <div className='w-4 h-4 left-3 absolute mt-1 bg-black rotate-45'>

                                        </div>
                                    </div>
                                    <div className='bg-black p-5 grid grid-cols-1 gap-1'>
                                        {link.sublinks.map((mysubLinks) => (
                                            <div key={mysubLinks.sublink[0].name}>
                                                <h1 className='text-sm font-light'>
                                                    {mysubLinks.sublink.map((sLink) => (
                                                        <li key={sLink.name} className='text-sm text-white my-2.5'>
                                                            <Link href={sLink.link} passHref> <a className='hover:text-slate-800'></a>{sLink.name}</Link>
                                                        </li>
                                                    ))}
                                                </h1>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* FOR MOBILE USE  */}
                    <div className={`${heading === link.name ? 'md:hidden' : 'hidden'}`}>
                        {
                            link.sublinks.map((sLinks)=>(
                                <div>
                                    <div>
                                        {sLinks.sublink.map((sLink) => (
                                            <li className='py-3 pl-14'>
                                                <Link href={sLink.link} className='hover:text-slate-400'>{sLink.name}</Link>
                                            </li>
                                        ))}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            ))}
        </>
    )
}

export default NavLinks
