import React, { useState } from 'react'
import styles from './SearchBar.module.scss'

const SearchBar = ({ searchData,updateSearchData }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchBy, setSearchBy] = useState('intitle');
  const onSubmit = (e) => { 
    e.preventDefault();
    const newSearchData = { ...searchData, searchTerm: searchTerm, searchBy: searchBy };
    console.log(newSearchData);
    updateSearchData(newSearchData);
    console.log(searchTerm);
    console.log(searchBy);
    // setInput('');
  }
  return (
    <>
      <form className={ styles.form} onSubmit={onSubmit}>
        <div className={ styles.input_container}>
          <input type="text" className={styles.input} value={searchTerm} onChange={e=>setSearchTerm(e.target.value)}/>
          <select name="" id="" className={styles.select} value={searchBy} onChange={e=>setSearchBy(e.target.value)}>
            <option value="intitle">By Title</option>
            <option value="inauthor">By Author</option>
            <option value="inpublisher">By Publisher</option>
          </select>
        </div>
        <button className={styles.btn }>Search</button>
      </form>
    </>
  );
}

export default SearchBar