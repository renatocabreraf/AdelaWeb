
import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

import logo from '/Users/renatocabrerafigueroa/Documents/GitHub/AdelaWeb/paper-kit-react-main/src/assets/img/LogoAdela.png';
import lupa from '/Users/renatocabrerafigueroa/Documents/GitHub/AdelaWeb/paper-kit-react-main/src/assets/img/Lupa.png';
import persona from '/Users/renatocabrerafigueroa/Documents/GitHub/AdelaWeb/paper-kit-react-main/src/assets/img/Persona.png';

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/index"
            target="_blank"
            title="¡Bienvenido a Helados Adela!"
          >
            <img src={logo}
            style={{
              width:"75px"
            }}></img>
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="/"
                target="_blank"
                title="Todo sobre Helados Adela"
                
              >
               
                <p
                style={{
                  color:"#6b184d",
                  fontSize:"19pt",
                  fontFamily:"Apparat-Bold"
                }}>Nosotros</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="/"
                target="_blank"
                title="¡Ubica tu tienda más cercana!"
              >
                
                <p
                style={{
                  color:"#6b184d",
                  fontSize:"19pt",
                  fontFamily:"Apparat-Bold"
                }}>Tiendas</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="/"
                target="_blank"
                title="Nuestros Servicios"
              >
               
                <p
                style={{
                  color:"#6b184d",
                  fontSize:"19pt",
                  fontFamily:"Apparat-Bold"
                }}>Servicios</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="/"
                target="_blank"
                title="Contacta con Helados Adela"
              >

                <p
                style={{
                  color:"#6b184d",
                  fontSize:"19pt",
                  fontFamily:"Apparat-Bold"
                }}>Contáctenos</p>
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="/"
                target="_blank"
                title="Buscar"
              >

                <p><img src={lupa}
                style={{
                  width:"35px"
                }}></img></p>
              </NavLink>
            </NavItem>
           
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="/"
                target="_blank"
                title="Buscar"
              >

                <p
                ><img src={persona}
                style={{
                  width:"35px"
                }}></img></p>
              </NavLink>
            </NavItem>

          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
