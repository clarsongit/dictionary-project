import logo from "./cl-logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="img-fluid App-logo" alt="cl logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="dictionary" />
        </main>
        <footer>
          This project was coded by{" "}
          <a
            href="https://clarson.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chloe Larson
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/clarsongit/dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github.
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
