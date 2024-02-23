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
import { Container, Row, Col } from "reactstrap";
import background from "../../assets/img/FONDOTIENDAS.jpg"
// core components

function SectionDark() {
  return (
    <>
  
      <div
     className="fondo"
      >
        <Container
        style={{
          backgroundImage: background
        }}>
          <Row
          style={{
            background:"#6B184B"
          }}>
            <Col md="12">
            <h2 
              style={{
                color:"White",
                fontFamily: "Finland Bold",
                fontSize:"500%",
                textAlign:"left"
              }}>UBICACIONES EN GUATEMALA</h2>
            </Col>
            <Col md="6">
             
              <div
              style={{
                background:"white"
              }}>
                <br/><br/>
                <p
                style={{
                  color:"#EE83A1",
                fontFamily: "Fenwick",
                fontSize:"200%",
                textAlign:"center"
                }}>
                HELADOS ADELA ZONA 4
                </p>
                <p
                style={{
                  color:"#6B184B",
                fontFamily: "Finland bold",
                fontSize:"200%",
                textAlign:"Center"
                }}>
                Via 5. Cdad. de Guatemala Zona 4
                </p>
                <br/>
                <a href="https://www.google.com/maps/place/Helados+Adela/@14.6209405,-90.5142826,15z/data=!4m6!3m5!1s0x8589a23050ceaa77:0x22964fc38144c1fe!8m2!3d14.6209405!4d-90.5142826!16s%2Fg%2F11dyz4mc14?entry=ttu"><p
               style={{
                color:"#6B184B",
              fontFamily: "Fenwick",
              fontSize:"150%",
              textAlign:"center",
              backgroundColor:"#FFD8EC"
                }}>
                  VER MAPA
                </p></a>
              </div>
              
              <br/>
              <div
              style={{
                background:"white"
              }}>
                <br/><br/>
                <p
                style={{
                  color:"#EE83A1",
                fontFamily: "Fenwick",
                fontSize:"200%",
                textAlign:"center"
                }}>
                HELADOS ADELA ZONA 14
                </p>
                <p
                style={{
                  color:"#6B184B",
                fontFamily: "Finland bold",
                fontSize:"200%",
                textAlign:"Center"
                }}>
                2 Calle 10-59. Cdad. de Guatemala Zona 14
                </p>
                <br/>
                <a href="https://www.google.com/maps/place/Helados+Adela/@14.5882798,-90.5127375,17z/data=!3m1!4b1!4m6!3m5!1s0x8589a3ea0ae2581f:0x624cd66f0012096b!8m2!3d14.5882746!4d-90.5101626!16s%2Fg%2F11h_5nf3ps?entry=ttu"><p
               style={{
                color:"#6B184B",
              fontFamily: "Fenwick",
              fontSize:"150%",
              textAlign:"center",
              backgroundColor:"#FFD8EC"
                }}>
                  VER MAPA
                </p></a>
              </div>
              <br/>
            </Col>
          
            <Col md="6">
         
            <div
              style={{
                background:"white"
              }}>
                <br/><br/>
                <p
                style={{
                  color:"#EE83A1",
                fontFamily: "Fenwick",
                fontSize:"200%",
                textAlign:"center"
                }}>
                HELADOS ADELA ZONA 10
                </p>
                <p
                style={{
                  color:"#6B184B",
                fontFamily: "Finland bold",
                fontSize:"200%",
                textAlign:"Center"
                }}>
                CC Avia. Segundo Nivel. 12 Calle 2-25. Cdad. de Guatemala
                </p>
                <br/>
                <a href="https://www.google.com/maps/place/Helados+Adela/@14.601809,-90.51612,17z/data=!3m1!4b1!4m6!3m5!1s0x8589a3e7e6f4732f:0xe76512c06515e256!8m2!3d14.6018038!4d-90.5135451!16s%2Fg%2F11s69qjf_j?entry=ttu"><p
               style={{
                color:"#6B184B",
              fontFamily: "Fenwick",
              fontSize:"150%",
              textAlign:"center",
              backgroundColor:"#FFD8EC"
                }}>
                  VER MAPA
                </p></a>
              </div>
              <br/>
              <div
              style={{
                background:"white"
              }}>
                <br/><br/>
                <p
                style={{
                  color:"#EE83A1",
                fontFamily: "Fenwick",
                fontSize:"200%",
                textAlign:"center"
                }}>
                HELADOS ADELA ZONA 11
                </p>
                <p
                style={{
                  color:"#6B184B",
                fontFamily: "Finland bold",
                fontSize:"200%",
                textAlign:"Center"
                }}>
                28 Av 6-60. Zona 11. Cdad. de Guatemala. Parqueo Ferco
                </p>
                <br/>
                <a href="https://www.google.com/maps/place/Helados+Adela/@14.6229258,-90.5644074,17z/data=!3m1!4b1!4m6!3m5!1s0x8589a140a9a53317:0xd89ef7bd8a712a94!8m2!3d14.6229206!4d-90.5618325!16s%2Fg%2F11rqrssntj?entry=ttu"><p
               style={{
                color:"#6B184B",
              fontFamily: "Fenwick",
              fontSize:"150%",
              textAlign:"center",
              backgroundColor:"#FFD8EC"
                }}>
                  VER MAPA
                </p></a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionDark;
