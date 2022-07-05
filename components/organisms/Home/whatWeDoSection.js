import React, { useEffect } from "react";
import NewsSection from "./NewsSection";
import Image from "next/image";
import we from "../../../public/static/images/what-we-do.jpg";
const whatWeDo = () => {
  useEffect(() => {}, []);

  return (
    <>
      <div className="container">
        <div className="grid grid-cols-8 px-40 py-10">
          <div className="col-span-3 flex content-center">
            <Image src={we} className="rounded"/>
          </div>
          <div className="col-span-5 pl-20">
            <h1 className="text-4xl font-bold text-right">What We Do ?</h1>
            <br />
            <p p className="text-right">
              spreading Awareness and helping thousands of students, schools and
              colleges for practical education and career guidance. • No talent
              should die because of finance reason Awareness and help Generating
              local business opportunities and profitable farming options for
              farmers in rurak areas.
            </p>
            <p className="text-right">
              Promotion of uttaranchal unknown places for Tourism and giving
              benefits to locals communities.Promotion of uttaranchali culture
              among locals and non-locals. Gathering all Uttaranchal admiring
              guys under one roof to work for uttaranchal Support local people
              in fighting against any hurdle in Uttaranchal development
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default whatWeDo;
