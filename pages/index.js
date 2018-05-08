import OverLay from '../components/OverLay';

export default () => (
  <div className="wrapper">
    <OverLay>
    </OverLay>
    <style jsx>{`
      .wrapper {
        height: 100vh;
        width: 100vw;
        background: url("https://images.pexels.com/photos/94817/pexels-photo-94817.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") no-repeat center;
        background-size: cover;
        position: relative;
      }
    `}</style>
  </div>
);

