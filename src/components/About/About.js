import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Confetti from 'react-confetti';
import Particle from "../Particle";
// import Github from "./Github"; // Commented out due to date-fns compatibility issues
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  const [showSparkles, setShowSparkles] = useState(true);
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectSize = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);
    
    // Stop sparkles after 4 seconds
    const timer = setTimeout(() => {
      setShowSparkles(false);
    }, 4000);

    return () => {
      window.removeEventListener('resize', detectSize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <Container fluid className="about-section">
      {showSparkles && (
        <Confetti
          width={windowDimension.width}
          height={windowDimension.height}
          recycle={false}
          numberOfPieces={50}
          colors={['#b8860b', '#d4af37', '#e8b4cb']}
          gravity={0.1}
          shapes={['star']}
          scalar={0.8}
          drift={0.1}
        />
      )}
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 className="project-heading">
              About <strong className="purple">Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Technical <strong className="purple">Skillset</strong>
        </h1>

        <Techstack />

        {/* <h1 className="project-heading">
          <strong className="imp-text-color">Areas</strong> of expertise
        </h1>
        <Toolstack /> */}

        {/* <Github /> */}
        {/* Github component commented out due to react-github-calendar date-fns compatibility issues */}
      </Container>
    </Container>
  );
}

export default About;
