import React from "react";
import Link from "next/link";
// import adx from "../../Asset/Image/adx.png"
// import payment from "../../Asset/Image/payment.png"

const footer = () => {
  return (
    <div className=" bg-white border-t-2 ">
      <div className="container">
        <div className="lg:grid lg:grid-cols-3 grid grid-cols-1 lg:px-40 xl:px-40 py-14 mb-10 px-6">
          <div className="">
            <h1 className=" text-xl font-semibold text-left text-gray-800">
              Shurwaat Foundation
            </h1>
            <br />
            <p className="text-sm text-gray-500">
              Foundation SHURWAAT is a group of volunteers/working people who
              believe the social and economically development in Uttarakhand
              with a vision that nothing can be achieved with preaching and
              cursing until you lead by yourself with yourself with creative and
              innovative examples.
            </p>
            <br />
            <span className="px-3 shadow-xl py-1">
              <i className="fa fa-facebook text-blue-500 " />
            </span>
            <span className="shadow-xl px-2 py-1">
              <i className="fa fa-youtube-play fa-fw text-red-500 " />
            </span>
            <span className="shadow-xl px-2 py-1">
              <i className="fa fa-linkedin fa-fw text-blue-600 " />
            </span>
            <span className="shadow-xl px-2 py-1">
              <i className="fa fa-twitter fa-fw text-blue-400 " />
            </span>
          </div>

          <div className=" hidden lg:block lg:px-20 px-12 mt-2">
            <h3 className="text-xl font-semibold text-gray-800">
              {" "}
              <i class="fa fa-info fa-fw" /> Important Links
            </h3>
            <div className="px-1 py-3 text-gray-500 text-sm ">
              {/* <Link href='/about' className="no-underline text-blue-600" ><a>   <p> <i className="fa fa-chevron-right text-black text-black fa-fw" /> About Us</p></a></Link>
                                                        <Link className="no-underline text-blue-600" href='/'> <a> <p> <i className="fa fa-chevron-right text-black fa-fw" />Contact Us</p></a> </Link>
                                                        <Link className="no-underline text-blue-600" href='/'> <a> <p> <i className="fa fa-chevron-right text-black fa-fw" />Become a partner</p></a> </Link>
                                                        <Link className="no-underline text-blue-600" href='/'> <a> <p> <i className="fa fa-chevron-right text-black fa-fw" />Posting Rules</p></a> </Link>
                                                        <Link className="no-underline text-blue-600" href='/'> <a> <p> <i className="fa fa-chevron-right text-black fa-fw" />Market Place</p></a> </Link>
                                                        <Link className="no-underline text-blue-600" href='/'> <a> <p> <i className="fa fa-chevron-right text-black fa-fw" />Dealer</p></a> </Link> */}
              <Link
                className="no-underline text-blue-600 font-bold font-sizeSS"
                href="/"
              >
                About
              </Link>
              <br />
              <Link href="/">Contact Us</Link>
              <br />
              <Link href="/">Project</Link>
              <br />
              <Link href="/">Hello</Link>
              <br />
            </div>
          </div>

          <div className="hidden lg:block lg:px-20 px-12 mt-2">
            <h3 className="text-xl font-semibold text-gray-800">
              {" "}
              <i class="fa fa-search fa-fw" /> Quick Links
            </h3>
            <div className="px-2 py-3 text-gray-500 text-sm">
              {/* <Link className="no-underline text-blue-600" href='/'> <a><p> <i className="fa fa-chevron-right text-black fa-fw" />Post Ad</p></a> </Link>
                                                        <Link className="no-underline text-blue-600" href='/'> <a>  <p> <i className="fa fa-chevron-right text-black fa-fw" />Our Plans</p></a> </Link>
                                                        <Link className="no-underline text-blue-600" href='/'> <a> <p> <i className="fa fa-chevron-right text-black fa-fw" />Infringement Policy</p></a> </Link>
                                                        <Link className="no-underline text-blue-600" href='/'> <a> <p> <i className="fa fa-chevron-right text-black fa-fw" />Privacy Policy</p></a> </Link> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="hidden lg:block lg:grid lg:grid-cols-4 grid grid-cols-1 lg:px-40 xl:px-40 py-10">
          <div>
            <h3 className="text-lg text-gray-800 font-bold">
              Contact By Phone
            </h3>
            <br />
            <div className="grid grid-cols-10">
              <div className="col-span-2 justify-center flex items-center">
                <i className="fa fa-phone text-4xl text-green-500" />
              </div>
              <div className="col-span-8">
                <Link href="/" className="text-blue-500 font-bold">
                  +91-9412918134
                </Link>
                <br />

                <span className="text-sm text-gray-400 ">
                  Booking time: 0800 - 2000 hrs
                </span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg text-gray-800 font-bold">
              Give your Feedback
            </h3>
            <br />
            <div className="grid grid-cols-10">
              <div className="col-span-2 justify-center flex items-center">
                <i className="fa fa-envelope text-4xl text-red-600" />
              </div>
              <div className="col-span-8">
                <span className="text-sm text-gray-400 ">Help us improve!</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg text-gray-800 font-bold">
              Services and Support
            </h3>
            <br />
            <div className="grid grid-cols-10">
              <div className="col-span-2 justify-center flex items-center">
                <i className="fa fa-headphones text-blue-500 text-4xl" />
              </div>
              <div className="col-span-8">
                <a href="#" className="text-blue-500 font-bold">
                  Support Centre
                </a>
                <br />
                <span className="text-sm text-gray-400 ">
                  29, Tagore Villa, Dehradun UK
                </span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg text-gray-800 font-bold"> Partners</h3>
          </div>
        </div>
      </div>

      {/* fourth */}
      <div className="lg:block hidden xl:grid xl:grid-cols-3 bg-black text-white px-40 py-4 lg:px-48 xl:px-48">
        <div>
          <p> 100+ Students | 20+ Schools </p>
        </div>
        <div></div>
        <div className="float-right">
          <p> © 2022 Shurwaat Foundation</p>
        </div>
      </div>
    </div>
  );
};

export default footer;
