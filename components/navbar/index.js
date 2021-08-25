import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  function toggleTheme() {
    const body = document.querySelector('body');
    body.classList.toggle('lightMode');
    localStorage.setItem(
      'theme',
      body.classList.contains('lightMode') ? 'light' : 'dark'
    );
  }

  function toggleNavBar(){
    const nav = document.querySelector('#nav')
    nav.classList.toggle('show')
  }

  return (
    <>
      <button id='toggle' onClick={toggleNavBar}>
        <i className='fas fa-bars'></i>
      </button>
      <nav id='nav'>
        <div className='container'>
          <ul>
            <li>
              <Link href='/acerca'>
                <a onClick={toggleNavBar} className='btn-nav'>Acerca</a>
              </Link>
            </li>

            <li>
              <Link href='/proyectos'>
                <a onClick={toggleNavBar} className='btn-nav'>Proyectos</a>
              </Link>
            </li>

            <li>
              <Link href='/'>
                <a onClick={toggleNavBar} className='btn-nav'>Contacto</a>
              </Link>
            </li>

            <li>
              <a id='toggleTheme' onClick={toggleTheme}>
                🌚
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
