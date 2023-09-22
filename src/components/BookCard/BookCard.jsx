import React, { useState } from "react";
import styles from "./BookCard.module.scss";

const BookCard = ({ book }) => {
  const bookInfo = book.volumeInfo;
  console.log(bookInfo);

  const [isModalDisplay, setIsModalDisplay] = useState(false);
  console.log(isModalDisplay);
  const openModal = () => {
    console.log(isModalDisplay);
    setIsModalDisplay(true);
  };

  const closeModal = (e) => {
    console.log("close modal");
    console.log(isModalDisplay);
    setIsModalDisplay(false);
    e.stopPropagation();
    console.log('testtest');
    console.log(isModalDisplay);
  };
  console.log(isModalDisplay,'test');

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
        <p className={styles.title}>{bookInfo.title}</p>
        <p className={styles.author}>By {bookInfo.authors}</p>
      </div>

      <div
        className={[styles.modal, isModalDisplay && styles.show_modal].join(
          " "
        )}
      >
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
            <span>Language: </span> {bookInfo.language}
          </p>
          <p>
            <span>PublishedDate: </span> {bookInfo.publishedDate}
          </p>
          <p>
            <span>Preview Link: </span> <a href={bookInfo.previewLink}>Preview</a>
          </p>
          <p>
            <span>Publisher: </span> {bookInfo.publisher}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
