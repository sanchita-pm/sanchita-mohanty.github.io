import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Particle from "../Particle";
import ProjectCard from "./ProjectCard";
import PPTViewer from "./PPTViewer";
import { BsArrowLeft } from "react-icons/bs";

// Import project assets
import boatPPT from "./BOAT INC(Company STrategy)/boAt .pptx";
import kalakshetraPPT from "./KALAKSHETRA (SaaS Product)/PBMA KalaKshetra.pptx";
import kalakshetraPDF from "./KALAKSHETRA (SaaS Product)/Kalakshetra (PBM) Final Project Report.pdf";
import luvnimbusPPT from "./LuvNimbus(SaaS Product)/DIPM Final (LuvNimbus)S.pptx";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'presentation'
  const navigate = useNavigate();

  const projectsData = [
    {
      id: 1,
      title: "BOAT Inc",
      description: "Comprehensive strategic analysis and business planning for BOAT Inc, focusing on market positioning, competitive analysis, and growth strategies in the consumer electronics sector.",
      category: "Company Strategy",
      technologies: ["Strategic Planning", "Market Analysis", "Business Development"],
      pptFile: boatPPT,
      googleSlidesUrl: "https://docs.google.com/presentation/d/e/2PACX-1vQuf_aanoZmhxMaZo8afrNG7caG1qPJLnhnU2ymD4J9nfucxeIknQvWJ3tL5SqaDg/pubembed?start=false&loop=false&delayms=3000",
      additionalFiles: [],
      highlights: [
        "Market penetration strategy",
        "Competitive landscape analysis",
        "Revenue optimization models",
        "Brand positioning framework"
      ]
    },
    {
      id: 2,
      title: "Kalakshetra",
      description: "Development of a comprehensive SaaS platform for cultural arts management, featuring user management, event scheduling, and performance analytics.",
      category: "SaaS Product",
      technologies: ["Product Management", "SaaS Architecture", "User Experience"],
      pptFile: kalakshetraPPT,
      googleSlidesUrl: "https://docs.google.com/presentation/d/e/2PACX-1vTWep-HAng3iWtCcmPGNICohPA_LVQ6rLlw2U5Kf3Ek-K9-gnBcbjEY5aEBn8GR8w/pubembed?start=false&loop=false&delayms=3000",
      additionalFiles: [
        { name: "Final Project Report", file: kalakshetraPDF, type: "pdf" }
      ],
      highlights: [
        "End-to-end product development",
        "User-centric design approach",
        "Scalable SaaS architecture",
        "Performance analytics dashboard"
      ]
    },
    {
      id: 3,
      title: "LuvNimbus",
      description: "Innovative cloud-based SaaS solution focusing on digital transformation and process optimization for modern businesses.",
      category: "SaaS Product",
      technologies: ["Digital Innovation", "Cloud Architecture", "Process Optimization"],
      pptFile: luvnimbusPPT,
      googleSlidesUrl: "https://docs.google.com/presentation/d/e/2PACX-1vRSS5n5HYgJ76A5oktgbjfT1BhhgdcYPiPLgDjW3q591uQhOtFKYArBTYxe-8hFJQ/pubembed?start=false&loop=false&delayms=3000",
      additionalFiles: [],
      highlights: [
        "Cloud-native architecture",
        "Digital transformation strategy",
        "Process automation framework",
        "Scalability and performance optimization"
      ]
    }
  ];

  const handleViewPresentation = (project) => {
    setSelectedProject(project);
    setViewMode('presentation');
  };

  const handleBackToGrid = () => {
    console.log("Back button clicked - resetting view"); // Debug log
    setSelectedProject(null);
    setViewMode('grid');
    // Force re-render by updating state
    window.scrollTo(0, 0);
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        {viewMode === 'grid' ? (
          <>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <Col md={12} className="text-center">
                <h1 className="project-heading">
                  My Recent <strong className="purple">Projects</strong>
                </h1>
                <p style={{ 
                  color: "var(--normal-text-color)", 
                  fontSize: "1.1em", 
                  fontWeight: "400", 
                  maxWidth: "600px", 
                  margin: "0 auto",
                  lineHeight: "1.6",
                  opacity: "0.9"
                }}>
                  Here are a few projects I've worked on recently, showcasing strategic analysis, 
                  product development, and innovative SaaS solutions.
                </p>
              </Col>
            </Row>
            <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
              {projectsData.map((project) => (
                <Col md={4} className="project-card" key={project.id}>
                  <ProjectCard 
                    project={project} 
                    onViewPresentation={handleViewPresentation}
                  />
                </Col>
              ))}
            </Row>
          </>
        ) : (
          <>
            <Row style={{ justifyContent: "flex-start", paddingBottom: "20px" }}>
              <Col md={12}>
                <Button
                  variant="outline-primary"
                  className="back-to-projects-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log("Back button clicked - resetting view");
                    handleBackToGrid();
                  }}
                  style={{ 
                    marginBottom: "20px"
                  }}
                >
                  <BsArrowLeft style={{ marginRight: "8px" }} />
                  Back to Projects
                </Button>
                <h2 className="project-title" style={{ 
                  color: "var(--normal-text-color)", 
                  marginBottom: "20px",
                  fontWeight: "600",
                  paddingBottom: "20px",
                  borderBottom: "1px solid rgba(var(--imp-text-color-rgb), 0.3)"
                }}>
                  {selectedProject?.title}
                </h2>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <PPTViewer project={selectedProject} />
              </Col>
            </Row>
          </>
        )}
      </Container>
    </Container>
  );
}

export default Projects;
