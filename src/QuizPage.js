import QuizContent from './QuizContent.js';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './QuizPage.css';
import './Responsive.css';

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
          <p className="center">Thank you for taking our quiz. Would you like to take it again?</p>
          <div className="btns text-center">
            <Button className="btn-pad" variant="warning" onClick={resetResults}>Retake quiz</Button>
            <Link className="btn btn-danger btn-pad" role="button" to="/group4-in4matix/results"> 
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

  return(
    <div>
      <div className="content">
        <h1>Which Type of Imposter Syndrome Do You Have?</h1>
        <p className="instructions">Complete this quick, 7-question quiz to determine which type of imposter syndrome you have, if any. You may find that multiple answers to one question apply to you. We encourage you to select the option that most aligns with your typical patterns.</p>
      </div>

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