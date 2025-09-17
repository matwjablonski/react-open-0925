import './App.css'
import Hello from './Hello'
import { books } from './data'

function App() {

  return (
   <div>
    <Hello name="Mateusz" data={books} />
    <ul>
      <li>Bitwa o Skandię. Zwiadowcy.</li>
      <li>Wiedźmin. Ostatnie życzenie.</li>
      <li>Harry Potter. Kamień filozoficzny.</li>
    </ul>
    <footer>Aplikacja przygotowana przez Mateusz Jabłoński</footer>
   </div>
  )
}

export default App
