import React, { useEffect, useState } from 'react';
import {
  getProjectsFilter,
  projects as allProjects,
} from '../../database/database';
import { useForm } from '../../hooks/useForm';
import Head from 'next/head';

const Index = () => {
  let value = '';
  const [projects, setProjects] = useState(allProjects);
  const [{ term }, handleInputChange] = useForm({ term: value });

  useEffect(() => {
    setProjects(getProjectsFilter(term));
  }, [term ]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };


  

  return (
    <>
      <Head>
        <title>Julio Franco - Proyectos</title>
        <meta
          name='description'
          content='Recopliación de mis proyectos sobre desarrollo web - Julio Franco'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section id='projects'>
        <div className='container'>
          <div className='form-container'>
            <form onSubmit={handleSubmit}>
              <input
                type='text'
                name='term'
                autoComplete='off'
                placeholder='Busca por tecnología'
                value={term}
                onChange={handleInputChange}
              />
            </form>
          </div>
          {projects.map((project) => (
            <article key={project.title}>
              <h1>{project.title}</h1>
              <h3>{project.subtitle}</h3>
              <ul className='project-tags'>
                {project.keys.map((key) => (
                  <li className='project-tag' key={key}>
                      #{key}
                  </li>
                ))}
              </ul>

              <p>{project.desc}</p>

              <p>
                {project.prototype && (
                  <a target='_blank' rel='noreferrer' href={project.prototype}>
                    Diseño -{' '}
                  </a>
                )}
                <a target='_blank' rel='noreferrer' href={project.repo}>
                  Repositorio -
                </a>{' '}
                <a target='_blank' rel='noreferrer' href={project.link}>
                  Demo
                </a>
              </p>
            </article>
          ))}
          <h2 className="more-projects">
            Más en mi
            <a href='https://github.com/juliofranco9111' rel="noreferrer" target="_blank"> GitHub...</a>
          </h2>
        </div>
      </section>
    </>
  );
};

export default Index;
