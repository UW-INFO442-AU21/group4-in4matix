import logo from './logo.svg';
import './App.css';
import MenuBar from './MenuBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Type1 from './Type-1.js';

function App() {
  return (
    <div>
      <MenuBar />
      <div>
        <h1>
          Mission Statement
        </h1>
        <p>
          Imposter Syndrome describes feeling of not being qualified coupled with fear that everyone around you will find out that you are an 'imposter.' Our research suggests that this is common feeliing for many, particularly for female-identifying individuals pursuing a career in tech. Be Incredible seeks to help users explore their relationship with imposter syndrome and how they can  triumph over their related struggles.
        </p>
      </div>
      <div>
        <h1>
          Quiz Overview
        </h1>
        <p>
          Psychololigsts have determined that there are five main archetypes of imposter syndrome. Be Incredible includes a breif quiz to help you identify which (if any) of the types apply to you. Take this quiz to learn more about yourself, the experiences of others like you, aand what you can do to combat  imposter syndrome.
        </p>
        <p class='orange'>
          Take the quiz here *link to survey*
        </p>
      </div>

      <Switch>
        <Route path="/type-1"> <Type1 /> </Route>
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
