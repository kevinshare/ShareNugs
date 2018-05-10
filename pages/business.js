import Head from 'next/head';
import Overlay from '../components/BusinessOverlay';

export default () => (
  <div className="wrapper">
    <Overlay>
      <Head>
          <title>Style Page</title>
          <link href="/static/materializedStyles.css" rel="stylesheet" />
      </Head>
    </Overlay>
    <style jsx>{`
      .wrapper {
        height: 100vh;
        width: 100vw;
        background-color: rgba(245, 245, 245);
        background-size: cover;
        position: absolute;
      }
    `}</style>
  </div>
);
