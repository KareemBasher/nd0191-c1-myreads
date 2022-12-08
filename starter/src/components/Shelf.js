import React from 'react'
import '../App.css'
import Book from './Book'

const Shelf = ({ shelfName, books }) => {
  return (
    <div>
        <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
            {books.map(({id}) => (
              <Book key={id} id={id} />
            ))}
            </ol>
        </div>
        </div>
    </div>
  )
}

export default Shelf