import React from 'react'
import styles from './SearchBar.module.scss'

const SearchBar = () => {
  return (
    <>
      <form action="" className={ styles.form}>
        <div>
          <input type="text" className={styles.input} />
          <select name="" id="" className={styles.select}>
            <option value="title">By Title</option>
            <option value="author">By Author</option>
            <option value="publisher">By Publisher</option>
          </select>
        </div>
        <button className={styles.btn }>Search</button>
      </form>
    </>
  );
}

export default SearchBar