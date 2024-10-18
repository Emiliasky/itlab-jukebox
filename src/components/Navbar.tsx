// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='navbar sticky-top mb-4 navbar-light bg-light'>
      <div className='container-fluid flex-column flex-sm-row align-items-start align-items-sm-center'>
        <div className='nav-item my-2 mx-sm-3 my-sm-0'>
          <Link className='nav-link' to='/'>
            Home
          </Link>
        </div>
        <div className='nav-item my-2 mx-sm-3 my-sm-0'>
          <Link className='nav-link' to='/search'>
            Search
          </Link>
        </div>
        <div className='flex-grow-1'></div>
      </div>
    </nav>
  );
}