import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am Sanchita Mohanty.
            I'm an AI Enthusiast 🤖 with 3 years of experience in Digital Marketing 📈, completed my 1-year MBA at XIMB 🎓 to bridge the gap between business strategy and technology.

💡 With a passion for Generative AI, I’m constantly exploring how cutting-edge AI solutions can transform industries and create business value. As I dive deeper into this space, I aspire to become an AI Product Manager (PM) 🔍, combining my marketing expertise with product development and AI innovations.

I’m driven by lifelong learning 📚 and always on the lookout for opportunities to collaborate, share insights, and grow in the ever-evolving AI landscape.

Let’s connect if you’re into AI, product management, or digital transformation! 🚀
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
