import { useState } from 'react'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import BookList from './components/BookList/BookList'
import styles from './App.module.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={ styles.container}>
      <Header />
      <SearchBar />
      <BookList/>
    </div>
  )
}

export default App
