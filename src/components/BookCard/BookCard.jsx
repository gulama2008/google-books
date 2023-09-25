import React, { useState } from "react";
import styles from "./BookCard.module.scss";

const BookCard = ({ book }) => {
  const bookInfo = book.volumeInfo;
  // console.log('bookcard run');
  // console.log(bookInfo);

  const [isModalDisplay, setIsModalDisplay] = useState(false);
  // console.log(isModalDisplay);
  const openModal = () => {
    console.log(isModalDisplay);
    console.log(book.volumeInfo);
    setIsModalDisplay(true);
  };

  const closeModal = (e) => {
    console.log("close modal");
    console.log(isModalDisplay);
    setIsModalDisplay(false);
    e.stopPropagation();
    console.log("testtest");
    console.log(isModalDisplay);
  };
  // console.log(isModalDisplay, "test");

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
        <div onClick={closeModal} className={styles.show_modal_close}>
          <img
            src="src/assets/close.png"
            alt=""
            className={styles.show_modal_close_icon}
          />
        </div>
        <img
          src={
            bookInfo.imageLinks
              ? bookInfo.imageLinks.thumbnail
              : "src/assets/no-img.jpeg"
          }
          alt=""
          className={styles.show_modal_img}
        />
        <div className={styles.show_modal_info}>
          <h4 className={styles.show_modal_info_title}>Title:</h4>
          <p>{bookInfo.title}</p>
          <h4>Author:</h4>
          <p>{bookInfo.authors}</p>
          <h4>Language:</h4>
          <p>{bookInfo.language}</p>
          <h4>Published Date:</h4>
          <p>{bookInfo.publishedDate}</p>
          <h4>Preview Link:</h4>
          <p>
            <a href={bookInfo.previewLink}>Preview</a>
          </p>
          <h4>Publisher:</h4>
          <p>{bookInfo.publisher}</p>
          <h4 className={styles.show_modal_info_description}>Description:</h4>
          <div className={ styles.description_content}>
            {bookInfo.description
              ? bookInfo.description
              : "No description for this book"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
