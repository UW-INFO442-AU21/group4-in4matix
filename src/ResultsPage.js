// import { Canvas } from 'canvasjs';
// var CanvasJSReact = require('./assets/canvasjs.react');
import CanvasJSReact from './assets/canvasjs.react';
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function ResultsPage(props) {

  let results = props.results;

  console.log("The results are:", results);

  function hasTakenQuiz() {
    for (var i = 0; i < results.length; i++) {
      if (results[i].y !== 0) {
        return true;
      }
    }
    return false;
  }

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

  function renderChart() {
    const options = {
			exportEnabled: true,
			animationEnabled: true,
			title: {
				text: "Imposter Syndrome Results"
			},
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}%",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				indexLabel: "{label} - {y}%",
				dataPoints: results
			}]
		}
    return(
      <div>
        <CanvasJSChart options={options} />
      </div>
    )
  }
  
  function contentToRender() {
    if (hasTakenQuiz()) {
      return(
        <div>
          <p>The user has taken the quiz.</p>
          <p>{hasTakenQuiz() ? JSON.stringify(results) : ''}</p>
          {renderChart()}
        </div>
        );
    } else {
      return(
        <p>The user has not taken the quiz.</p>
      );
    }
  }

  return(
    <div>
      <h1>WORK IN PROGRESS - CONTENT TO COME</h1>
      <h1>This is the results page! Once users complete the quiz, we can tell them to check here for results.</h1>

      <p>The code that builds the visualization can be stored here, or we can keep it in another file (like QuizPage vs. QuizContent).</p>

      <p>Since we won't display much data besides the visualization itself, I opted for a single file to manage this.</p>

      {contentToRender()}

      {/* <p>The user has {hasTakenQuiz() ? 'taken' : 'not taken'} the quiz.</p>
      <p>{hasTakenQuiz() ? JSON.stringify(results) : ''}</p> */}
    </div>
  )
}

export default ResultsPage;