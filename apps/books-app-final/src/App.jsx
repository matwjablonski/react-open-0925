import './App.css'
import Header from './components/Header'
import { Books } from './components/Books'
import { Footer } from './components/Footer'
import { books } from './data'
import { Suspense } from 'react'

function App() {

  return (
   <div>
    <Header name="Mateusz">
      Jesteś zalogowany
    </Header>
    <Books books={books} />
    <Footer />
   </div>
  )
}

export default App
