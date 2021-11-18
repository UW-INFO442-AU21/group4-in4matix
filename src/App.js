import './App.css';
import MenuBar from './MenuBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage.js';
import QuizPage from './QuizPage.js';
import ResultsPage from './ResultsPage.js';
import Type1 from './Type-1.js';
import Type2 from './Type-2.js';
import Type3 from './Type-3.js';
import Type4 from './Type-4.js';
import Type5 from './Type-5.js';

function App() {
  return (
    <div>
      <MenuBar />

      <Switch>
        <Route path="/group4-in4matix/quiz"> <QuizPage /> </Route>
        <Route path="/group4-in4matix/results"> <ResultsPage /> </Route>
        <Route path="/group4-in4matix/type-1"> <Type1 /> </Route>
        <Route path="/group4-in4matix/type-2"> <Type2 /> </Route>
        <Route path="/group4-in4matix/type-3"> <Type3 /> </Route>
        <Route path="/group4-in4matix/type-4"> <Type4 /> </Route>
        <Route path="/group4-in4matix/type-5"> <Type5 /> </Route>
        <Route path="/group4-in4matix"> <HomePage /> </Route>
      </Switch>

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
