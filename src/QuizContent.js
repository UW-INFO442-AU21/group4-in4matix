import surveyJSON from './quiz.json';
import * as Survey from "survey-react";
import "survey-react/survey.css";
import './Survey.css';

function QuizContent(props) {

  const results = props.results;
  const setResults = props.setResults;

  Survey.StylesManager.applyTheme("stone");

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

    // delayed computation
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
        } else if (item.indexLabel === "Elastagirl") {
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

    var currentResults = [{"y":p,"indexLabel":"Violet","name":"Perfectionist"},
                          {"y":s,"indexLabel":"Dash", "name":"Soloist"},
                          {"y":sh,"indexLabel":"Mr. Incredible", "name":"Superhuman"},
                          {"y":e,"indexLabel":"Elastagirl", "name":"Expert"},
                          {"y":g,"indexLabel":"Edna Mode","name":"Genius"},
                          {"y":n,"indexLabel":"None", "name":"N/A"}];

    handleResults(); // final step: update state

    return currentResults;
  }

  /*const handleSubmission = (event) => {
    // console.log(event);
    setResults(results); // this line triggers an infinte recursive loop
    // console.log(survey);
  }*/

  survey
    .onComplete
    .add(function (sender) {
      // var mySurvey = sender;
      var surveyData = sender.data;
      console.log("Survey done!");
      // console.log(survey.data);
      // console.log(mySurvey);
      // console.log(surveyData); // same as survey.data, this is likely safer
      // var results = convertResults(sender.data);
      var quizResults = convertResults(surveyData, results);
      console.log(quizResults);
      // handleSubmission();
    })
    
  return(
    <div>
      <Survey.Survey model={survey} />
    </div>
  )
}

export default QuizContent;
