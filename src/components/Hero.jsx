import React from 'react';
import { Link } from 'react-router-dom';

const Hero = ({ hero: { title, subtitle, btn1, btn2, text, img } }) => {
  return (
    <>
      <div className='flex flex-col bg-gradient-to-b from-emerald-200 to-white h-auto w-auto'>
        <div className='travigo-container grid items-start justify-items-center'>
          <div className='grid items-center justify-items-center mt-36 mb-16 md:mt-28 md:mb-12'>
            <h1 className='text-7xl font-bold lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl text-black filter drop-shadow-lg'>{title}</h1>
            <h1 className='text-7xl font-bold lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl text-black filter drop-shadow-lg'>{subtitle}</h1>
            <p className='text-base my-5 text-center sm:text-sm'>{text}</p>
            <div className='flex items-center justify-center gap-11 sm:gap-3 sm:flex-col sm:w-full'>
              <button type='button' className='button-emrald'>{btn1}</button>
              <button type='button' className='button-light'>{btn2}</button>
            </div>
          </div>
          <div className='flex flex-row items-center justify-center mb-11'>
          <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Places of Interest</h2>
      <div className="flex flex-col items-start">
      <button className="bg-black text-white px-4 py-2 rounded w-full mb-2 hover:bg-green-500 hover:text-black cursor-pointer">
          Kapu
        </button>
        <button className="bg-black text-white px-4 py-2 rounded w-full mb-2 hover:bg-green-500 hover:text-black cursor-pointer">
          Hanging Bridge
        </button>
        <button className="bg-black text-white px-4 py-2 rounded w-full mb-2 hover:bg-green-500 hover:text-black cursor-pointer">
          Malpe
        </button>

       <Link to='/jungle'>
       <button className="bg-black text-white px-4 py-2 rounded w-full mb-2 hover:bg-green-500 hover:text-black cursor-pointer">
          Arbi falls
        </button>
       </Link>

        <button className="bg-black text-white px-4 py-2 rounded w-full mb-2 hover:bg-green-500 hover:text-black cursor-pointer">
          End Point
        </button>

        <button className="bg-black text-white px-4 py-2 rounded w-full mb-2 hover:bg-green-500 hover:text-black cursor-pointer">
          Venugopal Temple
        </button>

        <button className="bg-black text-white px-4 py-2 rounded w-full mb-2 hover:bg-green-500 hover:text-black cursor-pointer">
          Ottinene
        </button>

        <button className="bg-black text-white px-4 py-2 rounded w-full mb-2">
          Ananteshwar Temple
        </button>

        <button className="bg-black text-white px-4 py-2 rounded w-full mb-2">
          Temple
        </button>

        <button className="bg-black text-white px-4 py-2 rounded w-full mb-2">
          Temple
        </button>
      </div>
    </div>
            <img src={img} alt='dashbaord/img' className='h-[85vh] w-full object-fill lg:h-[75vh] md:h-[57vh] sm:h-[35vh] sm:object-contain drop-shadow-emrald' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero