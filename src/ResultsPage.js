// import { Canvas } from 'canvasjs';
// var CanvasJSReact = require('./assets/canvasjs.react');
import CanvasJSReact from './assets/canvasjs.react';
import { Link } from 'react-router-dom';
import './ResultsPage.css';
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

  //toolTipContent: "<a href='\"'http://apple.com'\"' target='\"'_blank'\"' >{indexLabel} ({name}) </a>",

  //way to dynamically render top result and link to page


  
  function contentToRender() {
    if (hasTakenQuiz()) {
      return(
        <div>
          <p>Here are your results! We want to remind you that these results are meant to be used as a guideline.</p> {/*Or a similar disclaimer*/}
          <p>To learn more about each imposter syndrome type, please visit the corresponding tab in the menu bar.</p>

          <div className="flex-container">
            <div className="flex-item pieChart">{renderChart()}</div>
            <h2 className="flex-item top-result"> top result text will go here</h2> {/* show top result and link to page */}
            {/* <p>{hasTakenQuiz() ? JSON.stringify(results) : ''}</p> */}
          </div>
        </div>
        );
    } else {
      return(
        <div>
          <p>The user has not taken the quiz.</p>
          <Link className="btn btn-danger" role="button" to="/group4-in4matix/quiz">
                  Take the Quiz!
          </Link>
        </div>
      );
    }
  }

  return(
    <div className="results-page">
      <h1 className="heading-1">Imposter Syndrome Results</h1>

        <div>{contentToRender()}</div> 

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