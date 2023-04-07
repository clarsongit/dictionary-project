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
          <Dictionary />
        </main>
        <footer>
          This project was coded by Chloe Larson and is open-sourced on Github.
        </footer>
      </div>
    </div>
  );
}

export default App;
