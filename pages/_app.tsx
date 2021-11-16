import { withHydrate } from 'effector-next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout';
import '/styles/global.scss';

const enhance = withHydrate();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>NextJS App From Scratch</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default enhance(App);
