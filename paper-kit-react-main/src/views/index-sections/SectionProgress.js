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
} from "reactstrap";

// core components

function SectionProgress() {
  const [activeTab, setActiveTab] = React.useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return (
    <>


      <Row
      style={{
        backgroundColor:"#FFD8EC"
      }}
      >
        <Col md="6"
        style={{
          backgroundColor:"#FFD8EC"
        }}>
          <h1
          style={{
            color: "#EE83A1",
            fontStyle:"bold",
            fontFamily: "Finland Bold",
            textAlign:"Center",
            fontSize:"400%"
          }}>
            NECESITO UN ADELA AHORA..!!!
          </h1>
        </Col>
        <Col md="2"
        style={{
          backgroundColor:"#FFD8EC"
        }}>
          <br/><br/>
        <div
        style={{
          display:"flex",
          justifyContent:"Center",
          backgroundColor:"#FFD8EC"
         }}>
          <Button
          className="btn-round mr-1"
          type="button"
          color="info"
          href="/tiendas"
          
    
        >
          <p
          style={{
            fontFamily:"Fenwick Bold",
            fontSize:"11px",
            color:"white",

            
          }}
          >Nuestras Ubicaciones
          </p>
        </Button>
        </div>
        </Col>
        <Col md="2"
        style={{
          backgroundColor:"#FFD8EC"
        }}>
          <br/><br/>
        <div
        style={{
          display:"flex",
          justifyContent:"Center",
          backgroundColor:"#FFD8EC"
         }}><Button
          className="btn-round mr-1"
          type="button"
          color="info"
         
        >
          <p
          style={{
            fontFamily:"Fenwick Bold",
            fontSize:"11px",
            color:"white"
            
          }}
          >Delivery
          </p>
        </Button>
        
        </div>
        <br/><br/> 
        </Col>
     
      </Row>

  
      
      {" "}
    </>
  );
}

export default SectionProgress;
