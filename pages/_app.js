import Header from '../components/header';
import Layout from '../components/layout';
import '../styles.scss';

function MyApp({ Component, pageProps }) {

  if (typeof window !== 'undefined') {
    const theme = localStorage.getItem('theme');
    const body = document.querySelector('body');
    if (theme && theme == 'dark') {
      body.classList.add('lightMode');
    }
  }

  return <Layout>
    <Component {...pageProps} />
    </Layout>
  
}

export default MyApp;
