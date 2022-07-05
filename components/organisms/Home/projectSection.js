import React, { useEffect } from "react";
import ProjectCard from "../../molecules/cards/projectCard";

const project = () => {
  useEffect(() => {}, []);

  return (
    <>
      <div className="container">
        <div className="grid grid-cols-8 px-40 py-10">
          <div className="col-span-3 flex content-center">
            <ProjectCard className="rounded" />
          </div>
          <div className="col-span-3 flex content-center">
            <ProjectCard className="rounded" />
          </div>
          <div className="col-span-3 flex content-center">
            <ProjectCard className="rounded" />
          </div>
        </div>
      </div>
    </>
  );
};

export default project;
