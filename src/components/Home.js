import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1 style={{padding:"40px 0 20px 0"}}>Github Battle: Battle your friends... and stuff</h1>
      <Link to="/battle"><button>Battle</button></Link>
    </div>
  )
}

export default Home;