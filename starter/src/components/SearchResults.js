import React, { useState, useEffect } from 'react'
import '../App.css'
import { getAll } from '../BooksAPI'
import Book from './Book'

const SearchResults = () => {
  const [books, setBooks] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getAllBooks = async () => {
      setBooks(await getAll())
      setIsLoading((false))
    }

    getAllBooks()
  })

  if (isLoading) {
    return (
      <div>Please wait...</div>
    )
  }

  return (
    <div className="search-books-results">
        <ol className="books-grid">
            {books.map(({id}) => (
              <Book key={id} id={id}/>
            ))}
        </ol>
    </div>
  )
}

export default SearchResults