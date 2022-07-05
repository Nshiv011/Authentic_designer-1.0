import React, { useEffect } from "react";
import Image from "next/image";
import we from "../../../public/static/images/what-we-do.jpg";

const projectCard = () => {
  useEffect(() => {}, []);

  return (
    <>
      <div className="container">
        <div className="card-wrapper block rounded p-4">
          <div className="card-image">
            <Image src={we} className="rounded" />
          </div>
          <div className="card-title text-center font-xl"> Gramin Seva Mission</div>
          <div className="card-desc"></div>
        </div>
      </div>
    </>
  );
};

export default projectCard;
