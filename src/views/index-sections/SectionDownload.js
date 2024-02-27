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
import background from "../../assets/img/FONDOTIENDAS.jpg"

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

// core components

function SectionDownload() {
  return (
    <>
      <div
        className="fondo"
      >
        <br />
        <Container
          style={{
            backgroundImage: background
          }}>
          <Row
            style={{
              background: "#EE83A1"
            }}>
            <Col md="12">
              <h2
                style={{
                  color: "White",
                  fontFamily: "Finland Bold",
                  fontSize: "350%",
                  textAlign: "right"
                }}>UBICACIONES EN MÉXICO</h2>
            </Col>
            <Col>
              <Col md="12">
                <div
                >

                  <h4
                    style={{
                      color: "wHITE",
                      fontFamily: "Fenwick",
                      fontSize: "200%",
                      textAlign: "left",
                      fontStyle: "normal"
                    }}>
                    Helados Adela abre sus puertas en Mérida,
                    Yucatán en 2024. Al interior de un encantador
                    espacio de tonalidades rosadas que sacan una
                    sonrisita, la experiencia de compartir un
                    helado entre la gente que más quieres se
                    renueva y se vuelve más bonita que nunca.
                  </h4>
                </div>
                <br /><br />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "Center",

                  }}>
                  <Button

                    type="button"
                    color="warning"
                    width="33.33%"

                  >
                    <p
                      style={{
                        fontFamily: "Apparat-Bold",
                        fontSize: "22px",
                        color: "#6b184d"

                      }}
                    >NUEVA UBICACIÓN PRONTO
                    </p>
                  </Button>
                </div>
                <br /> <br /> <br />
              </Col>

            </Col>


          </Row>

        </Container>
        <br/><br/><br/>
      </div>
    </>
  );
}

export default SectionDownload;
