import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import '../App.css'
import { search } from '../BooksAPI'

const SearchBooks = () => {
  const [query, setQuery] = useState('')
  const [showingBooks, setShowingBooks] = useState()

  useEffect(() => {
    let isCanceled = false

    const searchBooks = async (query) => {
      if (isCanceled) return
      setShowingBooks(await search(query))
    }

    if (query !== '') searchBooks(query)
  
    return () => isCanceled = true
  }, [query])

  const handleOnChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <div className="search-books">
        <SearchBar searchQuery={query} handleOnChange={handleOnChange} />
        <SearchResults showingBooks={showingBooks?.error || query === ''? [] : showingBooks}/>  
    </div>
  )
}

export default SearchBooks