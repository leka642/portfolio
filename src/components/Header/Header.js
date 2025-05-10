import Navbar from '../Navbar/Navbar';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const headerData = {
    homepage: '',
    title: 'LS.',
  };

  const { homepage, title } = headerData;

  return (
    <div className="header center">
      <h3>
        {homepage ? (
          <Link to={homepage} className="link">
            {title}
          </Link>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </div>
  );
};

export default Header;