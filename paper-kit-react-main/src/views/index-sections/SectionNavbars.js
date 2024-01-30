/*!

=========================================================
* Paper Kit React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

function SectionNavbars() {
  return (
    <>
    <br/>
      <div >
       
          
         <img src={require("assets/img/BLOQUE4.jpg")}
        style={{
          width: "100.65%"
        }}>
         </img>
          
          
       
      </div>
      <Container>
      <div 
      style={{
        display:"flex",
      justifyContent:"Center"
      }}>
          <h1
            style={{
              color: "#6b184d",
              fontFamily: "Finland",
         
              fontSize:"400%"

            }}>
            ADELA, UNA EXPERIENCIA INOLVIDABLE PARA COMPARTIR CON TODOS
          </h1>
        </div>

</Container>
    </>
  );
}

export default SectionNavbars;
