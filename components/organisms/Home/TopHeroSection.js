import React, { useEffect } from "react";
import NavTop from "../../atoms/Header/Nav";

const TopHeroSection = () => {
  useEffect(() => {}, []);

  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1">
          <div className="bg-TopHeroSection w-full">
            <NavTop />
            <div className="justify-center flex Title-TopHeroSection items-center ">
              <h1 className="text-gray-100 text-6xl text-center">
                <b className="text-8xl">F</b>oundation{" "}
                <b className="text-8xl">S</b>huruwaat <br />
                <p className="text-xl mt-4">
                  "Adopt a Student's education for academic session 2021-22"
                </p>
              </h1>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeroSection;
