import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Confetti from 'react-confetti';
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Type from "./Type";

function Home() {
  const [showConfetti, setShowConfetti] = useState(true);
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
    
    // Stop confetti after 5 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => {
      window.removeEventListener('resize', detectSize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section>
      {showConfetti && (
        <Confetti
          width={windowDimension.width}
          height={windowDimension.height}
          recycle={false}
          numberOfPieces={200}
          colors={['#b8860b', '#d4af37', '#e8b4cb', '#f8f9fa', '#2c3e50', '#8b4513']}
          gravity={0.3}
          wind={0.05}
          run={showConfetti}
        />
      )}
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi! <span className="wave">👋🏻</span>
              </h1>
              <h1 className="heading-name">
                This is
                <strong className="main-name"> Sanchita Mohanty</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
