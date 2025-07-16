import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function ColorPalette() {
  const colors = [
    {
      name: "Dark Purple",
      hex: "#43253A",
      rgb: "67, 37, 58",
      usage: "Primary text, backgrounds, and main branding"
    },
    {
      name: "Brown Sugar",
      hex: "#B06736",
      rgb: "176, 103, 54",
      usage: "Secondary accents, headers, and navigation"
    },
    {
      name: "Caramel",
      hex: "#E17C3D",
      rgb: "225, 124, 61",
      usage: "Primary accent, highlights, and call-to-action"
    },
    {
      name: "Cinereous",
      hex: "#AB837A",
      rgb: "171, 131, 122",
      usage: "Subtle elements, muted text, and borders"
    },
    {
      name: "Rose Ebony",
      hex: "#6C453D",
      rgb: "108, 69, 61",
      usage: "Rich accents, dark theme cards, and depth"
    }
  ];

  return (
    <Container fluid className="color-palette-section">
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <h2 className="project-heading gradient-text">
              Color <strong className="purple">Palette</strong>
            </h2>
            <p style={{ color: "var(--normal-text-color)" }}>
              The sophisticated color scheme that defines this portfolio's visual identity
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {colors.map((color, index) => (
            <Col md={4} lg={2} className="mb-4" key={index}>
              <Card className="color-card h-100">
                <div 
                  className="color-swatch"
                  style={{ 
                    backgroundColor: color.hex,
                    height: "120px",
                    borderRadius: "8px 8px 0 0"
                  }}
                ></div>
                <Card.Body className="text-center p-3">
                  <Card.Title 
                    style={{ 
                      fontSize: "1rem", 
                      color: "var(--normal-text-color)",
                      marginBottom: "0.5rem"
                    }}
                  >
                    {color.name}
                  </Card.Title>
                  <div style={{ fontSize: "0.85rem", color: "var(--normal-text-color)" }}>
                    <div className="mb-1">
                      <strong>{color.hex}</strong>
                    </div>
                    <div className="mb-2" style={{ opacity: 0.8 }}>
                      RGB({color.rgb})
                    </div>
                    <div style={{ fontSize: "0.75rem", opacity: 0.7 }}>
                      {color.usage}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="mt-4">
          <Col md={12} className="text-center">
            <div className="palette-gradients">
              <h4 style={{ color: "var(--normal-text-color)", marginBottom: "1rem" }}>
                Gradient Combinations
              </h4>
              <div className="gradient-showcase d-flex justify-content-center flex-wrap gap-3">
                <div 
                  className="gradient-sample"
                  style={{
                    background: "linear-gradient(135deg, #E17C3D, #B06736)",
                    width: "120px",
                    height: "60px",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "0.8rem",
                    fontWeight: "600"
                  }}
                >
                  Primary
                </div>
                <div 
                  className="gradient-sample"
                  style={{
                    background: "linear-gradient(135deg, #43253A, #6C453D)",
                    width: "120px",
                    height: "60px",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "0.8rem",
                    fontWeight: "600"
                  }}
                >
                  Dark
                </div>
                <div 
                  className="gradient-sample"
                  style={{
                    background: "linear-gradient(135deg, #AB837A, #E17C3D)",
                    width: "120px",
                    height: "60px",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "0.8rem",
                    fontWeight: "600"
                  }}
                >
                  Subtle
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ColorPalette;
