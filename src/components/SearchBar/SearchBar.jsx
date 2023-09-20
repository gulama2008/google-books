import React, { useState } from 'react'
import styles from './SearchBar.module.scss'

const SearchBar = ({ handleSubmit }) => {
  const [input, setInput] = useState('');
  const [selected, setSelected] = useState('title');
  const onSubmit = (e) => { 
    e.preventDefault();
    handleSubmit({ input, selected });
    console.log(input);
    console.log(selected);
    setInput('');
  }
  return (
    <>
      <form className={ styles.form} onSubmit={onSubmit}>
        <div>
          <input type="text" className={styles.input} value={input} onChange={e=>setInput(e.target.value)}/>
          <select name="" id="" className={styles.select} value={selected} onChange={e=>setSelected(e.target.value)}>
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