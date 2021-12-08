import QuizContent from './QuizContent.js';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './QuizPage.css';
import './Responsive.css';

// The visable content for the quiz page
function QuizPage(props) {

  // aligns quiz results with state
  let results = props.results;
  let setResults = props.setResults;
  let freshState = props.freshResults;

  // determines if the user has taken the quiz, used in contentToRender
  function hasTakenQuiz() {
    for (var i = 0; i < results.length; i++) {
      if (results[i].y !== 0) {
        return true;
      }
    }
    return false;
  }

  // clears state of quiz results if user opts to retake the quiz
  function resetResults() {
    setResults(freshState);
  }

  // determines what to display based on if the quiz has been taken which comes from hasTakenQuiz
  // if no, displays the quiz 
  // if yes, prompts the users to either retake quiz or view results 
  function contentToRender() {
    if (hasTakenQuiz()) {
      return(
        <div>
          <p className="center">Thank you for taking our quiz. Would you like to take it again?</p>
          <div className="btns text-center">
            <Button aria-label="Retake quiz" className="btn-pad" variant="warning" onClick={resetResults}>Retake quiz</Button>
            <Link aria-label="View results of quiz" className="btn btn-success btn-pad" role="button" to="/group4-in4matix/results"> 
                  View Results
            </Link>
            </div>
        </div>
        );
    } else {
      return(
        <QuizContent results={props.results} setResults={props.setResults} />
      );
    }
  }

  // the main display for the page
  return(
    <div>
      {/* displayed regardless of whether quiz has been taken */}
      <div className="content">
        <h1>Which Type of Imposter Syndrome Do You Have?</h1>
        <p className="instructions">Complete this quick, 7-question quiz to determine which type of imposter syndrome you have, if any. You may find that multiple answers to one question apply to you. We encourage you to select the option that most aligns with your typical patterns.</p>
      </div>
      {/* runs function to determine the main content for the page: quiz, or retake/results buttons */}
      {contentToRender()}
    </div>
  )
}

export default QuizPage;