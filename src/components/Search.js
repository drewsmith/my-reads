import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import SearchIcon from 'material-ui/svg-icons/action/search'
import KeyboardBackspace from 'material-ui/svg-icons/hardware/keyboard-backspace'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import AutoComplete from 'material-ui/AutoComplete'
import CircularProgress from 'material-ui/CircularProgress'

import { white, blueGrey900 } from 'material-ui/styles/colors'

import Book from './Book'

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
    paddingTop: '0',
    background: white
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
    flexWrap: 'wrap'
  },
  hint: {
    paddingBottom: '15px'
  },
  loading: {
    width: '100%',
    paddingTop: '40px',
    margin: '0 auto',
    textAlign: 'center'
  }
}

const Loading = () => <div style={styles.loading}><CircularProgress /></div>

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

class Search extends Component {
  state = {
    query: '',
    dataSource: [],
    searchResults: [],
    loading: false
  }

  handleChange = (value) => this.setState({ value })

  onSearch = (query) => {
    this.setState({
      searchResults: [],
      loading: true
    })
    search(query, 10).then(searchResults => {
      this.setState({
        searchResults: searchResults,
        loading: false
      })
    })
  }

  render() {
    let { query, dataSource, searchResults, loading } = this.state
    return (
      <div>
        <Nav />
        <SearchContainer>
          <SearchIcon style={styles.searchIcon} />
          <AutoComplete
            hintText="Book Name"
            dataSource={dataSource}
            fullWidth={true}
            textFieldStyle={styles.searchInput}
            hintStyle={styles.hint}
            onNewRequest={this.onSearch}
          />
        </SearchContainer>
        {loading === true && (
          <Loading />
        )}
        <div style={styles.searchResults}>
          {searchResults.map(searchResult => (
            <Book 
              key={searchResult.id}
              bookData={mapBook(searchResult)}
              categories={["Currently Reading", "Want to Read", "Read"]}
            />
          ))}
        </div>
      </div>
    )
  }

}

export default Search