import QuizContent from './QuizContent.js';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function QuizPage(props) {

  let results = props.results;
  let setResults = props.setResults;
  let freshState = props.freshResults;

  function hasTakenQuiz() {
    for (var i = 0; i < results.length; i++) {
      if (results[i].y !== 0) {
        return true;
      }
    }
    return false;
  }

  function resetResults() {
    setResults(freshState);
  }

  function contentToRender() {
    if (hasTakenQuiz()) {
      return(
        <div>
          <p>Thank you for taking our quiz. Would you like to take it again?</p>
          <Button variant="primary" onClick={resetResults}>Retake quiz</Button>
          <Link className="btn btn-success" role="button" to="/group4-in4matix/results"> 
                View Results
              </Link>

        </div>
        );
    } else {
      return(
        <QuizContent results={props.results} setResults={props.setResults} />
      );
    }
  }

  return(
    <div>
      <h1>Which Type of Imposter Syndrome Do You Have?</h1>
      <p className="center">Take this quick 7 question quiz to determine which type of imposter syndrome you have, if any. You may find that multiple answers to one question apply to you. We encourage you to select the option that most aligns with your typical patterns. </p>
      <p className="center"> As this is still a prototype, the results function is still a work in progress...</p>
      <p className="center"> To view your results, once you have completed the quiz, inspect the webpage (right click anywhere on the page and select "Inspect." A sub-window will populate within your browser window. Navigate to the "Console" tab of the inspection window. Once there, click on the "Array(6)" Item. This array contains your results. Whichever "indexLabel" corresponds with your highest "y" score is your Imposter Syndrome Type. </p>

      {contentToRender()}

      {/* <div>{hasTakenQuiz() ? 
        <div>
          <p>Thank you for taking our quiz. Would you like to take it again?</p>
          <Button variant="primary" onClick={resetResults()}>Retake quiz</Button>
        </div> :
        <QuizContent results={props.results} setResults={props.setResults} />}
      </div> */}
    </div>
  )
}

export default QuizPage;