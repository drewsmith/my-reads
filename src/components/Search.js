import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import AppBar from 'material-ui/AppBar'
import SearchIcon from 'material-ui/svg-icons/action/search'
import KeyboardBackspace from 'material-ui/svg-icons/hardware/keyboard-backspace'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import Snackbar from 'material-ui/Snackbar'

import { white, blueGrey900 } from 'material-ui/styles/colors'

import Book from './Book'
import Loading from './Loading'

import { mapBook, search } from '../utils/BooksAPI'

const styles = {
  backIcon: {
    color: white,
    padding: '12px',
    cursor: 'pointer'
  },
  appBar: {
    background: blueGrey900
  },
  searchContainer: {
    display: 'inline-block',
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    paddingTop: '0'
  },
  searchIcon: {
    position: 'absolute',
		left: 20,
		top: 20,
    fontSize: '40px'
  },
  searchInput: {
    width: '100%',
		textIndent: '60px',
		fontSize: '20px',
    height: '60px',
    paddingBottom: '10px'
  },
  searchResults: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  hint: {
    paddingBottom: '15px'
  },
  noResults: {
    margin: '20px 30px',
    padding: '30px',
    fontSize: '16px',
    textTransform: 'uppercase',
    textAlign: 'center',
    color: blueGrey900,
    fontWeight: '100'
  },
  flash: {
    textAlign: 'center'
  }
}

const NoResults = () => <Paper style={styles.noResults}>No results found</Paper>

const SearchContainer = ({children}) => <div style={styles.searchContainer}>{children}</div>

const BackIcon = () => (
  <Link to="/">
    <KeyboardBackspace style={styles.backIcon} />
  </Link>
)

const Nav = () => (
  <AppBar
    title="Search"
    iconElementLeft={<BackIcon />}
    style={styles.appBar}
  />
)

const Flash = ({ openFlash, closeFlash, title }) => (
  <Snackbar
    open={openFlash}
    message={`${title ? title : 'Book'} was updated`}
    autoHideDuration={3000}
    onRequestClose={closeFlash}
    style={styles.flash}
  />
)

Flash.propTypes = {
  openFlash: PropTypes.bool.isRequired,
  closeFlash: PropTypes.func.isRequired,
  title: PropTypes.string
}

class Search extends Component {
  static propTypes = {
      books: PropTypes.array.isRequired,
      updateBook: PropTypes.func.isRequired
  }

  state = {
    query: '',
    searchResults: [],
    loading: false,
    openFlash: false,
    updatedTitle: ''
  }

  closeFlash = () => this.setState({openFlash: false, updatedTitle: ''})

  onSearch = (query) => {
    this.setState({
      searchResults: [],
      loading: true,
      query: query
    })
    search(query, 10).then(searchResults => {
      let results = (!searchResults || searchResults.error) ? [] : searchResults
      this.setState({
        searchResults: results,
        loading: false
      })
    })
  }

  mapSearchResult = (searchResult) => {
    let { books } = this.props
    let book = books.filter(book => book.id === searchResult.id)

    if(book.length === 1) {
      searchResult.shelf = book[0].shelf
    }

    return mapBook(searchResult)
  }

  updateBookWithFlash = (searchResult, ...args) => {
    this.props.updateBook(...args)
    this.setState({openFlash: true, updatedTitle: searchResult.title})
  }

  render() {
    let { query, searchResults, loading, openFlash, updatedTitle } = this.state
    return (
      <div>
        <Nav />

        <SearchContainer>
          <SearchIcon style={styles.searchIcon} />
          <TextField
            onKeyUp={(e) => this.onSearch(e.target.value)}
            hintText="Book Name"
            fullWidth={true}
            hintStyle={styles.hint}
            style={styles.searchInput}
          />
        </SearchContainer>

        {loading === true && (
          <Loading />
        )}

        {searchResults.length > 0 && (
          <div style={styles.searchResults}>
            {searchResults.map(searchResult => (
              <Book
                key={searchResult.id}
                bookData={this.mapSearchResult(searchResult)}
                updateBook={(...args) => this.updateBookWithFlash(searchResult, ...args)}
              />
            ))}
          </div>
        )}

        {searchResults.length === 0 && query.length > 0 && loading === false && (
          <NoResults />
        )}

        <Flash
          openFlash={openFlash}
          closeFlash={this.closeFlash}
          title={updatedTitle} />
      </div>
    )
  }

}

export default Search
