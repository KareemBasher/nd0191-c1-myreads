import React, { useEffect, useState } from 'react'
import SearchButton from './SearchButton'
import Shelf from './Shelf'
import * as booksAPI from '../BooksAPI'
import '../App.css'

const Shelves = () => {
    const [books, SetBooks] = useState()
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        const getAllBooks = async () => {
            SetBooks(await booksAPI.getAll())
            setIsLoading(false)
        }

        getAllBooks()
    }, [])

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

            <Shelf shelfName={'Currently Reading'}
                books={books.filter(({ shelf }) => shelf === 'currentlyReading')}
            />
            <Shelf shelfName={'Want to Read'}
                books={books.filter(({ shelf }) => shelf === 'wantToRead')}
            />
            <Shelf shelfName={'Read'}
                books={books.filter(({ shelf }) => shelf === 'read')}
            />
            
            <SearchButton/>
        </div>
    )
}

export default Shelves