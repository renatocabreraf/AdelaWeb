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
// plugin that creates slider


// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  CustomInput,
} from "reactstrap";

function SectionButtons() {

  return (
    <>
      <img src={require("assets/img/divisorIndex.png")}
        style={{
          width: "100.65%"
        }}>
      </img>
      <Container>
        <div className="title">
          <h4
            style={{
              color: "#6b184d",
              fontFamily: "Fenwick",

            }}>
            Helados completamente desde cero, utilizando una receta única y
            perfeccionada durante más de 10 años. Nuestros helados tienen una
            textura excepcionalmente suave, con un sabor vibrante y cremoso.
            Encontrarás sabores inspirados en nuestras curiosidades!!
          </h4>
        </div>
      </Container>
      
      <Container>
      
   
     <div
     style={{
      display:"flex",
      justifyContent:"Center"
     }}>
        <Button
          className="btn-round mr-1"
          type="button"
          color="success"
          width="33.33%"
    
        >
          <p
          style={{
            fontFamily:"Apparat-Bold",
            fontSize:"22px",
            color:"#6b184d"
            
          }}
          >Conoce Nuestros Sabores
          </p>
        </Button>
        </div>

  
      </Container>
  
    
    </>
  );
}

export default SectionButtons;
