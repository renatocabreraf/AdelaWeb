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
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  Button,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover,
} from "reactstrap";

// core components

function SectionJavaScript() {
  const [modal, setModal] = React.useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <br />    <br />    <br /><br /><br/>
      <div

        style={{
          background: "#BA8FAF"
        }}
      >
        <br />
        <Container
        >
          <Row
            style={{
              background: "#BA8FAF"
            }}>
            <Col md="12">
              <h2
                style={{
                  color: "White",
                  fontFamily: "Finland Bold",
                  fontSize: "500%",
                  textAlign: "Center"
                }}>VÁLIDO YA EN CIUDAD DE GUATEMALA</h2>
            </Col>



          </Row>

        </Container>
        <br />
        <div
          style={{
            background: "#EE83A1"
          }}
        >

          <Container

          >
            <Row
              style={{
                background: "#EE83A1"
              }}>
              <Col md="6">
                <img src={require("assets/img/FOTO3.jpg")}
                  style={{
                    width: "100%"
                  }}>
                </img>
                <h2
                  style={{
                    color: "White",
                    fontFamily: "Fenwick",
                    fontSize: "140%",
                    textAlign: "justify"
                  }}>En nuestra mágica fábrica de helados,
                  los niños viven una experiencia inolvidable.
                  Desde aprender a hacer su propio helado hasta
                  la adición de irresistibles toppings, cada
                  estación ofrece una aventura para despertar
                  la creatividad y los sentidos. Las risas
                  llenan el aire mientras los pequeños crean
                  sus propios helados.<br/><br/>
                  ¡Bienvenidos a un lugar donde la diversión 
                  y la delicia se mezclan, creando recuerdos 
                  sabrosos que perdurarán en sus corazones!<br /><br /> <br /><br /> <br /> <br /> 
                  HORARIOS DISPONIBLES:
                  JUEVES Y VIERNES (2:00PM - 5:00PM)
                  </h2>
                  
                  <br /><br /> 
                  
              </Col>
              <Col md="6">
              <img src={require("assets/img/FOTO1.png")}
                  style={{
                    width: "100.35%"
                  }}>
                </img>
                <div
                >

                  <h2
                    style={{
                      color: "White",
                    fontFamily: "Fenwick",
                    fontSize: "140%",
                    textAlign: "justify"
                    }}>
                    En Helados Adela, llevamos la magia directamente 
                    a tus eventos con nuestra encantadora carreta o 
                    camioncito.<br/><br/>
                    Nos enorgullece ofrecerte una experiencia única, 
                    donde la deliciosa frescura de nuestros helados 
                    se une a la celebración de tu ocasión especial.<br/><br/>
                    Estamos comprometidos a atenderte de la mejor manera 
                    posible, creando un ambiente vibrante y lleno de sabor. 
                    Ya sea una fiesta, boda, cumpleaños o cualquier evento 
                    especial, en Helados Adela estamos listos para endulzar 
                    cada momento y hacer que tu celebración sea aún más 
                    memorable con nuestros helados deliciosos.<br/><br/>
                    ¡Hacemos que tus eventos sean dulces y llenos de alegría!
                  </h2>
                  
                </div>
                <br /><br />
                
   


              </Col>


            </Row>

          </Container>

        </div>

        <div
          style={{
            background: "#6B184B"
          }}
        >

          <Container

          >
            <Row
              style={{
                background: "#6B184B"
              }}>
                
              <Col md="6">
              <br/><br/><br/>
                <img src={require("assets/img/FOTO2.jpg")}
                  style={{
                    width: "100%"
                  }}>
                </img>
               
                  
              </Col>
              <Col md="6">
              <br/><br/><br/>
              
                <div
                >
     
                  <h2
                    style={{
                      color: "White",
                    fontFamily: "Fenwick",
                    fontSize: "160%",
                    textAlign: "justify"
                    }}>
                    En Helados Adela, te invitamos a celebrar tus eventos 
                    en nuestras acogedoras instalaciones, donde la dulzura 
                    se combina con la diversión.<br/><br/>
                    Nuestro espacio está diseñado para ofrecerte un 
                    ambiente encantador y festivo, perfecto para cualquier 
                    ocasión especial. Imagina un lugar lleno de colores 
                    y aromas tentadores, donde tanto niños como adultos 
                    pueden sumergirse en la experiencia única de crear sus 
                    propios helados personalizados. Con un servicio dedicado 
                    y atento, nos aseguramos de que cada detalle sea perfecto 
                    para tu celebración.<br/><br/>
                    Ya sea un cumpleaños, una reunión familiar o cualquier 
                    evento especial, en Helados Adela te brindamos un lugar 
                    donde la alegría y la deliciosa diversión se fusionan 
                    para crear recuerdos inolvidables.<br/><br/>
                    ¡Ven y celebra con nosotros, haciendo de tu evento un festín de sabor y felicidad!
                  </h2>
                  
                </div>
                <br /><br /> <br />
   


              </Col>


            </Row>

          </Container>
          

        </div>
        <div

        style={{
          background: "#BA8FAF"
        }}
      >
       
        <Container
        >
          <Row
            style={{
              background: "#BA8FAF"
            }}>
            <Col md="12">
            <a href="https://wa.me/50255341529?text=Hola!,%20quisiera%20reservar%20un%20espacio%20para%20evento.">
              <h2
                style={{
                  color: "White",
                  fontFamily: "Finland",
                  fontSize: "500%",
                  textAlign: "Center"
                }}>RESERVA TU ESPACIO: +502 5534 1529</h2></a>
                <br/>
            </Col>



          </Row>

        </Container>
        </div>
      </div>
    </>
  );
}

export default SectionJavaScript;
