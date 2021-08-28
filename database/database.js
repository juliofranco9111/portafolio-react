export const contactData = [
  {
    text: 'cv -',
    url: 'https://www.google.com',
  },
  {
    text: 'LinkedIn -',
    url: 'https://www.linkedin.com',
  },
  {
    text: 'Gmail -',
    url: 'https://www.gmail.com',
  },
  {
    text: 'GitHub -',
    url: 'https://www.github.com',
  },
  {
    text: 'WhatsApp',
    url: 'https://www.whatsapp.com',
  },
];

export const work = [
  {
    company: 'Fudo',
    job: 'Agente de Soporte técnico ( 2020 - Actualidad )',
    desc: 'Brindo servicio al cliente mientras respondo preguntas, instalo software (y hardware) y soluciono problemas técnicos por teléfono, correo electrónico, chat y otros medios',
  },
];

export const studies = [
  {
    school: 'Digital House',
    career: 'Certified Tech Developer ( Actualidad )',
  },
  {
    school: 'Udemy, Linkedin learning',
    career:
      'Cursos online: Master en JavaScript, Angular, React, Master en CSS, Dart',
  },
];

export const stack = [
  'HTML',
  'CSS',
  'Sass',
  'JavaScript',
  'TypeScript',
  'Angular',
  'RXJS',
  'React',
  'Redux',
  'MongoBD',
  'Node.JS',
  'Express',
  'SQL',
  'Dart',
];

export const projects = [
  /* 
    {
        title: '',
        subtitle: '',
        keys: [],
        desc: '',
        link: '',
        repo: ''

    } */
  {
    title: 'Math-Quizz',
    subtitle: 'PWA hecha con Angular',
    keys: ['Angular', 'JS', 'PWA', 'Guards', 'Offline'],
    desc: 'PWA con Service Worker y soporte 100% Offline, Code Splitting con Angular Lazy, Sass (Patron de diseño: Mobile Only), Deploy en Vercel',
    link: 'https://math-quizz.vercel.app/',
    repo: 'https://github.com/juliofranco9111/MathQuizz',
  },
  {
    title: 'Capital-Quizz',
    subtitle: 'PWA hecha con React',
    keys: ['React', 'JS', 'PWA', 'Redux', 'FontAwesome'],
    desc: 'PWA con Service Worker y soporte 100% Offline, Code Splitting con React Lazy, Sass (Patron de diseño: Mobile Only), React Router, Deploy en Vercel',
    link: 'https://quizzcapital.vercel.app/',
    repo: 'https://github.com/juliofranco9111/ReactCapitalQuizz',
  },
  {
    title: 'Salva - administrá tus gastos',
    subtitle: 'SPA realizada con Angular usando Firebase como backend',
    keys: [
      'Angular',
      'TypeScript',
      'Firebase',
      'Bootstrap',
      'GoogleAuth',
      'Serverless',
    ],
    desc: 'Permite administrar y separar los ingresos y gastos mensuales por categorías además de ver el balance en tiempo real de los movimientos. Diseñé el logo y nombre para el proyecto, CRUD completo por cada movimiento y categorías, instrucciones de uso integradas, login basado en el sistema de autenticación de Firebase (email y cuenta de Google). Diseño adaptable (responsive).',
    link: 'https://gastos-app-d4c8f.firebaseapp.com/',
    repo: 'https://github.com/juliofranco9111/gastosApp',
  },
];

export const getProjectsFilter = (term) => {
  if (term) {
    let projectsArray = [];

    projects.filter((p) => {
      if (p.title.toLowerCase().match(term.toLowerCase())) {
        projectsArray.push(p);
        return p;
      } else {
        for (let i = 0; i < p.keys.length; i++) {
          if (p.keys[i].toLowerCase().match(term.toLowerCase())) {
            projectsArray.push(p);
            return;
          }
        }
      }
    });

    return projectsArray;
  } else {
    return projects;
  }
};
