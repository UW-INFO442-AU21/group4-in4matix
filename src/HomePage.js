import jackjack from './img/jack-jack.svg';
import incrediblesLogo from './img/incredibles-logo.svg';
import './HomePage.css';
import 'animate.css';
import Button from 'react-bootstrap/Button';
import elastigirl from './img/elastigirl.svg';
import { Link } from 'react-router-dom';

function HomePage() {
  return(
    <div>
      <img className="jackjack left" src={jackjack} alt="logo" />
      <img className="jackjack right" src={jackjack} alt="logo" />
      <h1>
        Mission Statement
      </h1>
      {/* <img className="animate__animated animate__rotateInDownLeft animate_slower jackjack" src={jackjack} alt="logo" /> */}
      <p className="center">
        Imposter Syndrome describes feelings of inadequacy and self-doubt regardless of experience and education.
        Our research suggests that this is a common feeliing for many, particularly for gender
        minorities pursuing a career in tech. Be Incredible seeks to help users explore
        their relationship with imposter syndrome and guides them in how they can mitigate the effects.
      </p>
      <h1>
        Quiz Overview
      </h1>
      <p className="center">
        Experts have determined that there are five main archetypes of imposter syndrome. 
        Be Incredible includes a brief quiz to help you identify which (if any) of the types apply
        to you. Take this quiz to learn more about yourself, the experiences of others like you,
        and what you can do to combat imposter syndrome.
      </p>
      <img className="logo" src={incrediblesLogo} alt="incredibles-logo" />
      <img className="logo" src={elastigirl} alt="elastigirl" />
      <br></br>
      <br></br>
      <div className="text-center">
        <Link className="btn btn-primary" role="button" to="/group4-in4matix/quiz"> 
          Take the quiz here!!!
        </Link>
      </div>
    </div>
  )
}

export default HomePage;
