import React from "react";
import BookCard from "../BookCard/BookCard";
import styles from './BookList.module.scss'

const BookList = ({ bookData }) => {
  console.log(bookData);
    return (
      <>
        <ul className={styles.bookList}>
          {bookData.items.map((book) => (
            
              <BookCard book={book} key={bookData.id}/>
           
          ))}
        </ul>
      </>
    );
};

export default BookList;
