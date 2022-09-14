import React from 'react';
import HomePage from '../components/Home/index';
import SEO from './SEO';



function Home() {
  return (
    <div>
      <SEO title='Home'/>
      <HomePage />
    </div>
  )
}

export default Home;

