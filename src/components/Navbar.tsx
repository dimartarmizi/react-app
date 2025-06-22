import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ marginBottom: 24 }}>
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;
