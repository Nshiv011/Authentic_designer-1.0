import React, { useEffect } from "react";

const Video = () => {
  useEffect(() => {}, []);

  return (
    <>
      <div className="container">
        <div className="grid grid-cols-3 px-40 py-10 gap-8">
          <div className="rounded">
          <iframe width="100%" height="300" src="https://www.youtube.com/embed/41SnUsvkyNg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="rounded">
          <iframe width="100%" height="300" src="https://www.youtube.com/embed/qzdyPk8wvZI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className="rounded">
          <iframe width="100%" height="300" src="https://www.youtube.com/embed/qzdyPk8wvZI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
