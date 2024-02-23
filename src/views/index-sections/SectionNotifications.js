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




function Forms  () {
  const sendContact = (nombre,email,telefono) =>{
    axios.post("https://8rirjk6k6j.execute-api.us-east-2.amazonaws.com/version1",
    {
      "nombre_completo": nombre,
      "correo_electronico": email,
      "telefono": telefono
    },
    {
      "Access-Control-Allow-Origin": "*",
    }
    )
    }
  const[nombre,setnombre]=useState("")
  const handlesetname = (value) => setnombre (value)
  const[email,setemail]=useState("")
  const handlesetemail = (value) => setemail (value)
  const[telefono,settelefono]=useState("")
  const handlesettelefono = (value) => settelefono (value)
  return (
    <>
    <br/><br/>   
      <Row>

          <Col md="5">
            <Col>
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
                  onChange={handlesetname}
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
                  onChange={handlesetemail}
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
                  onChange={handlesettelefono}

                />
              </FormGroup>
              <br /> <br />
              <Button
                className="btn-round mr-1"
                type="button"
                color="info"
                width="33.33%"
                onClick={sendContact(nombre,email,telefono)}
              >
                <p
                  style={{
                    fontFamily: "Fenwick Bold",
                    fontSize: "20px",
                    color: "white",
                  }}
                >Enviar</p>
              </Button>
       
            <br />

            </Col>
          </Col>
          

        <Col md="6">
        <div>
              <p
                style={{
                  color: "#6b184d",
                  fontFamily: "Finland Bold",
                  fontSize: "350%",
                  lineHeight: "normal",
                  textAlign:"center"
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
                  lineHeight: "normal",
                  textAlign:"center"
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
