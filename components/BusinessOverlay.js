import Header from './HeaderBasic';

// const layoutStyle = {
//   border: '1px solid green',
//   width: '600px',
// };

const Layout = (props) => (
  <div>
    <div>
      <Header className="navHeader"/>
    </div>
    <div className="hider">
      <div className="greyBar"></div>
    </div>
    <div className="page" >
      {props.children}
    </div>
    <style jsx>{`
      .panel {
        flex: 1;
        justify-content: center;
        align-items: center;
        margin-top: 30vh;
        margin-left: 28vw;
      }
      .submit {
        margin-left: 13vw;
      }
    `}</style>
  </div>
);

export default Layout;
