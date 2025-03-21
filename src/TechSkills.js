import "./TechSkills.css";
import js from "./images/tech_logos/icon-js.png";
import react from "./images/tech_logos/icon-react.png";
import css from "./images/tech_logos/icon-css.png";
import html from "./images/tech_logos/icon-html.png";
import github from "./images/tech_logos/github.png";
import responsive from "./images/tech_logos/responsive.png";
import ai from "./images/tech_logos/icon-AI.png";
import api from "./images/tech_logos/icon-api.png";
import bootstrap from "./images/tech_logos/bootstrap.png";
import vs from "./images/tech_logos/editor.png";
import git from "./images/tech_logos/Git-Icon-1788C.png";
import python from "./images/tech_logos/icon-python.png";
import hosting from "./images/tech_logos/hosting.png";
import seo from "./images/tech_logos/seo.png";

function TechSkills() {
  return (
    <div className="TechSkills">
      <h4>Skills</h4>
      <p>Skills, tools and technologies that I enjoy working with:</p>
      <div className="grid">
        <div className="skill">
          <img src={js} alt="Javascript"></img>
        </div>
        <div className="skill rotating">
          <img src={react} alt="React"></img>
        </div>
        <div className="skill">
          <img src={css} alt="CSS"></img>
        </div>
        <div className="skill">
          <img src={html} alt="HTML"></img>
        </div>
        <div className="skill">
          <img src={github} alt="Github"></img>
        </div>
        <div className="skill">
          <img src={responsive} alt="Responsive Design"></img>
        </div>
        <div className="skill">
          <img src={vs} alt="VS Code"></img>
        </div>
        <div className="skill rotating">
          <img src={ai} alt="AI"></img>
        </div>
        <div className="skill">
          <img src={api} alt="API"></img>
        </div>
        <div className="skill">
          <img src={bootstrap} alt="bootstrap"></img>
        </div>
        <div className="skill">
          <img src={git} alt="Git"></img>
        </div>
        <div className="skill">
          <img src={python} alt="Python"></img>
        </div>
        <div className="skill">
          <img src={hosting} alt="Hosting"></img>
        </div>
        <div className="skill">
          <img src={seo} alt="SEO"></img>
        </div>
      </div>
    </div>
  );
}

export default TechSkills;
