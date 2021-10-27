import logo from './logo.svg';
import './App.css';
import MenuBar from './MenuBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <MenuBar />
      <div>
        <h1>
          Mission Statement
        </h1>
        <p>
          Imposter Syndrome describes feeling of not being qualified coupled
          with fear that everyone around you will find out that you are an 'imposter.' Our research suggests that this is common feeliing for many, particularly for female-identifying individuals pursuing a career in tech.
        </p>
      </div>
      <div>
        <h1>
          Quiz Overview
        </h1>
        <p>
        </p>
      </div>
    </div>

    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
