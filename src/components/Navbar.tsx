// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [searchText, setSearchText] = useState<string>('');

  return (
    <nav className='navbar sticky-top mb-4 navbar-light bg-light'>
      <div className='container-fluid flex-column flex-sm-row align-items-start align-items-sm-center'>
        <div className='nav-item my-2 mx-sm-3 my-sm-0'>
          <Link className='nav-link' to='/'>
            Home
          </Link>
        </div>
        <div className='nav-item my-2 ml-3 mr-2 my-sm-0'>
          <input
            type='text'
            id='search'
            value={searchText}
            onInput={(e) => setSearchText((e.target as HTMLInputElement).value)}
          ></input>
        </div>
        <div className='nav-item my-2 mr-3 ml-2 my-sm-0'>
          <Link className='nav-link' to={`/search?search=${searchText.replace(' ', '+')}`}>
            Search
          </Link>
        </div>
        <div className='flex-grow-1'></div>
      </div>
    </nav >
  );
}