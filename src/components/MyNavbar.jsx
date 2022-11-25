import React from "react";
import { Nav, Navbar, Image } from "react-bootstrap";
import logo from "../assets/netflix_logo.png";
import avatar from "../assets/avatar.png";
export default function MyNavbar() {
  return (
    <div className="navigation">
      <Navbar className="pt-1" expand="lg">
        <Navbar.Brand href="#">
          <Image
            className="mt-1"
            src={logo}
            style={{ maxWidth: "5rem" }}
          ></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link style={{ color: "#929292" }} href="#">
              Home
            </Nav.Link>
            <Nav.Link style={{ color: "#929292" }} href="#">
              Tv shows
            </Nav.Link>
            <Nav.Link style={{ color: "#929292" }} href="#">
              Movies
            </Nav.Link>
            <Nav.Link style={{ color: "#929292" }} href="#">
              Recently Added
            </Nav.Link>
            <Nav.Link style={{ color: "#929292" }} href="#">
              My List
            </Nav.Link>
            <Nav.Link style={{ color: "#929292" }} href="#">
              Back Office
            </Nav.Link>
          </Nav>
          <Nav className="d-flex end">
            <Navbar>
              <Nav.Item>
                <Nav.Link
                  className="mx-1"
                  style={{ color: "#929292" }}
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-search icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className="mx-1"
                  style={{ color: "#929292" }}
                  href="#"
                >
                  KIDS
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className="mx-1"
                  style={{ color: "#929292" }}
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-bell-fill icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                  </svg>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="mx-1">
                  <Image src={avatar} style={{ maxWidth: "2rem" }}></Image>
                </Nav.Link>
              </Nav.Item>
            </Navbar>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
