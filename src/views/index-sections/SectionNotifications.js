
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



function Forms() {

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
                  lineHeight: "normal",
                  textAlign: "CENTER"
                }}
              >
                QUIERO QUE ME CONTACTEN PARA REALIZAR UN EVENTO CON USTEDES
              </p>
            </div>
            <br /> <br />
       
              
              <a href="https://wa.me/50255341529?text=Hola!,%20quisiera%20compartir%20mis%20datos%20para%20realizar%20un%20evento."><Button
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
              <br/><br/>
        
              <Col md="12">
           <center><img src={require("assets/img/LOGO 1 ADELA.png")}
          style={{
            width:"30vh",
            textAlign:"center"
            
          }}></img></center> 
          </Col>
          <Col md="12">
            <br/>
            <p
            style={{
              textAlign:"left",
              fontFamily:"Fenwick",
              color:"black",
              fontSize:"14px"
              
            }}>©2024 Helados Adela, Quorra S.A. Todos los derechos reservados.</p>
          
          </Col>

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

