import { Component } from 'react';
import { Button } from 'react-materialize';
import Link from 'next/link';
import Header from './HeaderBack';
import Panel from './Panel';


// const layoutStyle = {
//   border: '1px solid green',
//   width: '600px',
// };

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
  }
  render() {
    return( 
      <div className="entryButtons">
        <Link href='/dispensaries'>
          <a className="button1">Recreational</a>
        </Link>
        <Link href='/dispensaries'>
          <a className="button1">Medical</a>
        </Link>
      <style jsx>{`
        .entryButtons {
          display: flex;
          flex: 1;
          margin-top: 50vh;
          justify-content: center;
          align-items: center;
        }
        a.button1 {
          vertical-align: center;
          padding:0.10em 0.8em;
          margin:1 0.1em 0.1em 1;
          margin-top: 15px;
          border-bottom:0.1em solid rgba(100, 100, 100, 0.1);;
          border-radius:0.6em;
          box-sizing: border-box;
          margin-left: 46px;
          text-decoration:none;
          font-family:'Roboto',sans-serif;
          font-weight:300;
          font-size: 30px;
          color:black;
          text-align:center;
          transition: all 0.6s;
        }
        a.button1:hover{
          color:#f2f2f2;
          background-color: rgba(100, 100, 100, 0.1);
        }
        @media all and (max-width:30em){
          a.button1{
            display:block;
            margin:0.4em auto;
          }
        }
    `}</style>
      </div>
    );
  }
};
