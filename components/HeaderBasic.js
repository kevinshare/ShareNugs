import { Component } from 'react';
import Link from 'next/link';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: '',
      isTop: true,
    };
  }
  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }
  render() {
    let navBackground;
    let titleColor;
    let textColor;
    if (!this.state.isTop) {
      navBackground = {
        backgroundColor: 'rgba(100, 100, 100, 0.8)',
      };
      titleColor = {
        color: '#C0C0C0',
      };
      textColor = {
        color: '#C0C0C0',
      };
    } else {
      titleColor = {
        color: '#C0C0C0',
      };
      textColor = {
        color: 'black',
      };
    }
    return (
      <div style={navBackground} className="navbar"> 
        <div>
          <Link href='/'>
            <h1 style={titleColor} className="title">
              Share Nugs
            </h1>
          </Link>
        </div>
        <div className="logout">
          <Link href='/'>
            <a style={textColor} className="button1">Sign Out</a>
          </Link>
        </div>
        <div className="theButtons">
          <Link href='/dispensaries'>
            <a style={textColor} className="button1">Inventory</a>
          </Link>
          <Link href='/'>
            <a style={textColor} className="button1">Home</a>
          </Link>
        </div>


        <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Play');

        .title {
          float: left;
          padding-top: 10px;
          padding-left: 10px;
          letter-spacing: 6px;
          font-size: 60px;
          font-family: 'Play', sans-serif;
          transition: all 1.0s;
        }
        .title:hover {
          color:black;
        }
        .logout {
          margin-top: 15px;
          float: right;
          margin-right: 15px;
        }
        .logout h1{
          color: white;
        }
        .navbar {
          overflow: hidden;
          min-height: 10vh;
          z-index: 6;
          position: fixed; /* Set the navbar to fixed position */
          top: 0; /* Position the navbar at the top of the page */
          min-width: 100vw; /* Full width */
        }
          /* Links inside the navbar */
        .navbar a {
          font-family: 'Play', sans-serif;
          display: block;
          color: black;
          text-align: center;
          text-decoration: none;
          float: right;
        }
        .theButtons {
          float: right;
          margin-right: -30px;
          margin-top: 9%;
        }
          /* Change background on mouse-over */
        .navbar a:hover {
          background: rgba(100, 100, 100, 0.1);
          color: black;
        }
        a.button1{
          padding:0.35em 1.2em;
          margin:0 0.3em 0.3em 0;
          border-radius:0.6em;
          box-sizing: border-box;
          text-decoration:none;
          font-family:'Roboto',sans-serif;
          font-weight:300;
          font-size: 20px;
          text-align:center;
          transition: all 0.6s;
        }
        a.button1:hover{
          color:#f2f2f2;
          background-color:white;
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
}
