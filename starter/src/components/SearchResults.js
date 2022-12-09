import React, { useState, useEffect } from 'react'
import '../App.css'
import Book from './Book'

const SearchResults = ({ showingBooks, changeShelf }) => {
  const [books, setBooks] = useState(showingBooks)

  useEffect(() => {
    setBooks(showingBooks)
  }, [showingBooks])

  return (
    <div className="search-books-results">
        <ol className="books-grid">
            {
              books && books.map(book => (
                <Book key={book.id} book={book} changeShelf={changeShelf}/>
              ))
            }
        </ol>
    </div>
  )
}

export default SearchResults