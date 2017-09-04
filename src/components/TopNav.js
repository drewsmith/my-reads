import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import SearchIcon from 'material-ui/svg-icons/action/search'
import { white, blueGrey900 } from 'material-ui/styles/colors'

const styles = {
  bookmark: {
    paddingRight: '10px'
  }
}

const Title = () => {
  return (
    <div>
      My Reads
    </div>
  )
}

class TopNav extends Component {
  render() {
    return (
      <AppBar
        title={<Title />}
        style={{
          background: blueGrey900
        }}
        showMenuIconButton={false}
        iconElementRight={
          <FlatButton
            label="Search"
            icon={<SearchIcon />}
          />
        }
      />
    )
  }
}

export default TopNav