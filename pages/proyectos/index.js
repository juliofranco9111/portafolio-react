import React from 'react';
import { projects } from '../../database/database';

const index = () => {
  return (
    <section id='projects'>
      <div className='container'>
        <input type='text' placeholder='Busca por tecnología' />
        {projects.map((project) => (
          <article key={project.title}>
            <h1>{project.title}</h1>
            <h3>{project.subtitle}</h3>
            <ul className='project-tags'>
                  {project.keys.map((key) => (
                <li  key={key}>
                    <a className='project-tag' href='#'>
                      #{key}
                    </a>
                </li>
                  ))}
            </ul>

            <p>{project.desc}</p>

            <p>
              <a target="_blank" rel="noreferrer" href={project.repo}>Repositorio</a> - 
              <a target="_blank" rel="noreferrer" href={project.link}>Demo</a>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default index;
