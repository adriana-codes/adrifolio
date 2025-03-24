import "./Projects.css";
import dictionappy from "./images/projects/Dictionappy.png";
import react_weather from "./images/projects/React_Weather_App.png";
import cocktail_maker from "./images/projects/cocktail-maker-in-action.png";
import world_clock from "./images/projects/world-clock.png";

function Projects() {
  return (
    <div className="Projects" id="projects">
      <h3> Projects</h3>
      <p>Here is a sample of things I've built:</p>
      <section className="grid">
        <div>
          <img src={dictionappy} alt="Project"></img>
        </div>
        <div className="Project-block">
          <h4 className="Project-title">Dictionappy</h4>
          <p className="Project-description">
            The Virtual Dictionary project will allow you to search almost any
            word. It has two API integrations one for the definitions and
            another for the images.
          </p>
          <h5>Tools</h5>
          <div className="Tools-section">
            <span className="Tools-btn">API</span>
            <span className="Tools-btn">CSS</span>
            <span className="Tools-btn">Github</span>
            <span className="Tools-btn">HTML</span>
            <span className="Tools-btn">React.js</span>
          </div>
          <div>
            <a
              href="https://dictionappy.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="Btn-demo"
            >
              Demo
            </a>
          </div>
        </div>
      </section>
      <section className="grid">
        <div>
          <img src={react_weather} alt="Project"></img>
        </div>
        <div className="Project-block">
          <h4 className="Project-title">Weather App</h4>
          <p className="Project-description">
            This weather app was built using React with an API integration. It
            includes a search engine to search any city, and will give you
            details on humidity, wind speed, a description of the weather, and a
            five day forecast.
          </p>
          <h5>Tools</h5>
          <div className="Tools-section">
            <span className="Tools-btn">API</span>
            <span className="Tools-btn">CSS</span>
            <span className="Tools-btn">Github</span>
            <span className="Tools-btn">HTML</span>
            <span className="Tools-btn">React.js</span>
          </div>
          <div>
            <a
              href="https://adrianacodes-react-weather-app.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="Btn-demo"
            >
              Demo
            </a>
          </div>
        </div>
      </section>
      <section className="grid">
        <div>
          <img src={cocktail_maker} alt="Project"></img>
        </div>
        <div className="Project-block">
          <h4 className="Project-title">The Cocktail Maker</h4>
          <p className="Project-description">
            Motivated by my passion for the wine and spirit's industry. I
            created this cocktail recipe maker with the help of an AI
            integration.
            <br />
            You can input any ingredient and you'll receive a recipe based on
            it. Try it!
          </p>
          <h5>Tools</h5>
          <div className="Tools-section">
            <span className="Tools-btn">AI</span>
            <span className="Tools-btn">CSS</span>
            <span className="Tools-btn">Github</span>
            <span className="Tools-btn">HTML</span>
          </div>
          <div>
            <a
              href="https://thecocktailmaker.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="Btn-demo"
            >
              Demo
            </a>
          </div>
        </div>
      </section>
      <section className="grid">
        <div>
          <img src={world_clock} alt="Project"></img>
        </div>
        <div className="Project-block">
          <h4 className="Project-title">World Clock</h4>
          <p className="Project-description">
            I built this world clock app using JS timing events, date
            formatting, and timezones.
          </p>
          <h5>Tools</h5>
          <div className="Tools-section">
            <span className="Tools-btn">Javascript</span>
            <span className="Tools-btn">CSS</span>
            <span className="Tools-btn">Github</span>
            <span className="Tools-btn">HTML</span>
          </div>
          <div>
            <a
              href="https://adriana-codes-worldclock.netlify.app/"
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
  );
}

export default Projects;
