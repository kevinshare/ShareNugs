import Header from './HeaderBack';
import Panel from './Panel';

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
    <div className="panel">
      <Panel />
    </div>
    <div className="page" >
      {props.children}
    </div>
    <style jsx>{`
      .panel {
        flex: 1;
        margin-top: 30vh;
        margin-left: 25vw;
      }
    `}</style>
  </div>
);

export default Layout;