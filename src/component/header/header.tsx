import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/images/logo.png";
import "./header.scss";

const scrollToTop = () => {
  // Scrolls to the top of the page when called
  window.scrollTo(0, 0);
};

function Header() {
  const [
    isScrollValueMoreThanHeaderHeight,
    setIsScrollValueMoreThanHeaderHeight,
  ] = useState(false);

  //here 96(px) - height of current header

  useEffect(() => {
    const handleScroll = () => {
      setIsScrollValueMoreThanHeaderHeight(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header>
      <Navbar
        expand="lg"
        className={
          isScrollValueMoreThanHeaderHeight ? "fixed-top bg-white " : "bg-white"
        }
      >
        <Container>
          <Navbar.Brand as={Link} to="/" onClick={scrollToTop}>
            <img src={logo} alt="" width="150px" height="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link as={Link} to="/" onClick={scrollToTop}>
                About Us
              </Nav.Link>
              <NavDropdown
                title="Products"
                id="collasible-nav-dropdown"
                renderMenuOnMount={true}
              >
                <NavDropdown.Item as={Link} to="/pulses" onClick={scrollToTop}>
                  Pulses & Lentils
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/grains" onClick={scrollToTop}>
                  Grains & Millets
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/nutsandseeds"
                  onClick={scrollToTop}
                >
                  Nuts & Seeds
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/rajmakidneybeans"
                  onClick={scrollToTop}
                >
                  Rajma Kidney Beans
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/masalaandspices"
                  onClick={scrollToTop}
                >
                  Masala & Spices
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/healthyandnutrifoods"
                  onClick={scrollToTop}
                >
                  Healthy & Nutry Foods
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/career" onClick={scrollToTop}>
                Career
              </Nav.Link>
              {/* <Nav.Link as={Link} to="/case-studies" onClick={scrollToTop}>
                Operations
              </Nav.Link>
              <NavDropdown
                title="Services"
                id="collasible-nav-dropdown"
                renderMenuOnMount={true}
              >
                <NavDropdown.Item
                  as={Link}
                  to="/digital-transformation"
                  onClick={scrollToTop}
                >
                  Digital Transformation
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/product-engineering-services"
                  onClick={scrollToTop}
                >
                  Platform Engineering{" "}
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/enterprise-applications"
                  onClick={scrollToTop}
                >
                  Enterprise Applications
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/verification-and-validation"
                  onClick={scrollToTop}
                >
                  Verfication & Validation
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Technology CoEs"
                id="collasible-nav-dropdown"
                renderMenuOnMount={true}
              >
                <NavDropdown.Item
                  as={Link}
                  to="/ai-bi-data"
                  onClick={scrollToTop}
                >
                  AI, BI & Data
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/iot-mobility-devices"
                  onClick={scrollToTop}
                >
                  IOT, Mobility & Devices
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/devops" onClick={scrollToTop}>
                  DevOps
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/cloud" onClick={scrollToTop}>
                  Cloud
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/microsoft-technologies"
                  onClick={scrollToTop}
                >
                  Microsoft Technologies
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/open-source-technologies"
                  onClick={scrollToTop}
                >
                  Open Source Technologies
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/case-studies" onClick={scrollToTop}>
                Case Studies
              </Nav.Link> */}
              {/* <NavDropdown
                title="About Synoverge"
                id="collasible-nav-dropdown"
                renderMenuOnMount={true}
              >
                <NavDropdown.Item
                  as={Link}
                  to="/our-story"
                  onClick={scrollToTop}
                >
                  Our Story
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/leadership-team"
                  onClick={scrollToTop}
                >
                  Leadership Team
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/why-synoverge"
                  onClick={scrollToTop}
                >
                  Why Synoverge
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/life-at-synoverge"
                  onClick={scrollToTop}
                >
                  Life At Synoverge
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/blog" onClick={scrollToTop}>
                  Blog
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/career" onClick={scrollToTop}>
                  Career
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/contact-us"
                  onClick={scrollToTop}
                >
                  Contact Us
                </NavDropdown.Item>
              </NavDropdown> */}
              <Button
                className="btn btn-knowmore"
                as={Link as any}
                to="/contact-us"
                onClick={scrollToTop}
              >
                Contact Us
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
