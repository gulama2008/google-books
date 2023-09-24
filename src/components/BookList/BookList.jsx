import React from "react";
import BookCard from "../BookCard/BookCard";
import styles from './BookList.module.scss'

const BookList = ({ bookData }) => {
    return (
      <>
        <ul className={styles.bookList}>
          {bookData.items.map((book) => (
            
              <BookCard book={book} />
           
          ))}
        </ul>
      </>
    );
};

export default BookList;
