import Head from 'next/head';
import Img from 'next/image';
import { useState } from 'react';
import { contactData } from '../database/database';

export default function Home() {
  const [showMail, setShowMail] = useState(false);

  const handleMail = () => {
    setShowMail(true);
    navigator.clipboard.writeText('julio.franco9111@gmail.com');
    setTimeout(() => {
      setShowMail(false);
    }, 2000);
  };

  return (
    <>
      <Head>
        <title>Julio Franco - Portfolio</title>
        <meta
          name='description'
          content='Portfolio FullStack developer - Julio Franco'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section id='contact'>
        <div className='container'>
          <div className='img-container'>
            <Img
              src={`https://drive.google.com/uc?export=download&id=1nvIfVsIMI4OCliPemSay2rf0KBxjwfEw`}
              width='350'
              height='450'
              alt='foto-personal'
            />
          </div>
          <div className='text-home'>
            <h1 className=''>Julio Franco</h1>
            <h2 className='mb-1'>FullStack developer</h2>
            <p className='mb-1'>
              Soy desarrollador de Javascript, resido en Buenos Aires
              (Argentina). Desarrollo sitios y aplicaciones web (SPA). Buen
              gusto para el diseño sin descuidar la funcionalidad.
            </p>
            <br />
            <p className='urls-contact'>
              {contactData.map((e) => (
                <a key={e.text} target='blank' href={e.url}>
                  {e.text}
                </a>
              ))}
              <a className='pointer' onClick={handleMail}>
                {showMail ? (
                  '¡Copiado!'
                ) : (
                  'Correo'
                )}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
