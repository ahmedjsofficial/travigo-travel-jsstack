import React from "react";

const Footer = ({ footerAPI: { titles, links, sociallinks } }) => {
  return (
    <>
      <footer className="border border-gray-500 bg-gradient-to-b from-emerald-400 to-green-300 pt-24 pb-7">
        <div className="border border-gray-500 grid items-center grid-cols-3 justify-items-center">
          {titles?.map((val, i) => (
            <div
              key={i}
              className="border border-gray-500 grid items-center justify-items-center"
            >
              <h1 className="border border-gray-500 text-xl lg:text-base uppercase font-semibold">
                {val.title}
              </h1>
            </div>
          ))}
          {links?.map((list, i) => (
            <ul
              key={i}
              className="border border-gray-500 grid items-center justify-items-center gap-1"
            >
              {list?.map((val, i) => (
                <li
                  key={i}
                  className="border border-gray-500 font-mono text-sm sm:text-xs"
                >
                  {val.link}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="border border-gray-500 w-7/12 lg:w-[95vw] m-auto mt-9">
          <div className="border border-gray-500 h-[0.1vh] bg-black/30 my-7 md:my-5"></div>
          <div className="border border-gray-500 flex items-center justify-between px-7 md:px-0 md:gap-5 md:flex-col-reverse">
            <p className="border border-gray-500 text-sm md:text-center">
              Copyright<sup className="text-base font-bold">&copy;</sup> All
              Reserved Rights 2022{" "}
              <span className="border border-gray-500 font-semibold">
                JSSTACK DEVELOPERS
              </span>
            </p>
            <div className="border border-gray-500 flex items-center gap-3">
              {sociallinks?.map((val, i) => (
                <img
                  key={i}
                  src={val.icon}
                  alt="social/icons"
                  className="border border-gray-500 w-5 h-5"
                />
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
