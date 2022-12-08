import React from 'react'
import CloseSearchButton from './CloseSearchButton'
import '../App.css'

const SearchBar = () => {
  return (
    <div className="search-books-bar">
        <CloseSearchButton/>
        <div className="search-books-input-wrapper">
            <input
                type="text"
                placeholder="Search by title, author, or ISBN"
            />
        </div>
    </div>
  )
}

export default SearchBar