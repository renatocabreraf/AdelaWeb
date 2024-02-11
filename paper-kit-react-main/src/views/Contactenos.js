import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

import SectionCarousel from "views/index-sections/SectionCarousel";
import SectionDark from "views/index-sections/SectionDark.js";
import SectionDownload from "views/index-sections/SectionDownload.js";
import SectionExamples from "views/index-sections/SectionExamples";
import SectionNotifications from "views/index-sections/SectionNotifications.js";
import SectionNucleoIcons from "./index-sections/SectionNucleoIcons";


function Contactenos() {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
      document.body.classList.add("contactenos");
      return function cleanup() {
        document.body.classList.remove("contactenos");
      };
    });
    return (
      <>
        <IndexNavbar />
   
        <div className="main">
          <SectionNucleoIcons/>

         
        </div>
      </>
    );
  }
  
  export default Contactenos;