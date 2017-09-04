import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { white, grey100, grey300 } from 'material-ui/styles/colors'
import { Card, CardText, CardHeader, CardMedia, CardTitle, CardActions } from 'material-ui/Card'

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

class Shelf extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired
  }

  render() {
    let { title, data, categories } = this.props
    return (
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
              {data.map((tile) => (
                <Book
                  key={tile.img}
                  bookData={tile} 
                  categories={categories}
                />
              ))}
            </div>
          </div>
        </CardText>
      </Card>
    )
  }
}

export default Shelf