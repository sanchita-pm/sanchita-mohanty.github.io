import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiTableau, SiGoogleanalytics, SiPython,
  SiJira, SiFigma, SiCanva
} from "react-icons/si";
import { FaFileExcel, FaProjectDiagram } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdWorkspaces } from "react-icons/md";
import { BsRobot } from "react-icons/bs";



function Techstack() {
  const techItems = [
  // 📊 Data & BI Tools
  { icon: <SiTableau />, name: "Tableau" },
  { icon: <FaFileExcel />, name: "Excel (Advanced)" },
    { icon: <SiGoogleanalytics />, name: "Google Analytics" },
    {icon: <FaProjectDiagram/>, name: "Project Diagram"},

  // 🧠 Programming & Frameworks
  { icon: <SiPython />, name: "Python (Basics)" },
  { icon: <GiArtificialIntelligence />, name: "AI/ML Frameworks" },
  { icon: <BsRobot />, name: "LLMs" },

  // 🗂️ Project Management & Collaboration
  { icon: <SiJira />, name: "JIRA" },
  { icon: <MdWorkspaces />, name: "ERP Systems" },

  // 🎨 Design & Prototyping
  { icon: <SiFigma />, name: "Figma" },
  { icon: <SiCanva />, name: "Canva" },
];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techItems.map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip id={`tooltip-${index}`} className="custom-tooltip">
                {tech.name}
              </Tooltip>
            }
          >
            <div className="tech-icon-wrapper">
              {tech.icon}
            </div>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
