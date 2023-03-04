import React from "react";

// Banner component is a functional component which accepts a prop named 'bannerAPI' which is destructured to extract the properties 'title', 'text', 'btnText', and 'imgSrc'.
const Banner = ({ bannerAPI: { title, text, btnText, imgSrc } }) => {
  // This component returns JSX (JavaScript XML) code, which represents the UI structure.
  return (
    <>
      {/* A div with class name that applies TailwindCSS styles to create a border, responsive layout, rounded corners, and relative position. */}
      <div className="border border-gray-500 relative w-full max-w-5xl ml-auto mr-auto mt-0 mb-3 xl:w-[95vw] rounded-lg">
        {/* A div with class name that applies TailwindCSS styles to create a border, flex layout, and a relative position. */}
        <div className="border border-gray-500 relative flex items-center">
          {/* An image tag which displays the image with the src attribute being set by the 'imgSrc' property passed from the 'bannerAPI' prop. */}
          <img
            src={imgSrc}
            alt="banner/api"
            className="border border-gray-500 h-[35vh] w-full rounded-lg"
          />
        </div>
        {/* A div with class name that applies TailwindCSS styles to create a border, absolute position, flex layout, and a column layout on small screens. */}
        <div className="border border-gray-500 absolute top-24 left-12 w-full flex flex-col items-start md:items-center md:justify-center md:left-0 md:top-14">
          {/* A h1 tag that displays the 'title' property passed from the 'bannerAPI' prop, with a border, text style, and drop-shadow effect. */}
          <h1 className="border border-gray-500 text-3xl font-bold text-slate-900 drop-shadow-lg filter">
            {title}
          </h1>
          {/* A p tag that displays the 'text' property passed from the 'bannerAPI' prop, with a border and text style. */}
          <p className="border border-gray-500 text-base sm:text-sm">{text}</p>
          {/* A button tag that displays the 'btnText' property passed from the 'bannerAPI' prop, with a border, background color, text style, and shadow effect. */}
          <button
            type="button"
            className="border border-gray-500 py-1.5 px-5 bg-gradient-to-b from-gray-900 to-slate-800 text-slate-300 text-sm rounded-full shadow-lg shadow-slate-900 transition-all duration-300 active:scale-110"
          >
            {btnText}
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
