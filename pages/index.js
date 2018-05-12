import Link from 'next/link';
import Head from 'next/head';
import Overlay from '../components/OverLay';
import EntryButtons from '../components/Entry';
import { withStyles } from 'material-ui/styles';
import withRoot from '../src/withRoot';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  render() {
    return(
      <div className="wrapper">
        <Overlay>
          <Head>
              <title>Style Page</title>
              <link href="/static/materializedStyles.css" rel="stylesheet" />
          </Head>
          <EntryButtons />
        </Overlay>
        <style jsx>{`
          .wrapper {
            height: 100vh;
            width: 100vw;
            background: url("https://images.pexels.com/photos/94817/pexels-photo-94817.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") no-repeat center;
            background-size: cover;
            position: absolute;
          }
        `}</style>
      </div>
    );
  }
}

export default Index;
