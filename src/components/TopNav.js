import React from 'react'

import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import SearchIcon from 'material-ui/svg-icons/action/search'
import { white, blueGrey900 } from 'material-ui/styles/colors'

import { Link } from 'react-router-dom'

const styles = {
  appBar: {
    background: blueGrey900
  },
  searchButton: {
    color: white,
    marginTop: '6px'
  }
}

const SearchButton = () => (
  <Link to="/search">
    <FlatButton
      label="Search"
      icon={<SearchIcon />}
      style={styles.searchButton}
    />
  </Link>
)

const TopNav = () => (
    <AppBar
      title="My Reads"
      style={styles.appBar}
      showMenuIconButton={false}
      iconElementRight={<SearchButton />}
    />
  )

export default TopNav
