import React from "react";
import BookCard from "../BookCard/BookCard";
import styles from './BookList.module.scss'

const BookList = ({ books }) => {
    return (
      <>
        <ul className={styles.bookList}>
          {books.map((book) => (
            
              <BookCard book={book} />
           
          ))}
        </ul>
      </>
    );
};

export default BookList;
