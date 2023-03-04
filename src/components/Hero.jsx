import React from "react";

const Hero = ({ hero: { title, subtitle, btn1, btn2, text, img } }) => {
  return (
    <>
      <div className="border border-gray-500 flex flex-col bg-gradient-to-b from-emerald-200 to-white h-auto w-auto">
        <div className="border border-gray-500 travigo-container grid items-start justify-items-center">
          <div className="border border-gray-500 grid items-center justify-items-center mt-36 mb-16 md:mt-28 md:mb-12">
            <h1 className="border border-gray-500 text-7xl font-bold lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl text-black filter drop-shadow-lg">
              {title}
            </h1>
            <h1 className="border border-gray-500 text-7xl font-bold lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl text-black filter drop-shadow-lg">
              {subtitle}
            </h1>
            <p className="border border-gray-500 text-base my-5 text-center sm:text-sm">
              {text}
            </p>
            <div className="border border-gray-500 flex items-center justify-center gap-11 sm:gap-3 sm:flex-col sm:w-full">
              <button
                type="button"
                className="border border-gray-500 button-emrald"
              >
                {btn1}
              </button>
              <button
                type="button"
                className="border border-gray-500 button-light"
              >
                {btn2}
              </button>
            </div>
          </div>
          <div className="border border-gray-500 flex items-center justify-center mb-11">
            <img
              src={img}
              alt="dashbaord/img"
              className="border border-gray-500 h-[85vh] w-full object-fill lg:h-[75vh] md:h-[57vh] sm:h-[35vh] sm:object-contain drop-shadow-emrald"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
