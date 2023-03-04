import React from "react";

// Advertise component is a functional component which accepts a prop named 'brands'
const Advertise = ({ brands }) => {
  // This component returns JSX (JavaScript XML) code, which represents the UI structure.
  return (
    <>
      {/* A div with class name that applies TailwindCSS styles to create a border with a gray color, margin, width, responsive layout, and scrollable content. */}
      <div className="border border-gray-500 my-16 lg:my-7 w-9/12 lg:w-[85vw] m-auto flex items-center justify-between xl:gap-7 overflow-x-scroll scroll-smooth scroll-hidden">
        {/* A map function is used to loop through the 'brands' array and display the image of each brand, with styles that define its dimensions, border, object-fit, and hover effects. */}
        {brands?.map((val, i) => (
          <img
            key={i}
            src={val.iconSrc}
            alt="brands/icon"
            className="border border-gray-500 w-44 h-auto object-fill xl:w-38 lg:w-32 hover:scale-105 transition-all duration-300 cursor-pointer filter drop-shadow-md"
          />
        ))}
      </div>
    </>
  );
};

// Exporting Advertise component as default.
export default Advertise;
