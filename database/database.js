export const contactData = [
  {
    text: 'CV -',
    url: 'https://drive.google.com/file/d/1GTo7LMfNhoI5aziRa8K7SDXwS_0F_RW0/view',
  },
  {
    text: 'LinkedIn -',
    url: 'https://www.linkedin.com/in/juliocesarfranco/',
  },

  {
    text: 'GitHub -',
    url: 'https://github.com/juliofranco9111',
  },
  {
    text: 'WhatsApp',
    url: 'https://wa.me/+541125592459/?text=Hola, quiero ponerme en contacto contigo',
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
  'React',
  'Redux',
  'Angular',
  'RXJS',
  'MongoDB',
  'SQL',
  'Node.JS',
  'Express',
  'Dart',
  'Figma',
  'Illustrator',
  'Framer',
  'Flutter(En progreso)'
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
    title: 'Memory Puzzle',
    subtitle: 'PWA hecha con React',
    keys: ['React', 'JS', 'PWA', 'Redux', 'HeroIcons', 'Sass', 'React-Router'],
    desc: 'Diseñada usando Framer. Soporte PWA con service worker 100% offline, Code Splitting con React Lazy, Sass (Patron de diseño: Mobile Only), React Router, Deploy en Vercel',
    link: 'https://memorypuzzle.vercel.app',
    repo: 'https://github.com/juliofranco9111/ReactMemoryGame',
    prototype:
      'https://framer.com/share/Memory-App--fgLafZi6Vn0vGq1IWttG/wE7wOnE3k',
  },
  {
    title: 'Math-Quizz',
    subtitle: 'PWA hecha con Angular',
    keys: ['Angular', 'JS', 'PWA', 'Guards', 'Offline', 'Sass'],
    desc: 'PWA con Service Worker y soporte 100% Offline, Code Splitting con Angular Lazy, Sass (Patron de diseño: Mobile Only), Deploy en Vercel',
    link: 'https://math-quizz.vercel.app/',
    repo: 'https://github.com/juliofranco9111/MathQuizz',
  },
  {
    title: 'Capital-Quizz',
    subtitle: 'PWA hecha con React',
    keys: ['React', 'JS', 'PWA', 'FontAwesome', 'Sass'],
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
    desc: 'Aplicación para el control de los gastos mensuales, creada con Angular, con sistema de autenticación y base de datos en Firebase. (Usa mail: test@test.com pass: 123456).',
    link: 'https://gastos-app-d4c8f.firebaseapp.com/',
    repo: 'https://github.com/juliofranco9111/gastosApp',
  },
  {
    title: 'Tickets (Turnos)',
    subtitle: 'Aplicación para el manejo de turnos y lista de espera',
    keys: ['Node.JS', 'Express', 'Heroku', 'HTMl', 'CSS'],
    desc: 'Permite el control de turnos, cuenta con una pantalla para mostrar el turno actual y el número de Escritorio al cual acudir',
    link: 'https://appticketsnodejs.herokuapp.com/',
    repo: 'https://github.com/juliofranco9111/ticketsnodejs',
  },
  {
    title: 'miChat (Real time)',
    subtitle: 'Aplicación de Chat en tiempo real',
    keys: ['Node.JS', 'Express', 'SocketIO', 'HTMl', 'CSS', 'REST'],
    desc: 'Creada utilizando la librería Socket.IO, NodeJS para el REST Server, posibilidad de crear múltiples salas.',
    link: 'https://michat-nodejs.herokuapp.com/',
    repo: 'https://github.com/juliofranco9111/chatowhitsockets',
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
