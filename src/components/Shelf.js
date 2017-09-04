import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { white, grey100, grey300 } from 'material-ui/styles/colors'
import { Card, CardText, CardHeader, CardMedia, CardTitle, CardActions } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const styles = {
  card: {
    background: white,
    margin: '20px'
  },
  cardMedia: {
    maxHeight: '250px', 
    overflowY: 'hidden'
  },
  bookCard: {
    margin: '10px',
    minWidth: '250px'
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
    data: PropTypes.array.isRequired
  }
  render() {
    let { title, data } = this.props
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
              <Card key={tile.image} style={styles.bookCard}>
                <CardMedia style={styles.cardMedia}>
                  <img src="images/drew_marathon.jpg" alt="" />
                </CardMedia>
                <CardTitle title="Card title" subtitle="Card subtitle" />
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                  <FlatButton label="Action1" />
                </CardActions>
              </Card>
              ))}
            </div>
          </div>
        </CardText>
      </Card>
    )
  }
}

export default Shelf