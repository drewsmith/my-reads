import React from 'react'
import { CATEGORIES } from '../utils/Constants'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

const categoryValue = (shelf) => {
  return CATEGORIES.map(category => category.shelf).indexOf(shelf)
}

const getShelf = (index) => {
  return CATEGORIES[index].shelf
}

const CategoryDropdown = ({book, updateBook}) => {
  return (
    <DropDownMenu
      value={categoryValue(book.shelf)}
      onChange={(e, index, value) => updateBook(book.id, getShelf(index))}
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
