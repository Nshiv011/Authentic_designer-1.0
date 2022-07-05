import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useRouter } from "next/router";
import logo from "../../../public/static/images/logo.jpg";
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the icons you need
import { faUser } from "@fortawesome/free-solid-svg-icons";

const NavTop = () => {
  useEffect(() => {}, []);
  const location = useRouter();
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <div className="container">
        {/* <div className="grid grid-cols-12">
                                        <div className="col-span-2">
<Image src={Logo} width={100} height={100}/>
                                        </div>
                                        <div className="col-span-10">
<ul className="flex text-white">
        <li className="p-8 text-2xl font-bold bg-blue-500">Home</li>
        <li className="p-8 text-2xl font-bold">About</li>
        <li className="p-8 text-2xl font-bold">Project</li>
        <li className="p-8 text-2xl font-bold">Report</li>
        <li className="p-8 text-2xl font-bold">Adoption</li>
        <li className="p-8 text-2xl font-bold">Contact</li>
</ul>
                                        </div>
                                </div> */}

        <Navbar
          collapseOnSelect
          expanded={expanded}
          expand="xl"
          bg="white"
          variant="light"
          fixed="top"
          className="new_header_area flex-column"
        >
          <div className="w-100 d-none d-xl-block"></div>
          <div className="clearfix"></div>

          <Container className="navtop_2">
            <div className="grid grid-cols-12">
              <div className="col-span-1">
                <Link
                  href="/"
                  activeclassname="active"
                  onClick={() =>
                    window.innerWidth < 1200 ? setExpanded(false) : ""
                  }
                >
                  <a className="navbar-brand">
                    <Image src={logo} alt="logo" width={100} height={100} />
                  </a>
                </Link>
              </div>
              <div className="col-span-10 text-center">
                <Navbar.Toggle
                  aria-controls="responsive-navbar-nav"
                  className="ml-2 order-3"
                  onClick={() =>
                    window.innerWidth < 1200
                      ? setExpanded(expanded ? false : "expanded")
                      : ""
                  }
                />

                <div className="headerusd-dropdown position-relative order-xl-3"></div>
                <Navbar.Collapse
                  id="responsive-navbar-nav"
                  className="order-4 order-xl-1"
                >
                  <Nav className="ml-auto text-capitalize">
                    <Link
                      href="/"
                      onClick={() =>
                        window.innerWidth < 1200
                          ? setExpanded(expanded ? false : "expanded")
                          : ""
                      }
                    >
                      <a
                        className={
                          "border-first nav-link " +
                          (location.pathname === "/" ? "active" : "")
                        }
                      >
                        Home
                      </a>
                    </Link>
                    <Link
                      href="/about-us"
                      onClick={() =>
                        window.innerWidth < 1200
                          ? setExpanded(expanded ? false : "expanded")
                          : ""
                      }
                    >
                      <a
                        className={
                          "nav-link " +
                          (location.pathname === "/about-us" ? "active" : "")
                        }
                      >
                        About Us
                      </a>
                    </Link>
                    <Link
                      href="/flights"
                      onClick={() =>
                        window.innerWidth < 1200
                          ? setExpanded(expanded ? false : "expanded")
                          : ""
                      }
                    >
                      <a
                        className={
                          "nav-link " +
                          (location.pathname === "/flights" ||
                          location.pathname === "/flights/[Airline]"
                            ? "active"
                            : "")
                        }
                      >
                        Project
                      </a>
                    </Link>
                    <Link
                      href="/blog"
                      onClick={() =>
                        window.innerWidth < 1200
                          ? setExpanded(expanded ? false : "expanded")
                          : ""
                      }
                    >
                      <a
                        className={
                          "nav-link " +
                          (location.pathname === "/blog" ||
                          location.pathname === "/blog/[blogDetail]"
                            ? "active"
                            : "")
                        }
                      >
                        Report
                      </a>
                    </Link>
                    <Link
                      href="/contact"
                      onClick={() =>
                        window.innerWidth < 1200
                          ? setExpanded(expanded ? false : "expanded")
                          : ""
                      }
                    >
                      <a
                        className={
                          "nav-link " +
                          (location.pathname === "/contact" ? "active" : "")
                        }
                      >
                        Schoolarship
                      </a>
                    </Link>
                    <div
                      className="d-xl-none"
                      onClick={() =>
                        window.innerWidth < 1200
                          ? setExpanded(expanded ? false : "expanded")
                          : ""
                      }
                    ></div>
                  </Nav>
                </Navbar.Collapse>
              </div>
              <div className="col-span-1 py-4 ">
                <button className="border-2 rounded-xl px-4 py-2 text-white hover:bg-red-600 hover:text-black">
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ fontSize: 15, color: "white" }}
                  />
                  &nbsp; Login
                </button>
              </div>
            </div>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NavTop;
