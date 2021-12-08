import soloist from './img/soloist.svg';
import './Types.css';

function Type4() {
  return(
    <div className=" content">
      <h1>Dash - The Soloist</h1>
      <img className="page-image" src={soloist} alt="soloist icon"/>
      <h2>Overview</h2>
        <p>
          The soloist represents a person with imposter syndrome that has extreme 
          difficulties asking others for help. Perhaps they may feel that others 
          are not as competent as themselves or that they must prove their own 
          worth through their productivity.
        </p>
        <pre></pre>
        <div className="float-video">
          <iframe className="responsive-iframe" aria-label="Soloist overview" src="https://www.youtube.com/embed/MFd7I4iWeTg?start=139" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      <h2>General Tips</h2>
        <ul>
          <li>
            Keep in mind that you could be taking longer to complete something by 
            insisting in your head that you have to figure it out yourself
          </li>
          <li>
            Firstly, you should know that no man is an island. Admittedly, 
            independence is blissful; however, it shouldn’t deter you from accepting
            assistance from others.Everyone has their area of strength, and asking 
            for help with a particular area you are not good at will help to maximize
            the quality of tasks.
          </li>
          <li>
            Therefore, you should learn to ask questions as it only shows a willingness
            to learn rather than incompetence as no man knows it all. Additionally, 
            accepting assistance from others will help you complete tasks in record time.
          </li>
        </ul>
      <h2>Resources</h2>
        <ul>
          <li>
            <a href="https://www.cnbc.com/2019/07/09/stop-asking-can-i-pick-your-brain-harvard-says-this-is-how-successful-people-ask-for-advice.html">Harvard researchers: How to ask for advice without being annoying</a>
          </li>
          <li>
            <a href="https://www.themuse.com/advice/4-times-you-just-need-to-suck-it-up-and-ask-for-help-at-work">4 Times You Just Need to Suck it Up and Ask for Help at Work</a>
          </li>
        </ul>
      <h2>Quotes</h2>
      <blockquote>
          "I still sometimes feel like a loser kid in high school and I
          just have to pick myself up and tell myself that I’m a superstar
          every morning so that I can get through this day and be for my
          fans what they need for me to be."
        </blockquote>
        <cite>
          — Lady Gaga, Grammy and Oscar Winning Singer-Songwriter and Actress
        </cite>
    </div>
  )
}

export default Type4;