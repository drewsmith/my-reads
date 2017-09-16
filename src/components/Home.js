import React from 'react';
import PropTypes from 'prop-types'

import Bookshelf from './Bookshelf'
import TopNav from './TopNav'

const Home = ({books, updateBook}) => (
  <div>
    <TopNav />
    <Bookshelf
      books={books}
      updateBook={updateBook} />
  </div>
)

Home.propTypes = {
  books: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired
}

export default Home
