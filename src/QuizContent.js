import * as Survey from "survey-react";
import "survey-react/survey.css";

function QuizContent() {
  Survey.StylesManager.applyTheme("bootstrap");

  var surveyJSON = {"pages":[{"name":"page1","elements":[{"type":"radiogroup","name":"question1","title":"Which of the following most applies to you?","isRequired":true,"choices":[{"value":"item1","text":"You have been accused of being a micromanager (P) "},{"value":"item2","text":"You find yourself staying at work/school later than your peers, even after you’ve completed all your day’s required tasks (SH) "},{"value":"item3","text":"You are used to excelling without much effort (G) "},{"value":"item4","text":"You strongly believe that you need to accomplish things on your own (S)"},{"value":"item7","text":"You typically won’t apply to a job unless you meet every listed qualification/requirement (E)"},{"value":"item6","text":"None of the above apply to me"}]},{"type":"radiogroup","name":"question2","visibleIf":"{question1} notempty","title":"Which of the following most applies to you?","isRequired":true,"choices":[{"value":"item1","text":"You typically earn “Straight A’s” or “gold stars” in everything you do (G)"},{"value":"item2","text":"You get stressed when you’re not working and find downtime wasteful (SH)"},{"value":"item3","text":"You constantly seek out trainings and certifications because you think you need to improve your skills in order to succeed (E)"},{"value":"item4","text":"You often find yourself saying “I don’t need anyone’s help (S)"},{"value":"item5","text":"You struggle to delegate, and when you do, you feel frustrated and disappointed in the results (P)"}],"hasOther":true,"otherText":"None of the above apply to me"},{"type":"radiogroup","name":"question3","visibleIf":"{question2} notempty","title":"Which of the following most applies to you?","isRequired":true,"choices":[{"value":"item1","text":"You frame requests in terms of project requirements, rather than your needs as a person (S)"},{"value":"item2","text":"Even after you’ve been in your role for a while, you feel like you still don’t know “enough” (E)"},{"value":"item3","text":"You were told frequently as a child that you were the “smart one” in your family or peer group? (G)"},{"value":"item4","text":"You’ve sacrificed your hobbies and passions for work (SH)"},{"value":"item5","text":"When you miss the (insanely high) mark on something, you accuse yourself of “not being cut out” for your job and ruminate on it for days (P)"},{"value":"item6","text":"None of the above apply to me"}]},{"type":"radiogroup","name":"question4","visibleIf":"{question3} notempty","title":"Which of the following most applies to you?","isRequired":true,"choices":[{"value":"item1","text":"You shudder when someone says you’re an expert (E)"},{"value":"item2","text":"You feel like your work must be 100% perfect, 100% of the time (P)"},{"value":"item3","text":"You feel like you haven’t truly earned your title, despite numerous degrees and achievements (SH)"},{"value":"item4","text":"You feel like you’ve failed if you had to ask for help (S)"},{"value":"item5","text":"You do not want a mentor because you can handle/figure things out on your own (G)"},{"value":"item6","text":"None of the above apply to me"}]},{"type":"radiogroup","name":"question6","visibleIf":"{question4} notempty","title":"Which of the following most applies to you?","isRequired":true,"choices":[{"value":"item1","text":"You feel pressed to work harder and longer than those around you to prove your worth (SH)"},{"value":"item2","text":"You feel ashamed when you don’t know something (E)"},{"value":"item3","text":"When you produce a successful/good product, you still view your efforts as a failure if you find a minor flaw in your work (P)"},{"value":"item4","text":"When you’re faced with a setback, your confidence plummets because not performing well provokes a feeling of shame (G)"},{"value":"item5","text":"You didn’t mind transitioning to virtual work/learning because you were able to work alone/more independently (S)"},{"value":"item6","text":"None of the above apply to me"}]},{"type":"radiogroup","name":"question5","visibleIf":"{question6} notempty","title":"Which of the following most applies to you?","isRequired":true,"choices":[{"value":"item1","text":"You focus on what you know or can do (E)"},{"value":"item2","text":"You often avoid challenges because it’s so uncomfortable to try something you’re not great at (G)"},{"value":"item3","text":"You feel the need to juggle multiple roles at once and are very disappointed when you fall short in any of the roles because you feel as though you should be able to handle everything - (SH)"},{"value":"item4","text":"You hate functioning in the dark and prefer to know every detail (P)"},{"value":"item5","text":"You refuse to take credit for work your work if you received any kind of assistance - (S)"},{"value":"item6","text":"None of the above apply to me"}]},{"type":"radiogroup","name":"question7","visibleIf":"{question5} notempty","title":"Based on the names, which of the following types of imposter syndrome do you think you fall under?","isRequired":true,"choices":[{"value":"item1","text":"The Expert "},{"value":"item2","text":"The Genius "},{"value":"item3","text":"The Perfectionist "},{"value":"item4","text":"The Soloist "},{"value":"item5","text":"The Superhero"},{"value":"item6","text":"I don't think I have imposter syndrome"}]}]}]}
  function sendDataToServer(survey) {
    //send Ajax request to your web server.
    alert("The results are:" + JSON.stringify(survey.data));
  }
  
  // function onComplete(survey, options) {
  //   //Write survey results into database
  //   console.log("Survey results: " + JSON.stringify(survey.data));
  //  }

  var survey = new Survey.Model(surveyJSON);
  // $("#surveyContainer").Survey({
  //   model: survey,
  //   onComplete: sendDataToServer
  // });

  return(
    <div>
      <p>This is being rendered from QuizContent.js.</p>
      <p>Ideally, we will copy the code from Survey.js into this file. Only code pertaining to building and running the interactive quiz should be stored here.</p>
      <p>Information ABOUT the quiz (i.e. description) should be stored in QuizPage.js</p>

      {/* <div id="surveyContainer"></div> */}

      {/* <Survey.Survey model={survey} onComplete={this.onComplete}/> */}
      <Survey.Survey model={survey} />
    </div>
  )
}

export default QuizContent;
