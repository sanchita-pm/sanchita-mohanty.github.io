import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  let currentTheme;
  if (localStorage) {
    currentTheme = localStorage.getItem("theme");
  }
  
  // Updated theme format for react-github-calendar v4+
  const colourTheme = {
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "70px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
      My Code <strong className="imp-text-color">Footprint</strong>
      </h1>
      <GitHubCalendar
        username="sanchita-mohanty"
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        colorScheme={currentTheme === "dark" ? "dark" : "light"}
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
