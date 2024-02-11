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
/*eslint-disable*/
import React from "react";


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

function IndexHeader() {
  return (
    <>
      <div>
      <br/><br/><br/><br/><br/>
        <div />
        
        <Row>
          <Col md="8">

  

            <img src={require("assets/img/HeaderPrincipal.jpg")}
            style={{
              width:"103.5%"
            }}>
            </img>

          </Col>
          <Col md="4"
          style={{
            backgroundColor:"#BA8FAF"
          }}>
            <br/><br/>
          <center><img src={require("assets/img/logoAdelaLetras2.png")}
          style={{
            width:"50vh",
            
          }}></img></center>
          <br/>
          <Col>
          <Col md="12">
          <h3
          style={{
            color:"White",
            fontFamily:"Fenwick Bold",
            fontSize:"200%"
          }}>
            La receta de Adela
          </h3>
          <h4
          style={{
            color:"White",
            fontFamily:"Fenwick",
            fontSize:"150%",
            textAlign:"justify"
          }}>
            El ingrediente más importante siempre es el amor. Y, en Adela, 
            no es la excepción. Para crear los recuerdos más bonitos, recomendamos
            la siguiente receta. Se puede seguir al pie de la letra, o improvisar 
            al momento de servirla, pues lo más importante está en el corazón que 
            se pone al prepararla. <br/><br/>
            Ingredientes: Dos cucharaditas de risas —se recomienda usar aquellas 
            que hacen que duela un poquito la panza de tan fuertes que son.<br/><br/>
            Un puñado de amigos o familia. Pueden ser ambos, pues se logra un 
            efecto más aglutinante. Media onza de ganas de pasarla bien. En caso 
            de no tener ni idea de cómo conseguir esto, puedes acercarte a 
            cualquiera de nuestros amigos de Adela y te diremos el secreto para 
            lograr la consistencia perfecta.
            </h4>

          </Col>
          </Col>
          </Col>
        </Row>
        <div className="content-center">
          <Container>
            <div className="title-brand">
              
              <div>
             
              </div>
              
            </div>
            
          </Container>
        </div>
    
       
      </div>
    </>
  );
}

export default IndexHeader;
