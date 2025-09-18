import './App.css'
import Header from './components/Header/Header'
import { Footer } from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import { ReadersPage } from './pages/ReadersPage'
import { HomePage } from './pages/HomePage'
import { BooksPage } from './pages/BooksPage'
import { BookPage } from './pages/BookPage'
import { ContactPage } from './pages/ContactPage'

function App() {

  return (
   <div>
    <Header name="Mateusz">
      Jesteś zalogowany
    </Header>
  
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/books"  element={<BooksPage />} />
      <Route path="/book/:id" element={<BookPage />} />
      <Route path="/readers" element={<ReadersPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>

    <Footer />
   </div>
  )
}

export default App
