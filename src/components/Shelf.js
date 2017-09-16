import React from 'react'
import PropTypes from 'prop-types'

import { white, grey100, grey300 } from 'material-ui/styles/colors'
import { Card, CardText, CardHeader } from 'material-ui/Card'

import Loading from './Loading'
import Book from './Book'

const styles = {
  card: {
    background: white,
    margin: '20px'
  },
  cardHeader: {
    background: grey100,
    borderBottom: '1px solid',
    borderColor: grey300
  },
  horizontalFlex: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  flexWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  }
}

const NoBooksFound = () => <div><h4>No Books Found</h4></div>

const Shelf = ({title, books, updateBook}) => (
  <Card style={styles.card} initiallyExpanded={true}>
    <CardHeader
      title={title}
      style={styles.cardHeader}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}>
      <div style={styles.flexWrapper}>
        <div style={styles.horizontalFlex}>
          {books.length === 0 ? (
            <NoBooksFound />
          ) : (
            books.map(book => (
              <Book
                key={book.img}
                bookData={book}
                updateBook={updateBook}
              />
            ))
          )}
        </div>
      </div>
    </CardText>
  </Card>
)

Shelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired
}

export default Shelf
