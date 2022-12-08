import React, { useState, useEffect } from 'react'
import '../App.css'
import Book from './Book'

const SearchResults = ({ showingBooks }) => {
  const [books, setBooks] = useState(showingBooks)

  useEffect(() => {
    setBooks(showingBooks)
  }, [showingBooks])

  const updateBook = (book) => {
    const bookIndex = books.findIndex(({ id }) => book.id === id)
    const newBooks = [...books]
    newBooks[bookIndex] = book
    setBooks(newBooks)
  }

  return (
    <div className="search-books-results">
        <ol className="books-grid">
            {books.map(({id}) => (
              <Book key={id} id={id} updateBook={updateBook}/>
            ))}
        </ol>
    </div>
  )
}

export default SearchResults