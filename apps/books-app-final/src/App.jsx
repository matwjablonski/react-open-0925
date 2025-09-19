import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import { Providers } from './Providers'
import { lazy, Suspense } from 'react'

const LazyReadersPage = lazy(() => import('./pages/ReadersPage'));
const LazyHomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));
const LazyBooksPage = lazy(() => import('./pages/BooksPage').then(module => ({ default: module.BooksPage })));
const LazyBookPage = lazy(() => import('./pages/BookPage').then(module => ({ default: module.BookPage })));
const LazyContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })));

function App() {
  const name = "Mateusz";

  return (
    <Providers>
      <div>
        <Header
          welcomeMsg={<h2>Witaj w aplikacji książkowej {name}</h2>}
        >
          Jesteś zalogowany
        </Header>
        <Suspense fallback={<p>Ładowanie strony...</p>}>
          <Routes>
            <Route path="/" element={<LazyHomePage />} />
            <Route path="/books"  element={
              <ProtectedRoute>
                <LazyBooksPage />
              </ProtectedRoute>
            } />
            <Route path="/book/:id" element={
              <ProtectedRoute>
                <LazyBookPage />
              </ProtectedRoute>
            } />
            <Route path="/readers" element={
              <ProtectedRoute>
                <LazyReadersPage />
              </ProtectedRoute>
            } />
            <Route path="/contact" element={<LazyContactPage />} />
            <Route path="/access-denied" element={<h2>Brak dostępu. Zaloguj się aby zobaczyć zawartość</h2>} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Providers>
  )
}

export default App
