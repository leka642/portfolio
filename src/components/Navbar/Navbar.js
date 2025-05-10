import Brightness2Icon from '@mui/icons-material/Brightness2';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/theme';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  const scrollToSection = (hash) => {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    toggleNavList(); // Close the navigation menu after clicking
  };

  return (
    <nav className="center nav">
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className="nav__list"
      >
        <li className="nav__list-item">
          <Link
            to="/#projects"
            onClick={() => scrollToSection('#projects')}
            className="link link--nav"
          >
            Projects
          </Link>
        </li>

        <li className="nav__list-item">
          <Link
            to="/#skills"
            onClick={() => scrollToSection('#skills')}
            className="link link--nav"
          >
            Skills
          </Link>
        </li>

        <li className="nav__list-item">
          <Link
            to="/#contact"
            onClick={() => scrollToSection('#contact')}
            className="link link--nav"
          >
            Contact
          </Link>
        </li>
      </ul>

      <button
        type="button"
        onClick={toggleTheme}
        className="btn btn--icon nav__theme"
        aria-label="toggle theme"
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      <button
        type="button"
        onClick={toggleNavList}
        className="btn btn--icon nav__hamburger"
        aria-label="toggle navigation"
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  );
};

export default Navbar;