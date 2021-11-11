<!-- Your platform (jquery) scripts. -->

<link href="https://unpkg.com/survey-jquery@1.8.77/modern.css" type="text/css" rel="stylesheet" />
<script src="https://unpkg.com/survey-jquery@1.8.77/survey.jquery.min.js"></script>
function QuizContent() {
  Survey.StylesManager.applyTheme("modern");

  var surveyJSON = {"pages":[{"name":"page1","elements":[{"type":"radiogroup","name":"question1","title":"Which of the following most applies to you?","isRequired":true,"choices":[{"value":"item1","text":"You have been accused of being a micromanager (P) "},{"value":"item2","text":"You find yourself staying at work/school later than your peers, even after you’ve completed all your day’s required tasks (SH) "},{"value":"item3","text":"You are used to excelling without much effort (G) "},{"value":"item4","text":"You strongly believe that you need to accomplish things on your own (S)"},{"value":"item7","text":"You typically won’t apply to a job unless you meet every listed qualification/requirement (E)"},{"value":"item6","text":"None of the above apply to me"}]},{"type":"radiogroup","name":"question2","visibleIf":"{question1} notempty","title":"Which of the following most applies to you?","isRequired":true,"choices":[{"value":"item1","text":"You typically earn “Straight A’s” or “gold stars” in everything you do (G)"},{"value":"item2","text":"You get stressed when you’re not working and find downtime wasteful (SH)"},{"value":"item3","text":"You constantly seek out trainings and certifications because you think you need to improve your skills in order to succeed (E)"},{"value":"item4","text":"You often find yourself saying “I don’t need anyone’s help (S)"},{"value":"item5","text":"You struggle to delegate, and when you do, you feel frustrated and disappointed in the results (P)"}],"hasOther":true,"otherText":"None of the above apply to me"}]}]}

  function sendDataToServer(survey) {
    //send Ajax request to your web server.
    alert("The results are:" + JSON.stringify(survey.data));
  }

  var survey = new Survey.Model(surveyJSON);
  $("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
  });
  return(
    <div>
      <p>This is being rendered from QuizContent.js.</p>
      <p>Ideally, we will copy the code from Survey.js into this file. Only code pertaining to building and running the interactive quiz should be stored here.</p>
      <p>Information ABOUT the quiz (i.e. description) should be stored in QuizPage.js</p>

      <div id="surveyContainer"></div>
    </div>
  )
}

export default QuizContent;
