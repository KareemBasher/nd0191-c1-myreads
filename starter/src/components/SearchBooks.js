import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import '../App.css'
import { getAll } from '../BooksAPI'

const SearchBooks = () => {
  const [query, setQuery] = useState('')
  const [books, setBooks] = useState()
  const [showingBooks, setShowingBooks] = useState()
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    let isCanceled = false
    const getAllBooks = async () => {
      if (!isCanceled) {
        setBooks(await getAll())
        setShowingBooks(books)
        setIsLoading((false))
      }
    }

    getAllBooks()

    return () => isCanceled = true
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleOnChange = (e) => {
    setQuery(e.target.value)
    searchBooks(e.target.value)
  }

  const searchBooks = (query) => {
    setShowingBooks(
      query === ''
      ? books
      : books.filter(({ title, authors, industryIdentifiers }) => 
          title.toLowerCase().includes(query.toLowerCase())
          || authors[0].toLowerCase().includes(query.toLowerCase())
          || industryIdentifiers[0].identifier.includes(query)
          || industryIdentifiers[1].identifier.includes(query)
        )
    )
  }

  if (isLoading) {
    return (
      <div></div>
    )
  }

  return (
    <div className="search-books">
        <SearchBar searchQuery={query} handleOnChange={handleOnChange} />
        <SearchResults showingBooks={showingBooks? showingBooks : books}/>  
    </div>
  )
}

export default SearchBooks