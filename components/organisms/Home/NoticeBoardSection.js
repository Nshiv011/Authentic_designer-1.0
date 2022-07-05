import React, { useEffect } from "react";
import NewsSection from "./NewsSection";

const Notice = () => {
  useEffect(() => {}, []);

  return (
    <>
      <div className="container">
        <div className="grid grid-cols-8 px-40 py-10 gap-6">
          <div className="col-span-2">
            <NewsSection />
          </div>
          <div className="col-span-6 px-10">
            <h1 className="text-4xl font-bold">Notice Board</h1>
            <br />

            <li>
              First and Second Phase of Gramin Sewa Mission 2021 was completed
              by distributing emergency equipment viz. Oximeter, Digital
              thermometer, Sergical Mask, Cloth Mask, N-95 Mask, Vaporiser,
              medicine kit etc. to fight with COVID-19 pandemic in 80 gram sabha
              of Rikhnikhal Block, Pauri Garhwal and Police Station Rikhnikhal.
              The above items alongwith Oxygen Concentrator was also given to
              Community Health Centre, Rikhnikhal
            </li>
            <li>Core Committee meeting held on 27.6.2021.</li>
            <br />
            <li>
              Foundation SHURWAAT membership drive started. For Membership Form
              please click here.
            </li>
            <li>
              2021-22 Scholars adoption process started. For List please click
              here.
            </li>
            <br />
            <li>Join SHURWAAT FOUNDATION as member please click here. </li>
            <li>Core Committee meeting held on 27.6.2021.</li>
            {/* <li>First and Second Phase of Gramin Sewa Mission 2021 was completed by distributing emergency equipment viz. Oximeter, Digital thermometer, Sergical Mask, Cloth Mask, N-95 Mask, Vaporiser, medicine kit etc. to fight with COVID-19 pandemic in 80 gram sabha of Rikhnikhal Block, Pauri Garhwal and Police Station Rikhnikhal. The above items alongwith Oxygen Concentrator was also given to Community Health Centre, Rikhnikhal</li> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Notice;
