import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

const NewsSection = () => {
  useEffect(() => {}, []);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1">
          <div>
            <div className="grid grid-cols-1 bg-white ">
              <div className=" ">
                <div className="px-4 py-2 bg-green-500 ">
                  <h5>
                    {/* <span className="text-green-500 font-bold">5 </span>
              <i className="fa fa-star text-yellow-500"></i>
              <i className="fa fa-star text-yellow-500"></i>
              <i className="fa fa-star text-yellow-500"></i>
              <i className="fa fa-star text-yellow-500"></i>
              <i className="fa fa-star text-yellow-500"></i>
              <span className="text-sm font-bold"> (1 Reviews)</span> */}
                    News and Updates
                  </h5>
                </div>

                <div className="px-4 h-96 border-2 border-gray-200 shadow-xl">
                  <marquee
                    direction="up"
                    scrolldelay="200"
                    className="h-96"
                    behavior="scroll"
                    onmouseover="this.setAttribute('scrollamount',0);"
                    onmouseout="this.setAttribute('scrollamount',5);"
                  >
                    <div>
                      <h4 className="text-lg font-bold mb-0">Shalu</h4>
                      <div class="geek2">
                        <i className="fa fa-star text-yellow-500"></i>
                        <i className="fa fa-star text-yellow-500"></i>
                        <i className="fa fa-star text-yellow-500"></i>
                        <i className="fa fa-star text-yellow-500"></i>
                        <i className="fa fa-star text-yellow-500"></i>
                        <span className="text-sm font-semibold">
                          {" "}
                          9 months ago
                        </span>
                        <p className="text-sm">
                          A well-known astrologer with over 25 years of
                          experience.
                        </p>
                        <hr />
                      </div>
                    </div>
                    <br />
                    <div>
                      <h4 className="text-lg font-bold mb-0">Shalu</h4>
                      <div class="geek2">
                        <i className="fa fa-star text-yellow-500"></i>
                        <i className="fa fa-star text-yellow-500"></i>
                        <i className="fa fa-star text-yellow-500"></i>
                        <i className="fa fa-star text-yellow-500"></i>
                        <i className="fa fa-star text-yellow-500"></i>
                        <span className="text-sm font-semibold">
                          {" "}
                          9 months ago
                        </span>
                        <p className="text-sm">
                          A well-known astrologer with over 25 years of
                          experience.
                        </p>
                        <hr />
                      </div>
                    </div>
                    <br />
                    <div>
                      <h4 className="text-lg font-bold mb-0">Shalu</h4>
                      <div class="geek2">
                        <i className="fa fa-star text-yellow-500"></i>
                        <i className="fa fa-star text-yellow-500"></i>
                        <i className="fa fa-star text-yellow-500"></i>
                        <i className="fa fa-star text-yellow-500"></i>
                        <i className="fa fa-star text-yellow-500"></i>
                        <span className="text-sm font-semibold">
                          {" "}
                          9 months ago
                        </span>
                        <p className="text-sm">
                          A well-known astrologer with over 25 years of
                          experience.
                        </p>
                        <hr />
                      </div>
                    </div>
                    <br />

                    <div>
                      <h4 className="text-lg font-bold mb-0">Shalu</h4>
                      <div class="geek2">
                        <i className="fa fa-star text-yellow-500"></i>
                        <i className="fa fa-star text-yellow-500"></i>
                        <i className="fa fa-star text-yellow-500"></i>
                        <i className="fa fa-star text-yellow-500"></i>
                        <i className="fa fa-star text-yellow-500"></i>
                        <span className="text-sm font-semibold">
                          {" "}
                          9 months ago
                        </span>
                        <p className="text-sm">
                          A well-known astrologer with over 25 years of
                          experience.
                        </p>
                        <hr />
                      </div>
                    </div>

                    <br />

                    <div>
                      <h4 className="text-lg font-bold mb-0">Shalu</h4>
                      <div class="geek2">
                        <i className="fa fa-star text-yellow-500"></i>
                        <i className="fa fa-star text-yellow-500"></i>
                        <i className="fa fa-star text-yellow-500"></i>
                        <i className="fa fa-star text-yellow-500"></i>
                        <i className="fa fa-star text-yellow-500"></i>
                        <span className="text-sm font-semibold">
                          {" "}
                          9 months ago
                        </span>
                        <p className="text-sm">
                          A well-known astrologer with over 25 years of
                          experience.
                        </p>
                        <hr />
                      </div>
                    </div>
                    <br />

                    <div>
                      <h4 className="text-lg font-bold mb-0">Shalu</h4>
                      <div class="geek2">
                        <i className="fa fa-star text-yellow-500"></i>
                        <i className="fa fa-star text-yellow-500"></i>
                        <i className="fa fa-star text-yellow-500"></i>
                        <i className="fa fa-star text-yellow-500"></i>
                        <i className="fa fa-star text-yellow-500"></i>
                        <span className="text-sm font-semibold">
                          {" "}
                          9 months ago
                        </span>
                        <p className="text-sm">
                          A well-known astrologer with over 25 years of
                          experience.
                        </p>
                        <hr />
                      </div>
                    </div>
                    <br />

                    <div>
                      <h4 className="text-lg font-bold mb-0">Shalu</h4>
                      <div class="geek2">
                        <i className="fa fa-star text-yellow-500"></i>
                        <i className="fa fa-star text-yellow-500"></i>
                        <i className="fa fa-star text-yellow-500"></i>
                        <i className="fa fa-star text-yellow-500"></i>
                        <i className="fa fa-star text-yellow-500"></i>
                        <span className="text-sm font-semibold">
                          {" "}
                          9 months ago
                        </span>
                        <p className="text-sm">
                          A well-known astrologer with over 25 years of
                          experience.
                        </p>
                        <hr />
                      </div>
                    </div>
                    <br />
                  </marquee>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsSection;
