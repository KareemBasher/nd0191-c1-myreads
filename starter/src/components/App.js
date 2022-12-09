import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Shelves from "./Shelves";
import SearchBooks from './SearchBooks';
import { getAll, update } from '../BooksAPI'

function App() {
  const [books, setBooks] = useState()
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    const getBooks = async () => {
      setBooks(await getAll())
      setIsLoading(false)
    }
  
    getBooks()
  }, [])
  
  const changeShelf = async (book, shelf) => {
    await update(book, shelf)
    book.shelf = shelf
    setBooks(books.filter(({id}) => id !== book.id).concat(book))
  }

  if (isLoading) {
    return (
      <div>Please wait...</div>
    )
  }

  return (
    <Routes>
      <Route path='/' element={<Shelves books={books} changeShelf={changeShelf}/>} />
      <Route path='/search' element={<SearchBooks changeShelf={changeShelf} />} />
    </Routes>
  );
}

export default App;
