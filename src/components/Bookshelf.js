import React, { Component } from 'react'
import Shelf from './Shelf'

import { getAll, mapBook, update } from '../utils/BooksAPI'
import { CATEGORIES } from '../utils/Constants'

class Bookshelf extends Component {
  state = {
    books: []
  }

  componentWillMount() {
    getAll().then(response => {
      this.setState({
        books: response.map(mapBook)
      })
    })
  }

  render() {
    let { books } = this.state
    return (
      <div>
        {CATEGORIES.map(category => (
          <Shelf
            key={category.shelf}
            title={category.display}
            data={books.filter(book => book.shelf === category.shelf)}
          />
        ))}
      </div>
    );
  }
}

export default Bookshelf