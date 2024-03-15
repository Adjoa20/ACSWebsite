import Navbar from '@/app/compontents/Navbar'
import React from 'react'

const AboutPage = () => {
    return (
        <div className="md:flex md:justify-center md:items-center md:gap-8 md:py-8 md:px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Navbar />
            <div className="md:w-1/2">
                <h1 className='mt-96'>ABOUT PAGE</h1>
            </div>
        </div>
    )
}

export default AboutPage
