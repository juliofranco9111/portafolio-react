import Head from 'next/head';
import Img from 'next/image';
import { contactData } from '../database/database';
import foto from '../public/foto.png';


export default function Home() {
  return (
    <>
      <Head>
        <title>Julio Franco - Portfolio</title>
        <meta
          name='description'
          content='Portfolio FullStack developer - Julio Franco'
        />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'
          integrity='sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=='
          crossOrigin='anonymous'
          referrerpolicy='no-referrer'></link>
      </Head>

      <section id='contact'>
        <div className='container'>
          <div className='img-container'>
            <Img src={foto} alt='foto-personal' />
          </div>
          <div className='text-home'>
            <h1 className=''>Julio Franco</h1>
            <h2 className='mb-1'>FullStack developer</h2>
            <p className='mb-1'>
              Soy desarrollador de Javascript, resido en Buenos Aires
              (Argentina). Desarrollo sitios y aplicaciones web (SPA). Buen
              gusto para el diseño y la funcionalidad
            </p>
            <p className="urls-contact">
              {contactData.map(e => <a key={e.text} target="blank" href={e.url}>{e.text}</a>)}
             
            </p>
          </div>
        </div>
      </section>

    </>
  );
}
