import incrediblesLogo from './img/incredibles-logo.svg';
import './HomePage.css';
import './Responsive.css';
import 'animate.css';
import { Link } from 'react-router-dom';

// contains the content on the homepage, including mission statement, quiz overview, and take quiz button
function HomePage() {
  return(
    <div className="content">
      <h1>
        Mission Statement
      </h1>
      <p>
        Imposter Syndrome describes feelings of inadequacy and self-doubt regardless of experience and education.
        Our research suggests that this is a common feeliing for many, particularly for gender
        minorities pursuing a career in tech. Be Incredible seeks to help users explore
        their relationship with imposter syndrome and guides them in how they can mitigate the effects.
      </p>
      <h1>
        Quiz Overview
      </h1>
      <p>
        Experts have determined that there are five main archetypes of imposter syndrome. 
        Be Incredible includes a brief quiz to help you identify which (if any) of the types apply
        to you. Take this quiz to learn more about yourself, the experiences of others like you,
        and what you can do to combat imposter syndrome.
      </p>
      <img className="logo" src={incrediblesLogo} alt="incredibles-logo" />
      <br></br>
      <br></br>
      <div className="text-center">
        <Link aria-label="Take the quiz" className="btn btn-success" role="button" to="/group4-in4matix/quiz"> 
          Take the quiz here!
        </Link>
      </div>
    </div>
  )
}

export default HomePage;
