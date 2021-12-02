import superhero from './img/superhero.svg';
import './Types.css';

function Type2() {
  return(
    <div>
      <h1>Mr. Incredible - The Superhero</h1>
      <img className="page-image" src={superhero} alt="picture of superhero"/>
      <h2>Overview</h2>
        <p1>
          The superwoman/man represents a person with imposter syndrome that often struggles with work addiction.
          This person may feel inadequate relative to colleagues and continue to push themselves as hard as possible,
          regardless of the consequences on mental, physical and emotional health.
        </p1>
        <div className="float-video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/MFd7I4iWeTg?start=80" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      <h2>General Tips</h2>
        <ul>
          <li>
            Impostor workaholics are actually addicted to the validation that comes from working, not to the work
            itself. Start training yourself to veer away from external validation. No one should have more power
            to make you feel good about yourself than you–even your boss when they give your project the stamp
            of approval.
          </li>
          <li>
            On the flip side, learn to take constructive criticism seriously, not personally.
          </li>
          <li>
            As you become more attuned to internal validation and able to nurture your inner confidence that states
            you’re competent and skilled, you’ll be able to ease off the gas as you gauge how much work is reasonable.
          </li>
        </ul>
      <h2>Resources</h2>
        <ul>
          <li>
            <a href="https://fairygodboss.com/articles/5-ways-to-combat-your-need-for-constant-validation-at-work">5 Ways to Combat Your Need For Constant Validation at Work</a>
          </li>
          <li>
            <a href="https://www.livewellwithsharonmartin.com/validate-yourself/">17 Ways to Validate Yourself</a>
          </li>
        </ul>
      <h2>Quotes</h2>
        <blockquote>
          "I have spent my years since Princeton, while at law school and in my various professional jobs, not 
          feeling completely a part of the worlds I inhabit. I am always looking over my shoulder wondering if
          I measure up."
        </blockquote>
        <cite>
          — Sonia Sotomayer, Associate Justice of the Supreme Court of the United States
        </cite>
    </div>
  )
}

export default Type2;