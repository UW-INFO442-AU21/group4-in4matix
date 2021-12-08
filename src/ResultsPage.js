// import { Canvas } from 'canvasjs';
// var CanvasJSReact = require('./assets/canvasjs.react');
import CanvasJSReact from './assets/canvasjs.react';
import { Link } from 'react-router-dom';
import './ResultsPage.css';
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// contains the content for the results page

function renderChart(results) {
  // the main variable that sets up the pie chart. allows for results to be exported!
  const options = {
    exportEnabled: true,
    animationEnabled: true,
    data: [{
      type: "pie",
      startAngle: 75,
      showInLegend: "true",
      toolTipContent: "{indexLabel} ({name}) {y}%",
      legendText: "{indexLabel}",
      indexLabelFontSize: 16,
      dataPoints: results
    }]
  }

  // displays the pie chart
  return(
    <div>
      <CanvasJSChart options={options} />
    </div>
  )
}

// determines if the quiz has been taken, used in contentToRender
function hasTakenQuiz(results) {
  for (var i = 0; i < results.length; i++) {
    if (results[i].y !== 0) {
      return true;
    }
  }
  return false;
}

// determines what to display based on if the quiz has been taken which comes from hasTakenQuiz
// if no, displays the results
// if yes, prompts the users to take the quiz 
function contentToRender(results) {
  if (hasTakenQuiz(results)) {
    return(
      <div className="content">
        <div className="flex-container">
          <span className="flex-item top-result">{topResult(results)}</span>
            <div className="pieChart flex-item">
              {renderChart(results)}
            </div>

        </div>
        <p>DISCLAIMER: This is not medical advice. These results are meant to be used as a general guideline.</p>
      </div>
      
    );
  } else {
    return(
      <div className="center">
        <p className="center">You have not taken the quiz.</p>
        <Link aria-label="Take the quiz" className="btn btn-success" role="button" to="/group4-in4matix/quiz">
                Take the Quiz!
        </Link>
      </div>
    );
  }
}

// This function returns the character that the user most aligns with,
// based on how they answered the questionnaire. Ties are broken in
// no particular order, only one character alignment is given.
function topResult(results) {
  // find the name of the top result
  var topResult = results[0].y;
  var topName = results[0].indexLabel;
  for (var i = 0; i < results.length; i++) {
    if (results[i].y > topResult) {
      topResult = results[i].y;
      topName = results[i].indexLabel;
    }
  }

  // generate a path to the imposter page for the top character based on results
  var path = "/group4-in4matix/";
  if (topName === "Violet") {
    path += "type-1";
  } else if (topName === "Mr. Incredible") {
    path += "type-2";
  } else if (topName === "Edna Mode") {
    path += "type-3";
  } else if (topName === "Dash") {
    path += "type-4";
  } else {
    path += "type-5";
  }
  // displays top result and gives option to go directly to the corresponding type page using topName adjusted above
  return(
    <div className="text-center">
      <h2>You got {topName}!</h2>
      <p>Click the button to see how you and {topName} can work to defeat imposter syndrome. To learn more about the other imposter types, go to the corresponding tab on the dropdown menu.</p>
      <div>
      <Link aria-label="Information about {topName}" className="btn btn-success" role="button" to={path}> 
        {topName}
      </Link>
      </div>
    </div>
  )
}

// updates the state variable based on the results, prints result sin the console, and displays content based on contentToRender 
function ResultsPage(props) {

  let results = props.results;

  console.log("The results are:", results);

  return(
    <div className="results-page">
      <h1>Imposter Syndrome Results</h1>

      {contentToRender(results)} 

      {/* <p>The user has {hasTakenQuiz() ? 'taken' : 'not taken'} the quiz.</p>
      <p>{hasTakenQuiz() ? JSON.stringify(results) : ''}</p> */}
    </div>
  )
}

export default ResultsPage;
