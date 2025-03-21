import "./index.css";
import "./App.css";
import NavBar from "./NavBar";
import FooterInfo from "./FooterInfo";
import Hero from "./Hero";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <Hero />
      </main>
      <hr />
      <footer>
        <FooterInfo />
      </footer>
    </div>
  );
}

export default App;
