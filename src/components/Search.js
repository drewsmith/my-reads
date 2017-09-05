import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import SearchIcon from 'material-ui/svg-icons/action/search'
import KeyboardBackspace from 'material-ui/svg-icons/hardware/keyboard-backspace'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import AutoComplete from 'material-ui/AutoComplete'

import { white, blueGrey900 } from 'material-ui/styles/colors'

const styles = {
  backIcon: {
    color: white,
    padding: '12px'
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
		left: 10,
		top: 20,
		fontSize: '40px'
  },
  searchInput: {
    width: '100%',
		textIndent: '50px',
		fontSize: '20px',
    height: '60px',
    paddingBottom: '10px'
  },
  hint: {
    paddingBottom: '15px'
  }
}

const SearchContainer = ({children}) => <div style={styles.searchContainer}>{children}</div>

const BackIcon = () => <KeyboardBackspace style={styles.backIcon} />

const Nav = ({history}) => {
  return (
    <AppBar 
      title="Search"
      iconElementLeft={<BackIcon />}
      onLeftIconButtonTouchTap={() => {
        history.goBack();
      }}
      style={styles.appBar}
    />
  )
}

class Search extends Component {
  state = {
    query: '',
    dataSource: []
  }

  handleChange = (value) => this.setState({ value })

  render() {
    let { query, dataSource } = this.state
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
          />
        </SearchContainer>
      </div>
    )
  }

}

export default Search