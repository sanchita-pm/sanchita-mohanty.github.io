import React from "react";
import { Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  SiNotion,
  SiSlack,
  SiGoogleanalytics,
  SiFigma,
  SiAdobephotoshop,
  SiTrello,
} from "react-icons/si";

function Toolstack() {
  const toolItems = [
    { icon: <SiNotion />, name: "Notion" },
    { icon: <SiSlack />, name: "Slack" },
    { icon: <SiGoogleanalytics />, name: "Google Analytics" },
    { icon: <SiFigma />, name: "Figma" },
    { icon: <SiAdobephotoshop />, name: "Adobe Photoshop" },
    { icon: <SiTrello />, name: "Trello" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {toolItems.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip id={`tooltip-tool-${index}`} className="custom-tooltip">
                {tool.name}
              </Tooltip>
            }
          >
            <div className="tech-icon-wrapper">
              {tool.icon}
            </div>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
