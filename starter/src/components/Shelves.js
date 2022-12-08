import React, { useEffect, useState } from 'react'
import SearchButton from './SearchButton'
import Shelf from './Shelf'
import * as booksAPI from '../BooksAPI'
import '../App.css'

const Shelves = () => {
    const [books, setBooks] = useState()
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        const getAllBooks = async () => {
            setBooks(await booksAPI.getAll())
            setIsLoading(false)
        }

        getAllBooks()
    }, [])

    const updateBook = (book) => {
        const bookIndex = books.findIndex(({ id }) => book.id === id)
        const newBooks = [...books]
        newBooks[bookIndex] = book
        setBooks(newBooks)
    }

    if (isLoading) {
        return (
            <div>Please wait...</div>
        )
    }
    return (
        <div>
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>

            <Shelf shelfName={'Currently Reading'} updateBook={updateBook}
                books={books.filter(({ shelf }) => shelf === 'currentlyReading')}
            />
            <Shelf shelfName={'Want to Read'} updateBook={updateBook}
                books={books.filter(({ shelf }) => shelf === 'wantToRead')}
            />
            <Shelf shelfName={'Read'} updateBook={updateBook}
                books={books.filter(({ shelf }) => shelf === 'read')}
            />
            
            <SearchButton/>
        </div>
    )
}

export default Shelves