import { useState } from 'react';
import NavBar from '../navbar';
import useMediaQuery from '../../hooks/useMediaQuery';

const Header = () => {
  const [isSmallScreen] = useMediaQuery('screen and (max-width: 800px)');
  console.log(isSmallScreen);
  function toggleNavBar() {
    const nav = document.querySelector('#nav');
    nav.classList.toggle('show');
  }

  return (
    <header className='header'>
      <button id='toggle' onClick={toggleNavBar}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16m-7 6h7'
          />
        </svg>
      </button>
      <NavBar fn={isSmallScreen && toggleNavBar}></NavBar>
    </header>
  );
};

export default Header;
