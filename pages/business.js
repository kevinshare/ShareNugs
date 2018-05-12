import Head from 'next/head';
import AutoComplete from 'material-ui/AutoComplete';
import { withStyles } from 'material-ui/styles';
import defaultPage from '../hoc/style';
import Overlay from '../components/BusinessOverlay';
import ProductCreator from '../components/ProductCreator';


const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
    
  },
});

class Business extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      open: false,
      searchableProducts: ['OG Kush', 'Blue Dream'],
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
          <ProductCreator />
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
  }
}

export default defaultPage(Business);
