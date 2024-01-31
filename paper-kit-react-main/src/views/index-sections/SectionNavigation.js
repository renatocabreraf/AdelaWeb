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
import imgHeader from '/Users/renatocabrerafigueroa/Documents/GitHub/AdelaWeb/paper-kit-react-main/src/assets/img/HeaderPrincipal.jpg';
import imgLogoAdela2 from '/Users/renatocabrerafigueroa/Documents/GitHub/AdelaWeb/paper-kit-react-main/src/assets/img/logoAdelaLetras2.png';


// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function SectionNavigation() {
  return (
    <>
    <br/>
      <div 
     >
      <Row>
          <Col md="7"
          style={{
            backgroundColor:"#EE83A1",
            alignSelf:"center",
            justifyContent:"center",
          
          }}>
            <br/>
            <img src={require("assets/img/Marcela2.jpg")}
            style={{
              width:"100%",
             
            }}>
            </img>
            <br/> <br/>
          </Col>
          <Col md="5"
          style={{
            backgroundColor:"#EE83A1",
            display:"flex"
          }}>
  

          <Col>
          <Col md="12">
          <h3
           style={{
            color: "WHITE",
            fontFamily: "Finland",
            textAlign:"Center",
            fontSize:"452%"
          }}>
           CONOCE A MARCELA!!!!
          </h3>
          <h4
          style={{
            color:"White",
            fontFamily:"Fenwick",
            fontSize:"200%",
            textAlign:"justify"
          }}>
            Nuestra fundadora apasionada y amante del helado. Su dedicación 
            y entusiasmo por este delicioso manjar se reflejan en cada rincón
            de nuestra empresa. Desde los inicios, Marce ha sido la fuerza 
            impulsora detrás de nuestra visión, llevando consigo una pasión 
            única por el helado que ha sido la chispa creativa de nuestra marca.
            </h4>
            <h4
          style={{
            color:"White",
            fontFamily:"Fenwick",
            fontSize:"200%",
            textAlign:"justify"
          }}>
            ¡Descubre el mundo del helado a través de los ojos y el paladar 
            apasionado de Marce!

            </h4>
          <br/>     <br/><br/>
        <Col
        style={{
          display:"flex",
         justifyContent:"center",
         alignItems:"center"
        }}><img src={require("assets/img/Heladito.png")}
            style={{
              width:"10vh"
            }}
            >
              </img>
              </Col>
          </Col>
          </Col>
          </Col>
        </Row>
      </div>{" "}
    </>
  );
}

export default SectionNavigation;
