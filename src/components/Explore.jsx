import React from "react";

// Explore component is a functional component which accepts two props, 'title' and 'placesAPI'.
const Explore = ({ title, placesAPI }) => {
  // This component returns JSX (JavaScript XML) code, which represents the UI structure.
  return (
    <>
      {/* A div with class name that applies TailwindCSS styles to create a border, margin, and responsive layout. */}
      <div className="border border-gray-500 relative my-7 md:mt-3">
        {/* A div with class name that applies TailwindCSS styles to create a border and a padding. */}
        <div className="border border-gray-500 travigo-container">
          {/* A div with class name that applies TailwindCSS styles to create a border, flex layout, and a margin. */}
          <div className="border border-gray-500 flex items-center justify-center text-center mb-11 md:mb-7">
            {/* A h1 tag that displays the 'title' property passed from the 'Explore' prop, with a border, text style, and drop-shadow effect. */}
            <h1 className="border border-gray-500 text-5xl lg:text-4xl md:text-3xl sm:text-2xl xsm:text-xl font-bold filter drop-shadow-lg text-slate-900">
              {title}
            </h1>
          </div>
          {/* A div with class name that applies TailwindCSS styles to create a border, grid layout, and a gap between grid items. */}
          <div className="border border-gray-500 grid items-center grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5">
            {/* A JavaScript map function that maps over the 'placesAPI' array and returns JSX for each item. */}
            {placesAPI?.map((val, i) => (
              <div
                key={i}
                className="border border-gray-500 flex items-center gap-5 sm:gap-3 rounded-lg hover:bg-emerald-300 transition-all duration-300 cursor-pointer hover:scale-105"
              >
                {/* A div with class name that applies TailwindCSS styles to create a border, flex layout, and a margin. */}
                <div className="border border-gray-500 flex items-center">
                  {/* An image tag that displays the 'placeImg' property of each item in the 'placesAPI' array, with a border, width, height, and shadow effect. */}
                  <img
                    src={val.placeImg}
                    alt={val.location}
                    className="border border-gray-500 w-20 h-20 sm:w-16 sm:h-16 rounded-lg filter drop-shadow-lg"
                  />
                </div>
                {/* A div with class name that applies TailwindCSS styles to create a border, flex layout, and a column layout for text. */}
                <div className="border border-gray-500 flex items-start flex-col text-slate-900">
                  {/* A h1 tag that displays the 'location' property of each item in the 'placesAPI' array, with a border, font style, and text style. */}
                  <h1 className="border border-gray-500 text-lg sm:text-sm font-bold">
                    {val.location}
                  </h1>
                  {/* A p tag that displays the 'distance' property of each item in the 'placesAPI' array, with a border, font style, and text style. */}
                  <p className="border border-gray-500 font-normal lg:text-sm text-base sm:text-xs">
                    {val.distance}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
