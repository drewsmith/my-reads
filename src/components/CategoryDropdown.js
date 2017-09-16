import React from 'react'
import { CATEGORIES, NONE } from '../utils/Constants'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

const categoryValue = (shelf) => {
  if(!shelf || shelf === '') {
    shelf = NONE.shelf
  }
  return CATEGORIES.map(category => category.shelf).indexOf(shelf)
}

const getShelf = (index) => {
  return CATEGORIES[index].shelf
}

const CategoryDropdown = ({book, updateBook}) => {
  return (
    <DropDownMenu
      value={categoryValue(book.shelf)}
      onChange={(e, index, value) => updateBook(book, getShelf(index))}
    >
      {CATEGORIES.map((category, index) => (
        <MenuItem
          key={index}
          value={index}
          primaryText={category.display}
        />
      ))}
    </DropDownMenu>
  )
}

export default CategoryDropdown
