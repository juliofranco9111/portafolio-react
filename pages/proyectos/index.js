import React, { useEffect, useState } from 'react';
import {
  getProjectsFilter,
  projects as allProjects,
} from '../../database/database';
import { useForm } from '../../hooks/useForm';

const Index = () => {
  const [projects, setProjects] = useState(allProjects);
  const [{ term }, handleInputChange] = useForm({ term: '' });

  useEffect(() => {
    setProjects(getProjectsFilter(term));
  }, [term]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id='projects'>
      <div className='container'>
        <div className='form-container'>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              name='term'
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
                <li key={key}>
                  <a className='project-tag' href='#'>
                    #{key}
                  </a>
                </li>
              ))}
            </ul>

            <p>{project.desc}</p>

            <p>
              {project.prototype && (
                <a target='_blank' rel='noreferrer' href={project.prototype}>
                  Diseño - {' '}
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
      </div>
    </section>
  );
};

export default Index;
