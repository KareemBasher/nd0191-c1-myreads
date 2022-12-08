import React from 'react'
import '../App.css'

const Shelf = ({ shelfName }) => {
  return (
    <div>
        <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                
            </ol>
        </div>
        </div>
    </div>
  )
}

export default Shelf