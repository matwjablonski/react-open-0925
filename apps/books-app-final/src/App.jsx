import './App.css'
import Header from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Routes, Route, Router } from 'react-router-dom'
import { ReadersPage } from './pages/ReadersPage'
import { HomePage } from './pages/HomePage'
import { BooksPage } from './pages/BooksPage'
import { BookPage } from './pages/BookPage'
import { ContactPage } from './pages/ContactPage'
import { useState } from 'react'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import { UserContextProvider } from './context/UserContext'

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});

  const handleLogin = () => {
    setIsAuth(true);
    setUser({ name: 'Mateusz' });
  }

  return (
    <UserContextProvider value={{ isAuth, handleLogin, user }}>
      <div>
        <Header name="Mateusz" isAuth={isAuth}>
          Jesteś zalogowany
        </Header>
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/books"  element={
            <ProtectedRoute isAuth={isAuth}>
              <BooksPage />
            </ProtectedRoute>
          } />
          <Route path="/book/:id" element={
            <ProtectedRoute isAuth={isAuth}>
              <BookPage />
            </ProtectedRoute>
          } />
          <Route path="/readers" element={
            <ProtectedRoute isAuth={isAuth}>
              <ReadersPage />
            </ProtectedRoute>
          } />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/access-denied" element={<h2>Brak dostępu. Zaloguj się aby zobaczyć zawartość</h2>} />
        </Routes>

        <Footer />
      </div>
    </UserContextProvider>
  )
}

export default App
