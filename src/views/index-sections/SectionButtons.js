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
          width: "103%"
        }}>
      </img>
      <Container>
        <div className="title"
        style={{
          justifyContent:"Center",
          display:"flex",
          textAlign:"left"
        }}>
          <h4
            style={{
              color: "#6b184d",
              fontFamily: "Fenwick",
             

            }}>
            Adela nace como una heladería familiar en el año 2017 en Guatemala, inspirada en una historia romántica 
            llena de amor y aventuras en los años 50's. Doña Isabelita, la abuelita de nuestras fundadoras, 
            todos los viernes por las tardes tenía la tradición de recibir a sus nietos con deliciosos helados, 
            donde el ingrediente especial era el amor. Acompañando esas deliciosas refacciones siempre habían momentos 
            para compartir sus mejores historias y su pasión por los postres ,  volviendo aquellos recuerdos memorables 
            aún más importantes entre la familia.<br/>                                                               
            Uno de los recuerdos que marcaron su vida fue que su primera cita con la persona que se convertiría en el amor 
            de su vida. En una colorida tienda de helados que siempre recordaba con una inmensa gratitud. Tan emotiva era 
            esa historia que la abuelita contaba una y otra vez a sus nietas, que se convirtió en la inspiración y la excusa 
            perfecta para darle vida a Helados Adela.
          </h4>
        </div>
      </Container>
      

  
    
    </>
  );
}

export default SectionButtons;
