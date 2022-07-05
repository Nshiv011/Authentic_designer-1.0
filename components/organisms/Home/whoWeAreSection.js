import React, { useEffect } from "react";
import NewsSection from "./NewsSection";
import Image from "next/image";
import we from "../../../public/static/images/who-we-are.jpg";
const whoWeAre = () => {
  useEffect(() => {}, []);

  return (
    <>
      <div className="container">
        <div className="grid grid-cols-8 px-40 py-10">
          <div className="col-span-5 pr-20">
            <h1 className="text-4xl font-bold">Who We are ?</h1>
            <br />
            <p>
              Foundation SHURWAAT is a group of volunteers/working people who
              believe the social and economically development in Uttarakhand
              with a vision that nothing can be achieved with preaching and
              cursing until you lead by yourself with yourself with creative and
              innovative examples.
            </p>
            <p>
              Foundation Shurwaat was registered with Office of Sub-Registrar,
              Delhi on 8th December 2006 as a Public Charitable Trust.
            </p>
          </div>
          <div className="col-span-3 flex content-center">
            <Image src={we} className="rounded"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default whoWeAre;
