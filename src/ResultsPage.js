// import { Canvas } from 'canvasjs';
// var CanvasJSReact = require('./assets/canvasjs.react');
import CanvasJSReact from './assets/canvasjs.react';
import { Link } from 'react-router-dom';
import './ResultsPage.css';
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function renderChart(results) {
  const options = {
    exportEnabled: true,
    animationEnabled: true,
    /*title: {
      display: false,
      text: "Imposter Syndrome Results"
    },*/
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

  return(
    <div>
      <CanvasJSChart options={options} />
    </div>
  )
}

function hasTakenQuiz(results) {
  for (var i = 0; i < results.length; i++) {
    if (results[i].y !== 0) {
      return true;
    }
  }
  return false;
}

function contentToRender(results) {
  if (hasTakenQuiz(results)) {
    return(
      <div>
        <p>Here are your results! We want to remind you that these results are meant to be used as a guideline.</p> {/*Or a similar disclaimer*/}
        <p>To learn more about each imposter syndrome type, please visit the corresponding tab in the menu bar.</p>

        <div className="flex-container">
          <div className="flex-item pieChart">
            {renderChart(results)}
          </div>
          <div className="flex-item top-result">
            <p>{topResult(results)}</p>
            {/* <p>{hasTakenQuiz() ? JSON.stringify(results) : ''}</p> */}
          </div>
        </div>
      </div>
    );
  } else {
    return(
      <div>
        <p>You have not taken the quiz.</p>
        <Link className="btn btn-danger" role="button" to="/group4-in4matix/quiz">
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

  // generate a path to the imposter page for the top character
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

  return(
    <div>
      <h2>You have the most in common with {topName}!</h2>
      <p>Click the button to see how you and {topName} can work to defeat imposter syndrome.</p>
      <Link className="btn btn-primary" role="button" to={path}> 
        {topName}
      </Link>
    </div>
  )
}

function ResultsPage(props) {

  let results = props.results;

  console.log("The results are:", results);
  
  // function renderChart() {
  //   var chart = new CanvasJS.Chart("chartContainer", {
  //     animationEnabled: true,
  //     title: {
  //       text: "Imposter Syndrome Results"
  //     },
  //     data: [{
  //       type: "pie",
  //       startAngle: 240,
  //       yValueFormatString: "##0.00\"%\"",
  //       indexLabel: "{label} {y}",
  //       dataPoints: results
  //     }]
  //   });
  //   chart.render();
  // }

  //toolTipContent: "<a href='\"'http://apple.com'\"' target='\"'_blank'\"' >{indexLabel} ({name}) </a>",

  //way to dynamically render top result and link to page

  return(
    <div className="results-page">
      <h1 className="heading-1">Imposter Syndrome Results</h1>

        <div>{contentToRender(results)}</div> 

      {/* <p>The user has {hasTakenQuiz() ? 'taken' : 'not taken'} the quiz.</p>
      <p>{hasTakenQuiz() ? JSON.stringify(results) : ''}</p> */}
    </div>
  )
}

export default ResultsPage;


// other structure for chart 
    /*const options = {
      type: 'pie',
      data: {
        datasets: [{
          data: results //each is an object
         backgroundColor: [
            "#F7464A",
            "#46BFBD",
            "#FDB45C",
            "#949FB1",
            "#4D5360",
          ],
          label: 'Imposter Results'
        }]
      },
      /*options: {
        responsive: true,
        legend: {
          position: 'bottom',
        },
        title: {
          display: true,
          text: 'Imposter Syndrome Results'
        },
        animation: {
          animateScale: true,
          animateRotate: true
        },
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
               var dataset = data.datasets[tooltipItem.datasetIndex];
              var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
                return previousValue + currentValue;
              });
              var currentValue = dataset.data[tooltipItem.index];
              var precentage = Math.floor(((currentValue/total) * 100)+0.5);
              return precentage + "%";
            }
          }
        }
      }
    };*/