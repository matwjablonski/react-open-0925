import './App.css'
import Header from './components/Header'
import { Books } from './components/Books'
import { Footer } from './components/Footer'
import { books } from './data'

function App() {

  return (
   <div>
    <Header name="Mateusz" />
    <Books books={books} />
    <Footer />
   </div>
  )
}

export default App
