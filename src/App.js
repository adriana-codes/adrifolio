import "./index.css";
import "./App.css";
import NavBar from "./NavBar";
import FooterInfo from "./FooterInfo";
import Hero from "./Hero";
import TechSkills from "./TechSkills";
import Projects from "./Projects";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <Hero />
        <TechSkills />
        <Projects />
      </main>
      <hr />
      <footer>
        <FooterInfo />
      </footer>
    </div>
  );
}

export default App;
