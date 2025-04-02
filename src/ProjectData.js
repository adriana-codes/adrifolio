import dictionappy from "./images/projects/Dictionappy.png";
import react_weather from "./images/projects/React_Weather_App.png";
import cocktail_maker from "./images/projects/cocktail-maker-in-action.png";
import world_clock from "./images/projects/world-clock.png";

const ProjectData = [
  {
    name: "Dictionappy",
    description:
      "The Virtual Dictionary project will allow you to search almost any word. It has two API integrations one for the definitions and another for the images.",
    tools: ["API", "CSS", "Github", "HTML", "React.js"],
    image: dictionappy,
    demoLink: "https://dictionappy.netlify.app/",
  },
  {
    name: "Weather App",
    description:
      "This weather app was built using React with an API integration. It includes a search engine to search any city, and will give you details on humidity, wind speed, a description of the weather, and a five day forecast.",
    tools: ["API", "CSS", "Github", "HTML", "React.js"],
    image: react_weather,
    demoLink: "https://adrianacodes-react-weather-app.netlify.app/",
  },
  {
    name: "The Cocktail Maker",
    description:
      "Motivated by my passion for the wine and spirit's industry. I created this cocktail recipe maker with the help of an AI integration. You can input any ingredient and you'll receive a recipe based on it. Try it!",
    tools: ["AI", "CSS", "Github", "HTML", "Javascript"],
    image: cocktail_maker,
    demoLink: "https://thecocktailmaker.netlify.app/",
  },
  {
    name: "World Clock",
    description:
      "I built this world clock app using JS timing events, date formatting, and timezones.",
    tools: ["CSS", "Github", "HTML", "Javascript"],
    image: world_clock,
    demoLink: "https://adriana-codes-worldclock.netlify.app/",
  },
];

export default ProjectData;
