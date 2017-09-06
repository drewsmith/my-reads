import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, CardText, CardHeader, CardMedia, CardTitle, CardActions } from 'material-ui/Card'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

const styles = {
  bookCard: {
    margin: '10px',
    minWidth: '250px',
    maxWidth: '250px'
  },
  cardMedia: {
    maxHeight: '250px', 
    overflowY: 'hidden'
  }
}

class Book extends Component {
  static PropTypes = {
    bookData: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired
  }

  state = {
    dropDownValue: 1
  }

  handleChange = (event, index, value) => this.setState({dropDownValue: value})

  render() {
    let { bookData, categories } = this.props
    let { dropDownValue, handleChange } = this.state

    return (
      <Card key={bookData.id} style={styles.bookCard}>
        <CardMedia style={styles.cardMedia}>
          <img src={bookData.img} alt="" />
        </CardMedia>
        <CardTitle title={bookData.title} subtitle={bookData.authors} />
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
          <DropDownMenu 
            value={dropDownValue} 
            onChange={this.handleChange}
          >
            {categories.map((category, index) => (
              <MenuItem 
                key={index}
                value={(index + 1)} 
                primaryText={category} 
              />
            ))}
          </DropDownMenu>
        </CardActions>
      </Card>
    )
  }

}

export default Book