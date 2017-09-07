import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, CardText, CardHeader, CardMedia, CardTitle, CardActions } from 'material-ui/Card'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'

import { blueGrey900 } from 'material-ui/styles/colors'

import { CATEGORIES } from '../utils/Constants'
import { trimDescription } from '../utils/BooksAPI'

const styles = {
  bookCard: {
    margin: '10px',
    minWidth: '250px',
    maxWidth: '250px'
  },
  cardMedia: {
    maxHeight: '250px', 
    overflowY: 'hidden'
  },
  descriptionButton: {
    marginLeft: '5px'
  }
}

class Book extends Component {
  static PropTypes = {
    bookData: PropTypes.object.isRequired
  }

  state = {
    dropDownValue: 1,
    viewDescription: false
  }

  handleChange = (event, index, value) => this.setState({dropDownValue: value})

  toggleDescription = (viewDescription) => this.setState({viewDescription})

  componentWillMount() {
    let { shelf } = this.props.bookData
    this.setState({
      dropDownValue: CATEGORIES.map(category => category.shelf).indexOf(shelf) + 1
    })
  }

  render() {
    let { bookData } = this.props
    let { dropDownValue, viewDescription } = this.state

    return (
      <Card key={bookData.id} style={styles.bookCard}>
        <CardMedia style={styles.cardMedia}>
          <img src={bookData.img} alt="" />
        </CardMedia>
        <CardTitle title={bookData.title} subtitle={bookData.authors} />
        <CardText>
          {viewDescription === false && (
            <div>
              {trimDescription(bookData.description)}
              <FlatButton
                onClick={() => this.toggleDescription(true)}
                style={styles.descriptionButton}
                secondary={true}>
                View Description
              </FlatButton>
            </div>
          )}
          {viewDescription === true && (
            <div>
            {bookData.description}
            <FlatButton
              onClick={() => this.toggleDescription(false)}
              style={styles.descriptionButton}
              secondary={true}>
              Hide Description
            </FlatButton>
          </div>
          )}
        </CardText>
        <CardActions>
          <DropDownMenu 
            value={dropDownValue} 
            onChange={this.handleChange}
          >
            {CATEGORIES.map((category, index) => (
              <MenuItem 
                key={index}
                value={(index + 1)} 
                primaryText={category.display} 
              />
            ))}
          </DropDownMenu>
        </CardActions>
      </Card>
    )
  }

}

export default Book