'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { images } from '../utils/constants';

const Slider = () => {
    const [activeImage, setActiveImage] = useState(0)

    const clickNext = () => {
        activeImage === images.length - 1
            ? setActiveImage(0)
            : setActiveImage(activeImage + 1)
    };

    const clickPrev = () => {
        activeImage === 0
            ? setActiveImage(images.length - 1)
            : setActiveImage(activeImage - 1)
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            clickNext()
        }, 20000);
        return () => {
            clearTimeout(timer)
        }
    }, [activeImage])


    return (
        <div className='items-center mx-auto'>
            <div className='flex transition-transform ease-in-out duration-500 rounded-2xl'>
                {images.map((pic, idx) => (
                    <div className={`${idx === activeImage ? 'block transition-all duration-500 ease-in-out' : 'hidden'}`} key={idx}>
                        <Image
                            src={pic.src}
                            alt=""
                            layout="responsive"
                            width={3000}
                            height={500}
                            className="w-11/12 h-96 "
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Slider

