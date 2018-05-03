import Header from './Header';
import ProductsHeader from '../components/productsHeader';

// const layoutStyle = {
//   border: '1px solid green',
//   width: '600px',
// };

const Layout = (props) => (
  <div className="wrapper">
    <div>
      <Header className="navHeader"/>
    </div>
    <div className="hider">
      <div className="greyBar"></div>
    </div>
    <div className="headerProducts">
      <ProductsHeader />
    </div>
    <div className="page" >
      {props.children}
    </div>



    <style jsx>{`
      .wrapper {
        position: relative;
        background-size: cover;
      }
      .headerProducts {
        border-radius: 6px;
        position: fixed;
        top: 40.7%;
        left: 28.4%;
        background-color: rgba(0, 0, 0, 0.8);
        vertical-align: center;
        float: right;
        border: 1px solid white;
        z-index: 6;
        min-width: 94.1vh;
        padding-bottom: 10px;
      }
      .hider {
        position: fixed;
        top: 25.3%;
        left: 28.4%;
        background-color: white;
        vertical-align: center;
        float: right;
        min-width: 65vw;
        min-height: 29vh;
        border: 1px solid white;
        z-index: 6;
        padding-bottom: 10px;
      }
      .greyBar {
        min-height: 0.5vh;
        min-width: 65vw;
        top: 0;
        z-index: 5;
        background-color: rgba(100, 100, 100, 0.05);
      }
      /*
      */
      .page {
        z-index: 3;
        border-radius: 6px;
        justify-content: center;
        background-color: white;
        position: relative;
        margin-left: 28.2%;
        flex: 1;
        vertical-align: center;
        border-top: hidden;
        min-height: 100.5vh;
        max-width: 94.1vh;
        overflow: hidden;
        top: 366px;
      }
    `}</style>
  </div>
)

export default Layout;


