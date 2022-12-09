import React from 'react'
import '../App.css'
import BookShelfChanger from './BookShelfChanger'

const Book = ({ book, changeShelf }) => {
  return (
    <li>
        <div className="book">
            <div className="book-top">
                <div
                className="book-cover"
                style={{
                    width: 128,
                    height: 193,
                    backgroundImage:
                    `url(${book?.imageLinks?.thumbnail})`,
                }}
                ></div>
                <BookShelfChanger book={book} shelf={book.shelf} changeShelf={changeShelf}/>
            </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors}</div>
        </div>
    </li>
  )
}

export default Book