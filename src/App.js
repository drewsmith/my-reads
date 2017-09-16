import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Snackbar from 'material-ui/Snackbar'

import Home from './components/Home'
import Search from './components/Search'

import { getAll, mapBook, update } from './utils/BooksAPI'

const styles = {
  progress: {
    margin: '0 auto',
    textAlign: 'center'
  }
}

const LoadingBooksMessage = () => <div style={styles.progress}>Loading...</div>

const LoadingBooks = ({open, close}) => (
  <Snackbar
    open={open}
    message={<LoadingBooksMessage />}
    autoHideDuration={3000}
    onRequestClose={close}
  />
)

class App extends Component {
  state = {
    books: [],
    loading: false
  }

  getBooks() {
    this.setState({loading: true})
    getAll().then(response => {
      this.setState({
        books: response.map(mapBook),
        loading: false
      })
    })
  }

  closeSearching() {
    this.setState({loading: false})
  }

  componentDidMount() {
    this.getBooks()
  }

  updateBook(id, shelf) {
    update(id, shelf).then(response => this.getBooks())
  }

  render() {
    let { books, loading } = this.state
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
          {loading && (
            <LoadingBooks open={loading} close={this.closeSearching} />
          )}
        </div>
      </BrowserRouter>
    )
  }

}

export default App
