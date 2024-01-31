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
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

// core components


const Forms = () => {
  return (
    <>
    <br/><br/>   
      <Row>

          <Col md="5">
            <div>
              <p
                style={{
                  color: "#6b184d",
                  fontFamily: "Finland Bold",
                  fontSize: "350%",
                  lineHeight: "normal"
                }}
              >
                QUIERO QUE ME CONTACTEN PARA REALIZAR UN EVENTO CON USTEDES
              </p>
            </div>
            <br /> <br /> <br/>    <br/>
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
          
     
        <Col md="6">
        <div>
              <p
                style={{
                  color: "#6b184d",
                  fontFamily: "Finland Bold",
                  fontSize: "350%",
                  lineHeight: "normal"
                }}
              >
                COMUNIDAD ADELA
              </p>
            </div>
            <div>
              <p
                style={{
                  color: "#EE83A1",
                  fontFamily: "Fenwick Bold",
                  fontSize: "175%",
                  lineHeight: "normal"
                }}
              >
                @heladosadela
              </p>
            </div>
          <img src={require("assets/img/footer.png")}
            style={{
              width: "100.65%"
            }}>
          </img>
          <br/><br/>
          <div
          style={{
            textAlign:"Center"
          }}><a href="https://www.instagram.com/heladosadela/"><img src={require("assets/img/instagram.png")}
            style={{
              width: "5%"
            }}>
          </img></a>
          <a href="https://www.facebook.com/heladosadela"><img src={require("assets/img/facebook.png")}
            style={{
              width: "5%"
            }}>
          </img></a>
          </div>
          <br/><br/>
        </Col>
  
      </Row>
    </>
  );
};

export default Forms;
