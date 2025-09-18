import './App.css'
import Header from './components/Header'
import { Books } from './components/Books'
import { Footer } from './components/Footer'
import { Readers } from './components/Readers'
import { Suspense } from 'react'

function App() {

  return (
   <div>
    <Header name="Mateusz">
      Jesteś zalogowany
    </Header>
    <Suspense fallback={<p>Ładowanie czytelników...</p>}>
      <Readers />
    </Suspense>
    <Books />
    <Footer />
   </div>
  )
}

export default App
