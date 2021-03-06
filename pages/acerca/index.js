import React from 'react';
import Head from 'next/head';
import { stack, studies, work } from '../../database/database';

const index = () => {
  return (
    <>
      <Head>
        <title>Acerca de mí - Julio Franco</title>
        <meta
          name='description'
          content='Datos de contacto, y ¿Quién soy? - Julio Franco'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section id='about'>
        <div className='container'>
          <h3>Stack</h3>

          <article>
            <ul className='list-langs'>
              {stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <h3>Empleo</h3>

          {work.map((work) => (
            <article key={work.job}>
              <h1>{work.company}</h1>
              <h2>{work.job}</h2>
              <p>{work.desc}</p>
            </article>
          ))}

          <h3>Formación</h3>
          {studies.map((study) => (
            <article key={study.school}>
              <h1>{study.school}</h1>
              <h2>{study.career}</h2>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default index;
