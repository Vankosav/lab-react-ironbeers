import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/">
      <img style={{width: 80}} src="/assets/home.png" alt="home" />
      </Link>
    </header>
  );
}

export default Header;
