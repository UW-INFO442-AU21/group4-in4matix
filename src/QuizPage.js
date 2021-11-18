import QuizContent from './QuizContent.js';

function QuizPage() {
  return(
    <div>
      <h1>Which Type of Imposter Syndrome Do You Have?</h1>
      <p class="center">Take this quick 7 question quiz to determine which type of imposter syndrome you have, if any. You may find that multiple answers to one question apply to you. We encourage you to select the option that most aligns with your typical patterns. </p>
      <p class="center"> As this is still a prototype, the results function is still a work in progress...</p>
      <p class="center"> To view your results, once you have completed the quiz, inspect the webpage (right click anywhere on the page and select "Inspect." A sub-window will populate within your browser window. Navigate to the "Console" tab of the inspection window. Once there, click on the "Array(6)" Item. This array contains your results. Whichever "indexLabel" corresponds with your highest "y" score is your Imposter Syndrome Type. </p>
      <QuizContent />
    </div>
  )
}

export default QuizPage;