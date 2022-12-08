import React, { useEffect, useState } from 'react'
import SearchButton from './SearchButton'
import Shelf from './Shelf'
import * as booksAPI from '../BooksAPI'

const Shelves = () => {
    const [books, SetBooks] = useState()
    
    useEffect(() => {
        const getAllBooks = async () => {
            SetBooks(await booksAPI.getAll())
        }

        getAllBooks()
    }, [])

    const currentlyReadingBooks = books.filter(({ shelf }) => shelf === 'currentlyReading')
    const wantToReadBooks = books.filter(({ shelf }) => shelf === 'wantToRead')
    const readBooks = books.filter(({ shelf }) => shelf === 'read')

    const shelves = ['Currently Reading', 'Want to Read', 'Read']
    return (
        <div>
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>

            <Shelf shelfName={shelves[0]} books={currentlyReadingBooks} />
            <Shelf shelfName={shelves[1]} books={wantToReadBooks}/>
            <Shelf shelfName={shelves[2]} books={readBooks}/>
            
            <SearchButton/>
        </div>
    )
}

export default Shelves