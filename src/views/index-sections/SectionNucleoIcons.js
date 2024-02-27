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

  Row, 
  Col,
  Button,
  FormGroup,
  Label,
  Input,} from "reactstrap";

// core components

function SectionNucleoIcons() {
  return (
    <>
      <br />    <br />    <br /><br />
      <div class="fondo"


      >
        <br /><br /><br /><br /><br /><br /><br />



        <a href="https://wa.me/50255341529?text=Hola!,%20quisiera%20reservar%20un%20espacio%20para%20evento.">
          <img src={require("assets/img/CONTACTOGT.png")}
          style={{
            width: "100%"
          }}>
        </img>
        </a>
        <br /><br /><br /><br />
        <img src={require("assets/img/CONTACTOMX.png")}
          style={{
            width: "100%"
          }}>
        </img>
        <br /><br />
        <Col md="12">
            <Col
            style={{
              backgroundColor:"white",
              textAlign:"center"
            }}>
            <div 
            >
              
              <p
                style={{
                  color: "#6b184d",
                  fontFamily: "Finland Bold",
                  fontSize: "350%",
                  lineHeight: "normal"
                }}
              >
               ¡SÉ PARTE DE NUESTRO EQUIPO!, ENVÍANOS TU CONTACTO
              </p>
            </div>
            <form>
            <a href="https://wa.me/50255341529?text=Envíanos%20tu%20CV,%20será%20un%20placer%20ponernos%20en%20contacto."><Button
                className="btn-round mr-1"
                type="button"
                color="info"
                width="33.33%"
              >
                <p
                  style={{
                    fontFamily: "Fenwick Bold",
                    fontSize: "19px",
                    color: "white",
                  }}
                >Envíanos tu información por WhatsApp</p>
              </Button>
              
              </a>
            </form>
         
            </Col>
            <br /><br />
            <br />
          </Col>
      </div>
    </>
  );
}

export default SectionNucleoIcons;
