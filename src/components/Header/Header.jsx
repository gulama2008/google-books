import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={ styles.container}>
      <h1 className={styles.header}>Google Books API</h1>
      <h2 className={ styles.sub_header}>find all your favourites here</h2>
    </div>
  );
}

export default Header