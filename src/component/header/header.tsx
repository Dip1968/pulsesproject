import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/images/logo.png";
import "./header.scss";

const scrollToSection = (sectionClass: string) => {
  setTimeout(() => {
    const section = document.querySelector(sectionClass);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, 100);
};

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsNavOpen(false);
    setIsDropdownOpen(false);
  }, [location.pathname]);

  const handleNavLinkClick = () => {
    setIsNavOpen(false);
    setIsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAboutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (location.pathname === "/") {
      scrollToSection(".services-sec");
    } else {
      navigate("/");
      setTimeout(() => scrollToSection(".services-sec"), 200);
    }
    handleNavLinkClick();
  };

  return (
    <header>
      <Navbar
        expand="lg"
        className={`bg-white ${isScrolled ? "fixed-top shadow-sm" : ""}`}
        expanded={isNavOpen}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" onClick={handleNavLinkClick}>
            <img src={logo} alt="" width="150px" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? (
              <span>&#10006;</span>
            ) : (
              <span className="navbar-toggler-icon" />
            )}
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="/" onClick={handleAboutClick}>
                About Us
              </Nav.Link>
              <NavDropdown
                title="Products"
                id="collasible-nav-dropdown"
                show={isDropdownOpen}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <NavDropdown.Item
                  as={Link}
                  to="/pulses"
                  onClick={handleNavLinkClick}
                >
                  Pulses & Lentils
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/grains"
                  onClick={handleNavLinkClick}
                >
                  Grains & Millets
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/nutsandseeds"
                  onClick={handleNavLinkClick}
                >
                  Nuts & Seeds
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/rajmakidneybeans"
                  onClick={handleNavLinkClick}
                >
                  Rajma Kidney Beans
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/masalaandspices"
                  onClick={handleNavLinkClick}
                >
                  Masala & Spices
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/healthyandnutrifoods"
                  onClick={handleNavLinkClick}
                >
                  Healthy & Nutry Foods
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/career" onClick={handleNavLinkClick}>
                Career
              </Nav.Link>
              <Button
                className="btn btn-knowmore"
                as={Link as any}
                to="/contact-us"
                onClick={handleNavLinkClick}
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
