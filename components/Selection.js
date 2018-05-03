import { Component } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import OverLay from '../components/OverLay';

export default class extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className="selectionWrapper">
        <div className="reserveSelect">
          <a className="selectButton">
            Select {this.props.currentOne}
          </a>
        </div>
        <style jsx>{`

          .selectionWrapper {
            z-index: 3;
            justify-content: center;
            background-color: rgba(100, 100, 100, 0.05);
            position: relative;
            margin-left: 0;
            margin-right: 3px;
            flex: 1;
            border: 3px solid white;
            border-radius: 0.5em;
            padding: 1px;
            padding-bottom: 10px;
            vertical-align: center;
            min-height: 11.5vh;
            min-width: 94.5vh;
            overflow: hidden;
            top: 0px;
          }
          a.selectButton{
            color: black;
            float: right;
             padding:0.55em 0.5em;
             border:0.1em solid #FFFFFF;
             margin:0 1em 1em 0;
            margin-top: 0.5em;
             border-radius:0.12em;
             box-sizing: border-box;
             text-decoration:none;
             font-family: 'Play', sans-serif;
             font-weight:600;
            font-size:20px;
             color:  #C0C0C0;
             text-align:center;
             transition: all 0.6s;
          }
          a.selectButton:hover{
           color:#000000;
           background-color:#FFFFFF;
          }
          @media all and (max-width:30em){
           a.selectButton{
            display:block;
            margin:1em auto;
           }
          }
        `}</style>
      </div>
    )
  }
}