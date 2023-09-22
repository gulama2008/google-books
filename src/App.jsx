import { useState } from 'react'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import styles from './App.module.scss'
import BookLoader from './containers/BookLoader/BookLoader'

function App() {
  const [count, setCount] = useState(0)
  const [searchData, setSearchData] = useState(null);
  const onSearchSubmit = (data) => {
    setSearchData(data);
   }
  return (
    <div className={ styles.container}>
      <Header />
      <SearchBar handleSubmit={ onSearchSubmit} />
      <BookLoader searchData={ searchData} />
    </div>
  )
}

export default App
