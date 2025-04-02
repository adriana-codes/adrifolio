import ProjectData from "./ProjectData";
import "./Projects.css";

const DisplayProjects = () => {
  return (
    <div className="Projects">
      {ProjectData.map((project) => (
        <div key={project.id}>
          <section className="grid">
            <div>
              <img src={project.image} alt={project.name} />
            </div>
            <div className="Project-block">
              <h4 className="Project-title">{project.name}</h4>
              <p className="Project-description">{project.description}</p>

              <h5>Tools</h5>
              <div className="Tools-section">
                {project.tools.map((tool, index) => (
                  <span key={index} className="Tools-btn">
                    {tool}
                  </span>
                ))}
              </div>

              <div>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="Btn-demo"
                >
                  Demo
                </a>
              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default DisplayProjects;
