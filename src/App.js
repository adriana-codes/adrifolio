import "./index.css";
import "./App.css";
import NavBar from "./NavBar";
import FooterInfo from "./FooterInfo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main></main>
      <footer>
        <FooterInfo />
      </footer>
    </div>
  );
}

export default App;
