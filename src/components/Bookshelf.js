import React from 'react'
import PropTypes from 'prop-types'
import Shelf from './Shelf'
import { CATEGORIES, NONE } from '../utils/Constants'

const Bookshelf = ({books, updateBook}) => (
  <div>
    {CATEGORIES.filter(category => category.shelf !== NONE.shelf).map(category => (
      <Shelf
        key={category.shelf}
        title={category.display}
        books={books.filter(book => book.shelf === category.shelf)}
        updateBook={updateBook}
      />
    ))}
  </div>
)

Bookshelf.propTypes = {
  books: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired
}

export default Bookshelf
