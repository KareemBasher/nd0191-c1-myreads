import React, { useState } from 'react'

const BookShelfChanger = ({ shelf, changeShelf }) => {
  const [bookShelf, setBookShelf] = useState(shelf)

  const handleOnClick = (e) => {
    changeShelf(e.target.value)
    setBookShelf(e.target.value)
  }

  return (
    <div className="book-shelf-changer">
        <select defaultValue={bookShelf} onChange={(e) => handleOnClick(e)}>
            <option value="none" disabled>
                Move to...
            </option>
            <option value="currentlyReading">
                Currently Reading
            </option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </select>
    </div>
  )
}

export default BookShelfChanger