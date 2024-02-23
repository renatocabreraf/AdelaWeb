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
import { useState } from "react";
import axios from "axios";

// reactstrap components
import { 

  Row, 
  Col,
  Button,
  FormGroup,
  Label,
  Input,} from "reactstrap";


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
        <br /><br /><br /><br />
        <Col md="12">
            <Col
            style={{
              backgroundColor:"white"
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
              <FormGroup>
                <Label for="exampleName"
                  style={{
                    color: "#6b184d",
                    fontFamily: "Fenwick",
                    fontSize: "175%",
                    textAlign: "justify"
                  }}>Nombre Completo</Label>
                 
                <Input
                  type="name"
                  name="email"
                  id="exampleEmail"
                  placeholder="Ingresa tu nombre aquí"
                />

              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail"
                  style={{
                    color: "#6b184d",
                    fontFamily: "Fenwick",
                    fontSize: "175%",
                    textAlign: "justify"
                  }}>Correo Electrónico</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Ingresa tu Email aquí"
                />

              </FormGroup>
              <FormGroup>
                <Label for="examplePhone"
                  style={{
                    color: "#6b184d",
                    fontFamily: "Fenwick",
                    fontSize: "175%",
                    textAlign: "justify"
                  }}>Teléfono</Label>
                <Input
                  type="phone"
                  name="phone"
                  id="examplePhone"
                  placeholder="Ingresa tu número aquí"

                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePhone"
                  style={{
                    color: "#6b184d",
                    fontFamily: "Fenwick",
                    fontSize: "175%",
                    textAlign: "justify"
                  }}>¿Cómo te enteraste de Helados Adela?</Label>
                <Input
                  type="paragraph"
                  name="paragraph"
                  id="exampleParagraph"
                  placeholder=""
                />
              </FormGroup>
              <br /> <br />
              <Button
                className="btn-round mr-1"
                type="button"
                color="info"
                width="33.33%"
              >
                <p
                  style={{
                    fontFamily: "Fenwick Bold",
                    fontSize: "20px",
                    color: "white",
                  }}
                >Enviar</p>
              </Button>
            </form>
            <br />

            </Col>
          </Col>
      </div>
    </>
  );
}

export default SectionNucleoIcons;
