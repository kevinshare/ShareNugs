import Link from 'next/link';

export default () => (
  <div className="navbar">
    <Link href='/'>
      <div>
        <h1 className="title">
          Share Nugs
        </h1>
      </div>
    </Link>
    <div className="login">
      <Link href='/login'>
        <a className="button1">Login</a>
      </Link>
    </div>
    <div className="theButtons">
      <Link href='/products'>
        <a className="button1">Products</a>
      </Link>
      <Link href='/dispensaries'>
        <a className="button1">Dispensaries</a>
      </Link>
      <Link href='/'>
        <a className="button1">Home</a>
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
    color:  #C0C0C0;
    font-family: 'Play', sans-serif;
    transition: all 1.0s;
  }
    .title:hover {
    color:black;
  }
    .login {
    margin-top: 15px;
    float: right;
    margin-right: 15px;
  }
    .login h1{
    color: white;
  }
    .navbar {
    z-index: 7;
    overflow: hidden;
    background-color: white;
    min-height: 10vh;
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
   border:0.1em solid #FFFFFF;
   margin:0 0.3em 0.3em 0;
   border-radius:0.6em;
   box-sizing: border-box;
   text-decoration:none;
   font-family:'Roboto',sans-serif;
   font-weight:300;
   font-size: 20px;
   color:black;
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