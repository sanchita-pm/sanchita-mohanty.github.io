// Resume component updated on July 11, 2025 based on SANCHITA MOHANTY CV(11.07) (2).docx
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Confetti from 'react-confetti';
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Resume-SanchitaMohanty.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const [showFloatingElements, setShowFloatingElements] = useState(true);
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
    
    // Stop floating elements after 3 seconds
    const timer = setTimeout(() => {
      setShowFloatingElements(false);
    }, 3000);

    return () => {
      window.removeEventListener('resize', detectSize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <Container fluid className="resume-section">
      {showFloatingElements && (
        <Confetti
          width={windowDimension.width}
          height={windowDimension.height}
          recycle={false}
          numberOfPieces={30}
          colors={['#b8860b', '#d4af37']}
          gravity={0.05}
          shapes={['circle']}
          scalar={0.6}
          drift={0.05}
          ticks={200}
        />
      )}
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank" id="imp-text-color">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Professional Experience</h3>
            <Resumecontent
              title="Product Management Intern [AIKYAM]"
              date="May 2024 - July 2024"
              content={[
                "Applied AI-driven user interaction data analysis to define detailed product requirements and design solutions aligned with PLM processes",
                "Designed and tested prototypes with user feedback loops, optimizing interaction workflows and reducing churn by 20%",
                "Leveraged data visualization tools such as Power BI to monitor KPIs, enabling real-time decision-making and enhanced stakeholder visibility",
                "Collaborated with engineering and marketing teams to refine AI-informed roadmaps and prioritize features based on market needs"
              ]}
            />
            <Resumecontent
              title="Senior Associate – Marketing Operations & Product Analytics [MEDIAMINT, Hyderabad]"
              date="March 2021 - April 2024"
              content={[
                "Spearheaded marketing analytics initiatives by leveraging advanced Excel and SQL to monitor and enhance product and campaign performance across platforms like DV360 and CM360",
                "Composed detailed Product Requirement Documents (PRDs) by translating user behaviour data and stakeholder feedback into actionable development plans, accelerating feature rollouts by 30%",
                "Built and maintained automated dashboards to track promotional impact and retail point-of-sale (PoS) engagement, significantly improving team responsiveness and operational clarity",
                "Managed sprint planning and retrospectives using JIRA, ensuring continuous alignment between evolving product strategies and customer expectations",
                "Mentored junior associates on ad operations best practices, including market trend analysis and automation techniques"
              ]}
            />
            <h3 className="resume-title">Technical Skills</h3>
            <Resumecontent
              title="Data & BI Tools"
              content={[
                "Power BI, Tableau, Excel (Advanced), SQL"
              ]}
            />
            <Resumecontent
              title="Programming & Frameworks"
              content={[
                "Python (Basics), AI/ML Frameworks, LLMs"
              ]}
            />
            <Resumecontent
              title="Project Management & Collaboration"
              content={[
                "JIRA, ERP Systems, CMS"
              ]}
            />
            <Resumecontent
              title="Design & Prototyping"
              content={[
                "Figma, Canva"
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Xavier Institute of Management, Bhubaneswar"
              date="2024 - 2025"
              content={[
                "Executive MBA in Business Management",
                "Specialization in Analytics and Product Strategy",
                "Media & PR Coordinator, XEMINENCE 24-25",
                "Editor & Designer, XEMINENCE-25"
              ]}
            />
            <Resumecontent
              title="ITER, SOA University, Bhubaneswar"
              date="2017 - 2021"
              content={[
                "Bachelor of Technology in CSIT"
              ]}
            />
            <h3 className="resume-title">Certifications</h3>
            <Resumecontent
              title=""
              content={[
                "AI Product Management – Coursera",
                "Product Management Certification",
                "Digital Marketing Fundamentals",
                "Lean Six Sigma Fundamentals"
              ]}
            />
            <h3 className="resume-title">Areas of Expertise</h3>
            <Resumecontent
              title=""
              content={[
                "Product Requirement Analysis & Documentation",
                "AI-Driven User Behaviour Analysis",
                "Agile Methodologies & JIRA",
                "Data Visualization (Power BI, Tableau)",
                "Ad-Operations and Digital Marketing",
                "Stakeholder Engagement & Communication",
                "UX Optimization & A/B Testing",
                "Campaign Performance Analytics",
                "Market Research and Competitive Analysis"
              ]}
            />
            <h3 className="resume-title">Leadership & Activities</h3>
            <Resumecontent
              title=""
              content={[
                "Coordinated PR strategy and media communications for XEMINENCE 24-25 (Flagship event for Executive MBA)",
                "Led design and editorial content creation for the XEMINENCE-25 student publication"
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
