import { AppBar, Box, Toolbar } from "@mui/material";
import { Menu, ClearOutlined } from "@mui/icons-material";
import "../styles/navbar.css";
import {Link} from 'react-scroll';
import { useState } from "react";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <AppBar sx={{height:"10vh", display:"flex", justifyContent:"center",}} color="inherit" >
      <Toolbar>
        <nav>
          {/* mobile */}
          <Box className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
            <Box onClick={openNav} className="mobile_navbar_close">
              <ClearOutlined sx={{ fontSize: "2rem" }} />
            </Box>
            <ul className="navbar__mobile_links">
              <li>
                <Link to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={openNav} >
                  Home
                </Link>
              </li>
              <li>
                <Link spy={true} smooth={true} offset={100} duration={500}  onClick={openNav} to="about">
                  About
                </Link>
              </li>
              <li>
                <Link spy={true} smooth={true} offset={100} duration={500}  onClick={openNav} to="projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link spy={true} smooth={true} offset={100} duration={500}  onClick={openNav} to="contact">
                  Contact
                </Link>
              </li>
            </ul>
          </Box>

          {/* desktop */}

          <Box className="navbar">
            <Box className="navbar__logo">
              <Link to="/" spy={true} smooth={true} offset={100} duration={500}  onClick={() => window.scroll(0, 0)}>
                Shankar RJ.dev
              </Link>
            </Box>
            <ul className="navbar__links">
              <li>
                <Link spy={true} smooth={true} offset={100} duration={500}  className="home-link" to="home">
                  Home
                </Link>
              </li>
              <li>
                {" "}
                <Link spy={true} smooth={true} offset={100} duration={500}  className="about-link" to="about">
                  About
                </Link>
              </li>
              <li>
                {" "}
                <Link spy={true} smooth={true} offset={100} duration={500}  className="projects-link" to="projects">
                  Projects
                </Link>
              </li>
              <li>
                {" "}
                <Link  spy={true} smooth={true} offset={100} duration={500} className="contact-link" to="contact">
                  Contact
                </Link>
              </li>
            </ul>

            {/* mobile */}

            <Box className="mobile-hamb" onClick={openNav}>
              <Menu sx={{ fontSize: "2rem" }} />
            </Box>
          </Box>
        </nav>
      </Toolbar>
    </AppBar>
  );
}
