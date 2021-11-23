import * as Survey from "survey-react";
import "survey-react/survey.css";

function QuizContent(props) {

  const results = props.results;
  const setResults = props.setResults;

  Survey.StylesManager.applyTheme("bootstrap");

  var surveyJSON = {"pages":[{"name":"page1","elements":[{"type":"radiogroup","name":"question1","title":"Which of the following most applies to you?","isRequired":true,"choices":[{"value":"P","text":"You have been accused of being a micromanager"},{"value":"SH","text":"You find yourself staying at work/school later than your peers, even after you’ve completed all your day’s required tasks"},{"value":"G","text":"You are used to excelling without much effort"},{"value":"S","text":"You strongly believe that you need to accomplish things on your own"},{"value":"E","text":"You typically won’t apply to a job unless you meet every listed qualification/requirement"},{"value":"N","text":"None of the above apply to me"}]}]},{"name":"page2","elements":[{"type":"radiogroup","name":"question2","title":"Which of the following most applies to you?","isRequired":true,"choices":[{"value":"G","text":"You typically earn “Straight A’s” or “gold stars” in everything you do "},{"value":"SH","text":"You get stressed when you’re not working and find downtime wasteful"},{"value":"E","text":"You constantly seek out trainings and certifications because you think you need to improve your skills in order to succeed"},{"value":"S","text":"You often find yourself saying “I don’t need anyone’s help"},{"value":"P","text":"You struggle to delegate, and when you do, you feel frustrated and disappointed in the results"},{"value":"N","text":"None of the above apply to me"}],"otherText":"None of the above apply to me"}]},{"name":"page3","elements":[{"type":"radiogroup","name":"question3","title":"Which of the following most applies to you?","isRequired":true,"choices":[{"value":"S","text":"You frame requests in terms of project requirements, rather than your needs as a person"},{"value":"E","text":"Even after you’ve been in your role for a while, you feel like you still don’t know “enough”"},{"value":"G","text":"You were told frequently as a child that you were the “smart one” in your family or peer group?"},{"value":"SH","text":"You’ve sacrificed your hobbies and passions for work "},{"value":"P","text":"When you miss the (insanely high) mark on something, you accuse yourself of “not being cut out” for your job and ruminate on it for days"},{"value":"N","text":"None of the above apply to me"}]}]},{"name":"page4","elements":[{"type":"radiogroup","name":"question","title":"Which of the following most applies to you?","isRequired":true,"choices":[{"value":"E","text":"You shudder when someone says you’re an expert"},{"value":"P","text":"You feel like your work must be 100% perfect, 100% of the time "},{"value":"SH","text":"You feel like you haven’t truly earned your title, despite numerous degrees and achievements "},{"value":"S","text":"You feel like you’ve failed if you had to ask for help"},{"value":"G","text":"You do not want a mentor because you can handle/figure things out on your own"},{"value":"N","text":"None of the above apply to me"}]}]},{"name":"page5","elements":[{"type":"radiogroup","name":"question6","title":"Which of the following most applies to you?","isRequired":true,"choices":[{"value":"SH","text":"You feel pressed to work harder and longer than those around you to prove your worth"},{"value":"E","text":"You feel ashamed when you don’t know something"},{"value":"P","text":"When you produce a successful/good product, you still view your efforts as a failure if you find a minor flaw in your work"},{"value":"G","text":"When you’re faced with a setback, your confidence plummets because not performing well provokes a feeling of shame"},{"value":"S","text":"You didn’t mind transitioning to virtual work/learning because you were able to work alone/more independently"},{"value":"N","text":"None of the above apply to me"}]}]},{"name":"page6","elements":[{"type":"radiogroup","name":"question5","title":"Which of the following most applies to you?","isRequired":true,"choices":[{"value":"E","text":"You focus on what you know or can do"},{"value":"G","text":"You often avoid challenges because it’s so uncomfortable to try something you’re not great at"},{"value":"SH","text":"You feel the need to juggle multiple roles at once and are very disappointed when you fall short in any of the roles because you feel as though you should be able to handle everything"},{"value":"P","text":"You hate functioning in the dark and prefer to know every detail"},{"value":"S","text":"You refuse to take credit for work your work if you received any kind of assistance"},{"value":"N","text":"None of the above apply to me"}]}]},{"name":"page7","elements":[{"type":"radiogroup","name":"question7","title":"Based on the names, which of the following types of imposter syndrome do you think you fall under?","isRequired":true,"choices":[{"value":"E","text":"The Expert "},{"value":"G","text":"The Genius "},{"value":"P","text":"The Perfectionist "},{"value":"S","text":"The Soloist "},{"value":"SH","text":"The Superhero"},{"value":"N","text":"I don't think I have imposter syndrome"}]}]}],"showCompletedPage":false,"showProgressBar":"bottom"}

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
        p++;
      } else if (survey[key] === "S") {
        s++;
      } else if (survey[key] === "SH") {
        sh++;
      } else if (survey[key] === "E") {
        e++;
      } else if (survey[key] === "G") {
        g++;
      } else {
        n++;
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
        } else if (item.indexLabel === "Dash") {
          item.y = s;
        } else if (item.indexLabel === "Mr. Incredible") {
          item.y = sh;
        } else if (item.indexLabel === "Elastagirl") {
          item.y = e;
        } else if (item.indexLabel === "Edna Mode") {
          item.y = g;
        } else {
          item.y = n;
        }
        return item;
      })

      setResults(resultsCopy);

    }

    var currentResults = [{"y":p,"indexLabel":"Violet"},
                          {"y":s,"indexLabel":"Dash"},
                          {"y":sh,"indexLabel":"Mr. Incredible"},
                          {"y":e,"indexLabel":"Elastagirl"},
                          {"y":g,"indexLabel":"Edna Mode"},
                          {"y":n,"indexLabel":"None"}];

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
