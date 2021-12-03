import './App.css';
import MenuBar from './MenuBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './HomePage.js';
import QuizPage from './QuizPage.js';
import ResultsPage from './ResultsPage.js';
import Type1 from './Type-1.js';
import Type2 from './Type-2.js';
import Type3 from './Type-3.js';
import Type4 from './Type-4.js';
import Type5 from './Type-5.js';

function App() {

  const freshResults = [{"y":0,"indexLabel":"Violet"},
                        {"y":0,"indexLabel":"Dash"},
                        {"y":0,"indexLabel":"Mr. Incredible"},
                        {"y":0,"indexLabel":"Elastagirl"},
                        {"y":0,"indexLabel":"Edna Mode"},
                        {"y":0,"indexLabel":"None"}];

  // This state variable manages the user's quiz results.
  // The variable is updated in QuizContent.js
  // The variable's contents are used in ResultsPage.js
  const [results, setResults] = useState(freshResults);

  return (
    <div id="page-container">
      <div id="content-wrap">
        <MenuBar />

        <Switch>
          <Route path="/group4-in4matix/quiz"> <QuizPage results={results} setResults={setResults} freshResults={freshResults} /> </Route>
          <Route path="/group4-in4matix/results"> <ResultsPage results={results} /> </Route>
          <Route path="/group4-in4matix/type-1"> <Type1 /> </Route>
          <Route path="/group4-in4matix/type-2"> <Type2 /> </Route>
          <Route path="/group4-in4matix/type-3"> <Type3 /> </Route>
          <Route path="/group4-in4matix/type-4"> <Type4 /> </Route>
          <Route path="/group4-in4matix/type-5"> <Type5 /> </Route>
          {/* <Route path="/group4-in4matix"> <HomePage /> </Route> */}
          <Route path="/"> <HomePage /> </Route>
        </Switch>
      </div>

      <footer aria-label="Be Incredible metadata">
        <p>&copy; 2021 University of Washington. INFO 442: IN4MATIX</p>
      </footer>
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
