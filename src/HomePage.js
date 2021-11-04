import jackjack from './img/jack-jack.png';
import './HomePage.css';
import 'animate.css';

function HomePage() {
  return(
    <div>
      <h1>
        Mission Statement
      </h1>
      {/* <p className="jackjack">Hello</p> */}
      {/* <img className="animate__animated animate__rotateInDownLeft animate_slower jackjack" src={jackjack} alt="logo" /> */}
      <img className="jackjack" src={jackjack} alt="logo" />
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
      <p class='orange'>
        Take the quiz here *link to survey*
      </p>
    </div>
  )
}

export default HomePage;
