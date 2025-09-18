import './App.css'
import Header from './components/Header'
import { Books } from './components/Books'
import { Footer } from './components/Footer'
import { Readers } from './components/Readers'
import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
   <div>
    <Header name="Mateusz">
      Jesteś zalogowany
    </Header>
  
    <Routes>
      <Route path="/books"  element={<Books />} />
      <Route path="/readers" element={
        <Suspense fallback={<p>Ładowanie czytelników...</p>}>
          <Readers />
        </Suspense>
      } />
    </Routes>

    <Footer />
   </div>
  )
}

export default App
