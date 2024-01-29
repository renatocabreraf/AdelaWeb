/*eslint-disable*/
import React from "react";

// reactstrap component

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
  Col,
  Dropdown,


  
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover,
} from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
     <br/> <br/> <br/> <br/>
      <div >
<Container>
  <Row>
    <Col md="2">
    <h2>
      Hola Mundo
    </h2>
    </Col>

  </Row>
</Container>
   
        
      </div>

    </>
  );
}

export default IndexHeader;
