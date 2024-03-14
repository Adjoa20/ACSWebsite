import React from 'react'

const NavLinks = () => {
    const links = [
        {name: 'About'},
        {name: 'Admissions'},
        {name: 'Staff'},
    ]
  return (
    <>
        {links.map((Link) => (
            <div>
                <div>
                    <h1>{Link.name}</h1>
                </div>
            </div>
        ))}
    </>
  )
}

export default NavLinks