import React from 'react'
import SearchButton from './SearchButton'
import Shelf from './Shelf'
import '../App.css'

const Shelves = ({books, changeShelf}) => {
    return (
        <div>
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>

            <Shelf shelfName={'Currently Reading'} changeShelf={changeShelf}
                books={books.filter(({ shelf }) => shelf === 'currentlyReading')}
            />
            <Shelf shelfName={'Want to Read'} changeShelf={changeShelf}
                books={books.filter(({ shelf }) => shelf === 'wantToRead')}
            />
            <Shelf shelfName={'Read'} changeShelf={changeShelf}
                books={books.filter(({ shelf }) => shelf === 'read')}
            />
            
            <SearchButton/>
        </div>
    )
}

export default Shelves