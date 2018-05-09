import Head from 'next/head';
import LoginOverlay from '../components/LoginOverlay';

export default () => (
  <LoginOverlay>
    <Head>
        <title>Style Page</title>
        <link href="/static/materializedStyles.css" rel="stylesheet" />
    </Head>
  </LoginOverlay>
);
