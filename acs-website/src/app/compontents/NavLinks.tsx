
import React from 'react'
import Link from 'next/link'
import { links } from './Links'

const NavLinks = () => {
   
    return (
        <>
            {links.map((link) => (
                <div key={link.name}>
                    <div className='px-3 text-left md:cursor-pointer group'>
                        <h1 className='py-7'>{link.name}</h1>
                        {link.submenu && (
                            <div>
                                <div className='absolute top-20 hidden group-hover:block hover:block'>
                                    <div className='py-3'>
                                        <div className='w-4 h-4 left-3 absolute mt-1 bg-black rotate-45'>

                                        </div>
                                    </div>
                                    <div className='bg-black p-5 grid grid-cols-1 gap-1'>
                                        {link.sublinks.map((mysubLinks) => (
                                            <div key={mysubLinks.sublink[0].name}>
                                                <h1 className='text-sm font-light'>
                                                    {mysubLinks.sublink.map((sLink) => (
                                                        <li key={sLink.name} className='text-sm text-gray-600 my-2.5'>
                                                            <Link href={sLink.link} className='hover:text-slate-500'>{sLink.name}</Link>
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
                </div>
            ))}
        </>
    )
}

export default NavLinks
