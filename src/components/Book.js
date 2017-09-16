import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, CardText, CardMedia, CardTitle, CardActions } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

import { trimDescription } from '../utils/BooksAPI'

import CategoryDropdown from './CategoryDropdown'

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
    bookData: PropTypes.object.isRequired,
    updateBook: PropTypes.func.isRequired
  }

  state = {
    viewDescription: false
  }

  toggleDescription = (viewDescription) => this.setState({viewDescription})

  render() {
    let { bookData, updateBook } = this.props
    let { viewDescription } = this.state

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
          <CategoryDropdown
            book={bookData}
            updateBook={updateBook} />
        </CardActions>
      </Card>
    )
  }

}

export default Book
