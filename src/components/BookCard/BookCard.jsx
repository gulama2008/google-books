import React, { useState } from "react";
import styles from "./BookCard.module.scss";

const BookCard = ({ book }) => {
  const bookInfo = book.volumeInfo;
  console.log(bookInfo);
  const [isModalDisplay, setIsModalDisplay] = useState(false);

  const openModal = () => { 
    setIsModalDisplay(true);
  }

  const closeModal = () => { 
    setIsModalDisplay(false);
  }


  return (
    <div className={styles.card} onClick={openModal}>
      <img
        src={
          bookInfo.imageLinks
            ? bookInfo.imageLinks.thumbnail
            : "src/assets/no-img.jpeg"
        }
        alt=""
        className={styles.img}
      />
      <div className={styles.info}>
        <p className={styles.title}>
          {bookInfo.title}
        </p>
        <p className={styles.author}>
          By {bookInfo.authors}
        </p>
      </div>

      {isModalDisplay&&<div className={styles.modal}>
        <div onClick={closeModal}>X</div>
        <img
          src={
            bookInfo.imageLinks
              ? bookInfo.imageLinks.thumbnail
              : "src/assets/no-img.jpeg"
          }
          alt=""
          className={styles.img}
        />
        <div className={styles.info}>
          <p className={styles.title}>
            <span className={styles.bold}>Title: </span>
            {bookInfo.title}
          </p>
          <p className={styles.author}>
            <span>Author: </span>
            {bookInfo.authors}
          </p>
          <p className={styles.description}>
            <span>Description: </span>
            {bookInfo.description}
          </p>
          <p>
            <span>Category: </span> {bookInfo.categories}
          </p>
          <p>
            <span>Language: </span> {bookInfo.language}
          </p>
          <p>
            <span>PublishedDate: </span> {bookInfo.publishedDate}
          </p>
          <p>
            <span>Publisher: </span> {bookInfo.publisher}
          </p>
        </div>
      </div>}
    </div>
  );
};

export default BookCard;
