import React from 'react'
import '../App.css'
import Book from './Book'

const Shelf = ({ shelfName, books, changeShelf }) => {
  return (
    <div>
        <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
            {books.map(book => (
              <Book
                key={book.id}
                book={book}
                changeShelf={changeShelf}
              />
            ))}
            </ol>
        </div>
        </div>
    </div>
  )
}

export default Shelf