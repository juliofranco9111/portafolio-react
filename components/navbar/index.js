import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar = ({ fn = () => {} }) => {
  const router = useRouter();
  function toggleTheme() {
    const body = document.querySelector('body');
    body.classList.toggle('lightMode');
    localStorage.setItem(
      'theme',
      body.classList.contains('lightMode') ? 'dark' : 'light'
    );
  }
  return (
    <nav id='nav'>
      <div className='container'>
        <ul>
          <li>
            <Link href='/'>
              <a
                onClick={fn}
                className={`btn-nav ${router.asPath === '/' && 'active-link'}`}>
                Inicio
              </a>
            </Link>
          </li>
          <li>
            <Link  href='/acerca'>
              <a onClick={fn} className={`btn-nav ${router.asPath === '/acerca' && 'active-link'}`}>
                Acerca
              </a>
            </Link>
          </li>

          <li>
            <Link href='/proyectos'>
              <a onClick={fn} className={`btn-nav ${router.asPath === '/proyectos' && 'active-link'}`}>
                Proyectos
              </a>
            </Link>
          </li>

          <li>
            <a id='toggleTheme' onClick={toggleTheme}>
              💡
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
