import surveyJSON from './quiz.json';
import * as Survey from "survey-react";
import "survey-react/survey.css";

// Tracks the quiz results and updates the state variable created when the user enters or refreshes the page
function QuizContent(props) {

  // syncs with the state variable 
  const results = props.results;
  const setResults = props.setResults;
  
  // style of the quiz (stone = black)
  Survey.StylesManager.applyTheme("stone");

  // the variable used to track quiz results 
  var survey = new Survey.Model(surveyJSON);

  // takes complete survey and converts to an array that's compatible with Canvas.js
  function convertResults(survey, results) {

    var p = 0;
    var s = 0;
    var sh = 0;
    var e = 0;
    var g = 0;
    var n = 0;
    
    for (var key in survey) {
      if(survey[key] === "P"){
        p+=14.29;
      } else if (survey[key] === "S") {
        s+=14.29;
      } else if (survey[key] === "SH") {
        sh+=14.29;
      } else if (survey[key] === "E") {
        e+=14.29;
      } else if (survey[key] === "G") {
        g+=14.29;
      } else {
        n+=14.29;
      } 
    }

    // delayed computation until after survey is complete
    const handleResults = (event) => {
      // create a copy of state and update elements as needed
      // item: the current element of the results array
      // index: the current entry number we are looking at
      const resultsCopy = results.map((item) => {
        // update current counts with new results
        if (item.indexLabel === "Violet") {
          item.y = p;
          item.name = "Perfectionist";
        } else if (item.indexLabel === "Dash") {
          item.y = s;
          item.name = "Soloist";
        } else if (item.indexLabel === "Mr. Incredible") {
          item.y = sh;
          item.name = "Superhuman";
        } else if (item.indexLabel === "Elastigirl") {
          item.y = e;
          item.name = "Expert";
        } else if (item.indexLabel === "Edna Mode") {
          item.y = g;
          item.name = "Genius";
        } else {
          item.y = n;
          item.name = "N/A";
        }
        return item;
      })

      setResults(resultsCopy);

    }
    // the format the canvas.js needs to display results
    var currentResults = [{"y":p,"indexLabel":"Violet","name":"Perfectionist"},
                          {"y":s,"indexLabel":"Dash", "name":"Soloist"},
                          {"y":sh,"indexLabel":"Mr. Incredible", "name":"Superhuman"},
                          {"y":e,"indexLabel":"Elastigirl", "name":"Expert"},
                          {"y":g,"indexLabel":"Edna Mode","name":"Genius"},
                          {"y":n,"indexLabel":"None", "name":"N/A"}];

    handleResults(); // final step: update state

    return currentResults;
  }

  // signals quiz has been complete and starts processing results by calling convertResults
  survey
    .onComplete
    .add(function (sender) {
      var surveyData = sender.data;
      console.log("Survey done!");
      var quizResults = convertResults(surveyData, results);
      console.log(quizResults);
    })
    
  return(
    <div>
      <Survey.Survey model={survey} />
    </div>
  )
}

export default QuizContent;
