import React, { useState } from "react";
import { Card, Button, Alert, Row, Col, Tabs, Tab } from "react-bootstrap";
import { AiOutlineDownload, AiOutlineFullscreen } from "react-icons/ai";
import { BsFileEarmarkPpt, BsInfoCircle } from "react-icons/bs";

function PPTViewer({ project }) {
  const [activeTab, setActiveTab] = useState("viewer");

  const handleDownload = (file, filename) => {
    const link = document.createElement('a');
    link.href = file;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!project) {
    return (
      <Alert variant="warning">
        <BsInfoCircle style={{ marginRight: "8px" }} />
        No project selected for viewing.
      </Alert>
    );
  }

  return (
    <div className="ppt-viewer-container">
      <Card className="ppt-viewer-card" style={{ 
        backgroundColor: "rgba(255, 255, 255, 0.95)", 
        border: "1px solid rgba(var(--imp-text-color-rgb), 0.2)",
        minHeight: "700px"
      }}>
        <Card.Header style={{ 
          backgroundColor: "rgba(var(--imp-text-color-rgb), 0.1)", 
          borderBottom: "1px solid rgba(var(--imp-text-color-rgb), 0.2)" 
        }}>
          <Row className="align-items-center">
            <Col md={8}>
              <h4 style={{ color: "var(--imp-text-color)", margin: 0 }}>
                <BsFileEarmarkPpt style={{ marginRight: "10px" }} />
                {project.title} - Presentation
              </h4>
            </Col>
            <Col md={4} className="text-end">
              <Button
                variant="outline-primary"
                size="sm"
                onClick={() => handleDownload(project.pptFile, `${project.title}.pptx`)}
                style={{ 
                  borderColor: "var(--imp-text-color)",
                  color: "var(--imp-text-color)"
                }}
              >
                <AiOutlineDownload style={{ marginRight: "5px" }} />
                Download
              </Button>
            </Col>
          </Row>
        </Card.Header>
        
        <Card.Body style={{ padding: "0" }}>
          <Tabs
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k)}
            className="presentation-tabs"
            style={{ 
              borderBottom: "1px solid rgba(var(--imp-text-color-rgb), 0.2)",
              backgroundColor: "rgba(var(--imp-text-color-rgb), 0.05)"
            }}
          >
            <Tab eventKey="viewer" title="📊 Presentation Viewer">
              <div className="presentation-viewer" style={{ padding: "20px" }}>
                <div className="google-slides-container" style={{
                  width: "100%",
                  height: "600px",
                  border: "2px solid rgba(var(--imp-text-color-rgb), 0.2)",
                  borderRadius: "8px",
                  overflow: "hidden",
                  backgroundColor: "#ffffff"
                }}>
                  <iframe 
                    src={project.googleSlidesUrl}
                    width="100%" 
                    height="100%" 
                    frameBorder="0"
                    allowFullScreen={true}
                    mozallowfullscreen="true" 
                    webkitallowfullscreen="true"
                    title={`${project.title} Presentation`}
                    style={{ border: "none" }}
                  />
                </div>
                
                <Alert 
                  variant="info" 
                  style={{ 
                    backgroundColor: "rgba(var(--imp-text-color-rgb), 0.1)", 
                    border: "1px solid rgba(var(--imp-text-color-rgb), 0.3)",
                    marginTop: "20px"
                  }}
                >
                  <BsInfoCircle style={{ marginRight: "8px" }} />
                  <strong>Presentation Controls:</strong> Use the navigation arrows within the presentation to move between slides. 
                  You can also download the original PowerPoint file using the button above.
                </Alert>
              </div>
            </Tab>
            
            <Tab eventKey="details" title="📋 Project Details">
              <div className="project-details" style={{ padding: "20px" }}>
                <Row>
                  <Col md={6}>
                    <Card style={{ 
                      backgroundColor: "rgba(var(--imp-text-color-rgb), 0.05)", 
                      border: "1px solid rgba(var(--imp-text-color-rgb), 0.2)", 
                      marginBottom: "20px" 
                    }}>
                      <Card.Header style={{ backgroundColor: "rgba(var(--imp-text-color-rgb), 0.1)" }}>
                        <h6 style={{ color: "var(--imp-text-color)", margin: 0 }}>Project Overview</h6>
                      </Card.Header>
                      <Card.Body>
                        <p style={{ color: "var(--normal-text-color)", fontSize: "0.95em", opacity: "0.9" }}>
                          {project.description}
                        </p>
                        <div style={{ marginTop: "15px" }}>
                          <strong style={{ color: "var(--imp-text-color)" }}>Category:</strong>
                          <span style={{ color: "var(--normal-text-color)", marginLeft: "10px", opacity: "0.8" }}>
                            {project.category}
                          </span>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  
                  <Col md={6}>
                    <Card style={{ 
                      backgroundColor: "rgba(var(--imp-text-color-rgb), 0.05)", 
                      border: "1px solid rgba(var(--imp-text-color-rgb), 0.2)", 
                      marginBottom: "20px" 
                    }}>
                      <Card.Header style={{ backgroundColor: "rgba(var(--imp-text-color-rgb), 0.1)" }}>
                        <h6 style={{ color: "var(--imp-text-color)", margin: 0 }}>Technologies & Tools</h6>
                      </Card.Header>
                      <Card.Body>
                        <div className="tech-tags">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              style={{
                                display: "inline-block",
                                backgroundColor: "rgba(var(--imp-text-color-rgb), 0.15)",
                                color: "var(--imp-text-color)",
                                padding: "5px 12px",
                                borderRadius: "15px",
                                fontSize: "0.85em",
                                marginRight: "8px",
                                marginBottom: "8px",
                                border: "1px solid rgba(var(--imp-text-color-rgb), 0.3)",
                                fontWeight: "500"
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                
                <Card style={{ 
                  backgroundColor: "rgba(var(--imp-text-color-rgb), 0.05)", 
                  border: "1px solid rgba(var(--imp-text-color-rgb), 0.2)" 
                }}>
                  <Card.Header style={{ backgroundColor: "rgba(var(--imp-text-color-rgb), 0.1)" }}>
                    <h6 style={{ color: "var(--imp-text-color)", margin: 0 }}>Key Highlights</h6>
                  </Card.Header>
                  <Card.Body>
                    <Row>
                      {project.highlights.map((highlight, index) => (
                        <Col md={6} key={index} style={{ marginBottom: "10px" }}>
                          <div style={{ display: "flex", alignItems: "center" }}>
                            <div style={{ 
                              width: "8px", 
                              height: "8px", 
                              backgroundColor: "var(--imp-text-color)", 
                              borderRadius: "50%", 
                              marginRight: "12px" 
                            }}></div>
                            <span style={{ color: "var(--normal-text-color)", fontSize: "0.9em", opacity: "0.85" }}>
                              {highlight}
                            </span>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </Card.Body>
                </Card>
                
                {project.additionalFiles.length > 0 && (
                  <Card style={{ 
                    backgroundColor: "rgba(var(--imp-text-color-rgb), 0.05)", 
                    border: "1px solid rgba(var(--imp-text-color-rgb), 0.2)", 
                    marginTop: "20px" 
                  }}>
                    <Card.Header style={{ backgroundColor: "rgba(var(--imp-text-color-rgb), 0.1)" }}>
                      <h6 style={{ color: "var(--imp-text-color)", margin: 0 }}>Additional Resources</h6>
                    </Card.Header>
                    <Card.Body>
                      {project.additionalFiles.map((file, index) => (
                        <Button
                          key={index}
                          variant="outline-primary"
                          onClick={() => handleDownload(file.file, `${project.title}_${file.name}.${file.type}`)}
                          style={{ 
                            marginRight: "10px", 
                            marginBottom: "10px",
                            borderColor: "var(--imp-text-color)",
                            color: "var(--imp-text-color)"
                          }}
                        >
                          <AiOutlineDownload style={{ marginRight: "5px" }} />
                          {file.name}
                        </Button>
                      ))}
                    </Card.Body>
                  </Card>
                )}
              </div>
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PPTViewer;
