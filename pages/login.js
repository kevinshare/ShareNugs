import Head from 'next/head';
import LoginOverlay from '../components/LoginOverlay';

export default () => (
  <div className="wrapper">
    <LoginOverlay>
      <Head>
        <title>Style Page</title>
        <link href="/static/materializedStyles.css" rel="stylesheet" />
      </Head>
    </LoginOverlay>
    <style jsx>{`
      .wrapper {
        min-height: 100vh;
        min-width: 100vw;
        background-color: rgba(245, 245, 245);
        background-size: cover;
        position: absolute;
      }
    `}</style>
  </div>
);
