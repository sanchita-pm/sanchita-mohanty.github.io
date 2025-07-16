import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { AiOutlineEye, AiOutlineDownload } from "react-icons/ai";
import { BsFileEarmarkPpt, BsFileEarmarkPdf } from "react-icons/bs";

function ProjectCard({ project, onViewPresentation }) {
  const handleDownload = (file, filename) => {
    const link = document.createElement('a');
    link.href = file;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title style={{ color: "var(--imp-text-color)", fontWeight: "bold", fontSize: "1.3em" }}>
          {project.title}
        </Card.Title>
        
        <div style={{ marginBottom: "15px" }}>
          <Badge 
            bg="secondary" 
            style={{ 
              backgroundColor: "var(--imp-text-color)", 
              marginRight: "8px",
              fontSize: "0.8em",
              color: "white"
            }}
          >
            {project.category}
          </Badge>
        </div>

        <Card.Text style={{ 
          textAlign: "justify", 
          color: "var(--normal-text-color)", 
          fontSize: "0.95em", 
          lineHeight: "1.5", 
          fontWeight: "400",
          opacity: "0.9"
        }}>
          {project.description}
        </Card.Text>

        <div style={{ marginBottom: "15px" }}>
          <strong style={{ color: "var(--imp-text-color)" }}>Key Technologies:</strong>
          <div style={{ marginTop: "8px" }}>
            {project.technologies.map((tech, index) => (
              <Badge 
                key={index}
                bg="outline-light" 
                style={{ 
                  backgroundColor: "rgba(var(--imp-text-color-rgb), 0.1)",
                  border: "1px solid var(--imp-text-color)",
                  color: "var(--imp-text-color)",
                  marginRight: "6px",
                  marginBottom: "6px",
                  fontSize: "0.75em",
                  fontWeight: "600"
                }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <strong style={{ color: "var(--imp-text-color)" }}>Project Highlights:</strong>
          <ul style={{ 
            marginTop: "8px", 
            paddingLeft: "20px", 
            color: "var(--normal-text-color)", 
            fontSize: "0.9em", 
            fontWeight: "400",
            opacity: "0.85"
          }}>
            {project.highlights.map((highlight, index) => (
              <li key={index} style={{ marginBottom: "4px" }}>
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div className="project-actions" style={{ marginTop: "20px" }}>
          <Button
            variant="primary"
            onClick={() => onViewPresentation(project)}
            style={{ 
              marginRight: "10px", 
              marginBottom: "10px",
              backgroundColor: "var(--imp-text-color)",
              borderColor: "var(--imp-text-color)",
              fontWeight: "600"
            }}
          >
            <AiOutlineEye style={{ marginRight: "5px" }} />
            View Presentation
          </Button>

          {project.additionalFiles.map((file, index) => (
            <Button
              key={index}
              variant="outline-secondary"
              onClick={() => handleDownload(file.file, `${project.title}_${file.name}.${file.type}`)}
              style={{ 
                marginRight: "10px", 
                marginBottom: "10px",
                fontSize: "0.85em",
                borderColor: "var(--imp-text-color)",
                color: "var(--imp-text-color)",
                backgroundColor: "transparent",
                fontWeight: "600"
              }}
            >
              {file.type === 'pdf' ? <BsFileEarmarkPdf style={{ marginRight: "5px" }} /> : <AiOutlineDownload style={{ marginRight: "5px" }} />}
              {file.name}
            </Button>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
