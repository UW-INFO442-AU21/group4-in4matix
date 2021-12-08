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

// The contains the state variable of the quiz results and handles site routing and the footer
function App() {
  // establishes a variable that stores quiz results
  const freshResults = [{"y":0,"indexLabel":"Violet"},
                        {"y":0,"indexLabel":"Dash"},
                        {"y":0,"indexLabel":"Mr. Incredible"},
                        {"y":0,"indexLabel":"Elastigirl"},
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
        {/* establishes routing between pages */}
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
      {/* Footer content for the whole site */}
      <footer aria-label="Be Incredible metadata">
        <p>&copy; 2021 University of Washington. INFO 442: IN4MATIX</p>
      </footer>
    </div>
  );
}

export default App;
