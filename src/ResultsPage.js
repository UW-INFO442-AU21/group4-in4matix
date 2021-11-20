function ResultsPage(props) {

  let results = props.results;

  console.log("The results are:", results);

  return(
    <div>
      <h1>WORK IN PROGRESS - CONTENT TO COME</h1>
      <h1>This is the results page! Once users complete the quiz, we can tell them to check here for results.</h1>

      <p>The code that builds the visualization can be stored here, or we can keep it in another file (like QuizPage vs. QuizContent).</p>

      <p>Since we won't display much data besides the visualization itself, I opted for a single file to manage this.</p>
    </div>
  )
}

export default ResultsPage;