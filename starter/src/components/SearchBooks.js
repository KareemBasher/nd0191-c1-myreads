import React from 'react'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import '../App.css'

const SearchBooks = () => {
  return (
    <div className="search-books">
        <SearchBar />
        <SearchResults/>  
    </div>
  )
}

export default SearchBooks