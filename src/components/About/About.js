import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './About.css';

const About = () => {
  return (
    <div className="about center">
      <h1>
        Hi, I am <span className="about__name">Leka Sree.</span>
      </h1>

      <h2 className="about__role">A Front End Developer.</h2>
      <p className="about__desc">
       As a front-end developer, I thrive on transforming designs into interactive and responsive websites. With a strong foundation in HTML, CSS, and JavaScript, I leverage the power of React to develop dynamic user interfaces. I'm driven by a desire to create impactful digital solutions and am seeking an opportunity to contribute to a forward-thinking company where I can continue to grow and innovate. My portfolio showcases my commitment to quality and user-centric design.
      </p>

      <div className="about__contact center">
        <a href="">
          <span type="button" className="btn btn--outline">
          Resume
          </span>
        </a>

        <a
          href="https://github.com"
          aria-label="github"
          className="link link--icon"
          rel="noopener noreferrer" 
         // Recommended for security with target="_blank"
        >
          <GitHubIcon />
        </a>

        <a
          href="https://linkedin.com"
          aria-label="linkedin"
          className="link link--icon"
          rel="noopener noreferrer" // Recommended for security with target="_blank"
        >
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
};

export default About;