import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div style ={{ padding: '10px', backgroundColor: '#f0f0f0', fontFamily: 'Arial, sans-serif' }}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
      </ul>
    </nav>
  </div>
);

}

export default Navbar;
