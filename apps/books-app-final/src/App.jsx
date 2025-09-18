import './App.css'
import Header from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import { ReadersPage } from './pages/ReadersPage'
import { HomePage } from './pages/HomePage'
import { BooksPage } from './pages/BooksPage'
import { BookPage } from './pages/BookPage'
import { ContactPage } from './pages/ContactPage'
import { useState } from 'react'

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const handleLogin = () => {
    setIsAuth(true);
  }

  return (
   <div>
    <Header name="Mateusz" onLogin={handleLogin}>
      Jesteś zalogowany
    </Header>
  
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/books"  element={<BooksPage />} />
      <Route path="/book/:id" element={<BookPage />} />
      <Route path="/readers" element={
        <ProtectedRoute isAuth={isAuth}>
          <ReadersPage />
        </ProtectedRoute>
      } />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>

    <Footer />
   </div>
  )
}

export default App
