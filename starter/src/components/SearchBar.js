import React from 'react'
import CloseSearchButton from './CloseSearchButton'
import '../App.css'

const SearchBar = ({ searchQuery, handleOnChange }) => {
  return (
    <div className="search-books-bar">
        <CloseSearchButton/>
        <div className="search-books-input-wrapper">
            <input
                type="text"
                placeholder="Search by title or author"
                value={searchQuery}
                onChange={(e) => handleOnChange(e)}
            />
        </div>
    </div>
  )
}

export default SearchBar