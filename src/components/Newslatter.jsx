import React from 'react'

const Newslatter = () => {
  return (
   <>
      <div className='p-5 bg-white/60 ring-1 ring-emerald-200 shadow-md shadow-emerald-300 rounded-lg max-w-5xl w-full ml-auto mr-auto mt-0 xl:w-[95vw] relative top-12'>
        <div className='flex items-center justify-between lg:flex-col lg:gap-7'>
            <div className='grid items-center sm:text-center'>
                <h1 className='text-4xl md:text-3xl sm:text-2xl filter drop-shadow-lg font-bold text-slate-900
                '>Get In Touch With Us</h1>
                <p className='text-base sm:text-sm xsm:text-xs font-medium'>Questions and Feedback? We would love to hear for you.</p>
            </div>
            <form className='flex items-center justify-center relative'>
                <input
                    placeholder='Email Address'
                    name='email'
                    type={'email'}
                    className="py-2 px-5 ring-1 ring-slate-300 flex items-center shadow-md shadow-slate-200 w-96 lg:w-[85vw] text-base rounded-full relative placeholder:text-slate-500 focus:outline-emerald-500"
                />
                <button
                    type='button'
                    className='text-base px-5 py-2 text-white bg-gradient-to-b from-emerald-500 to-green-500 rounded-r-full transition-all duration-200 active:scale-90 absolute right-0 shadow-lg shadow-emerald-400'
                >
                    Submit
                </button>
            </form>
        </div>
      </div>
   </>
  )
}

export default Newslatter