import { Routes, Route } from 'react-router-dom'
import Shelves from "./Shelves";
import SearchBooks from './SearchBooks';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Shelves/>} />
      <Route path='/search' element={<SearchBooks/>}/>
    </Routes>
  );
}

export default App;
