import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Search from './components/Search'

import { getAll, mapBook, update } from './utils/BooksAPI'

class App extends Component {
  state = {
    books: []
  }

  getBooks() {
    getAll().then(response => {
      this.setState({
        books: response.map(mapBook)
      })
    })
  }

  componentDidMount() {
    this.getBooks()
  }

  updateBook(id, shelf) {
    update(id, shelf).then(response => this.getBooks())
  }

  render() {
    let { books } = this.state
    let updateBookHandler = this.updateBook.bind(this)
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" render={() => (
            <Home
              books={books}
              updateBook={updateBookHandler}
            />
          )} />
          <Route exact path="/search" render={() => (
            <Search
              books={books}
              updateBook={updateBookHandler}
            />
          )} />
        </div>
      </BrowserRouter>
    )
  }

}

export default App
