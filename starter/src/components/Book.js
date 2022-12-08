import React, { useEffect, useState } from 'react'
import { get, update } from '../BooksAPI'
import '../App.css'
import BookShelfChanger from './BookShelfChanger'

const Book = ({ id, updateBook }) => {
  const [book, setBook] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getBook = async (id) => {
      setBook(await get(id))
      setIsLoading(false)
    }

    getBook(id)
  }, [id])

  const changeShelf = async (shelf) => {
    await update(book, shelf)
    const newBook = book
    newBook.shelf = shelf
    setBook(newBook)
    updateBook(newBook)
  }

  if (isLoading) {
    return (
      <div></div>
    )
  }
  
  return (
    <li>
        <div className="book">
            <div className="book-top">
                <div
                className="book-cover"
                style={{
                    width: 128,
                    height: 193,
                    backgroundImage:
                    `url(${book.imageLinks.thumbnail})`,
                }}
                ></div>
                <BookShelfChanger shelf={book.shelf} changeShelf={changeShelf}/>
            </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors}</div>
        </div>
    </li>
  )
}

export default Book