import React from "react";

const Memory = ({ memory: { title, text, subtitle, img, experience } }) => {
  // console.log(memory)
  return (
    <>
      <div className="border border-gray-500 relative my-16 md:mb-7">
        <div className="border border-gray-500 travigo-container flex items-center justify-between gap-16 xl:gap-9 lg:flex-col-reverse">
          <div className="border border-gray-500 flex items-center justify-start lg:justify-center w-full max-w-md">
            <img
              src={img}
              alt="memory/img"
              className="border border-gray-500 w-auto h-[55vh] object-fill"
            />
          </div>
          <div className="border border-gray-500 grid items-center w-full max-w-2xl lg:text-center">
            <h1 className="border border-gray-500 text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter drop-shadow-lg">
              {title}
            </h1>
            <h1 className="border border-gray-500 text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter drop-shadow-lg">
              {subtitle}
            </h1>
            <p className="border border-gray-500 text-base my-5 sm:text-sm">
              {text}
            </p>
            <div className="border border-gray-500 grid items-center text-center grid-cols-3 gap-7 xl:gap-3">
              {experience?.map((val, i) => (
                <div
                  key={i}
                  className="border border-gray-500 bg-gradient-to-b from-emerald-300 to-green-300 shadow-lg shadow-emerald-200 flex items-center justify-center flex-col py-7 px-5 xl:p-5 rounded-lg text-slate-900 filter cursor-pointer hover:scale-105 transition-all duration-400"
                >
                  <h1 className="border border-gray-500 text-3xl xl:text-2xl sm:text-xl font-bold drop-shadow-lg">
                    {val.number}
                  </h1>
                  <p className="border border-gray-500 text-lg xl:text-base sm:text-sm xsm:text-xs font-medium">
                    {val.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Memory;
