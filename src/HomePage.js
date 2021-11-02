import jackjack from './img/jack-jack.png';
import 'animate.css';

function HomePage() {
  return(
    <div>
      <h1>
        Mission Statement
      </h1>
      {/* <p className="animate__animated animate__bounce">Hello</p> */}
      <img className="animate__animated animate__rotateInDownLeft animate__rotateOutDownRight animate_slower" src={jackjack} alt="logo" />
      <p>
        Imposter Syndrome describes feeling of not being qualified coupled with fear that everyone around you will find out that you are an 'imposter.' Our research suggests that this is common feeliing for many, particularly for female-identifying individuals pursuing a career in tech. Be Incredible seeks to help users explore their relationship with imposter syndrome and how they can  triumph over their related struggles.
      </p>
      <h1>
        Quiz Overview
      </h1>
      <p>
        Psychololigsts have determined that there are five main archetypes of imposter syndrome. Be Incredible includes a breif quiz to help you identify which (if any) of the types apply to you. Take this quiz to learn more about yourself, the experiences of others like you, aand what you can do to combat  imposter syndrome.
      </p>
      <p class='orange'>
        Take the quiz here *link to survey*
      </p>
    </div>
  )
}

export default HomePage;