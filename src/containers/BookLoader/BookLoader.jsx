import React, { useEffect, useState } from "react";
import { getBooks } from "../../services/book-services";
import BookList from "../../components/BookList/BookList";
import styles from "./BookLoader.module.scss";

const BookLoader = ({ searchData, bookData, updateBookData }) => {
  // const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log("bookloader run");
  console.log(searchData);
  useEffect(() => {
    if (searchData === null) {
      return;
    }
    const { searchTerm, searchBy, maxResult, startIndex} = searchData;
    setLoading(true);
    setError(null);
    getBooks(searchTerm, searchBy, maxResult, startIndex)
      .then((books) => updateBookData(books))
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, [searchData]);

  return (
    <div className={styles.container}>
      {loading && <p>Loading...</p>}
      {!loading && error && <p>{error.message}</p>}
      {!loading && bookData?.items?.length > 0 && (
        <BookList bookData={bookData} />
      )}
    </div>
  );
};

export default BookLoader;
