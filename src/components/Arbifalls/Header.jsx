import React from 'react';
import jungle from '../../images/arbifalls.jpeg';
import sun from '../../images/sun.png';

export default function Header() {
    const backgroundStyle = {
        backgroundImage: `url(${jungle})`,
    };

    return (
        <div className="h-screen bg-cover bg-no-repeat bg-center bg-fixed relative" style={backgroundStyle}>
            <img
                className='mx-auto pt-10 my-auto'
                src={sun}
                alt='figure not found'
            />

            <div className="flex flex-col items-center justify-center h-full text-white absolute top-0 left-0 right-0 bottom-0">
                <p className="text-4xl mb-4 font-mono">Discover the</p>
                <h1 className="text-8xl font-bold mb-8">Adventure Travel</h1>
                <p className="text-lg">Your best Adventure Deals with nature</p>

                <button className='text-black text-1xl mt-10 p-6 bg-white hover:bg-yellow-500'>
                    View Adventures
                </button>

            </div>
        </div>
    );
}
