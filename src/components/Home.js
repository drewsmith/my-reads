import React, { Component } from 'react';

import Bookshelf from './Bookshelf'
import TopNav from './TopNav'

const Home = () => {
  return (
    <div>
      <TopNav />
      <Bookshelf />
    </div>
  )
}

export default Home