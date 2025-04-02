import React from "react";
import "./Projects.css";
import DisplayProjects from "./DisplayProjects";

function Projects() {
  return (
    <div className="Projects" id="projects">
      <h3>
        {" "}
        <span className="highlight">Projects</span>
      </h3>
      <p>Here is a sample of things I've built:</p>
      <DisplayProjects />
    </div>
  );
}

export default Projects;
