import React, { useEffect, useState } from "react";
import { getBooks } from "../../services/book-services";
import BookList from "../../components/BookList/BookList";
import styles from "./BookLoader.module.scss";

const BookLoader = ({ searchData, bookData, updateBookData,updateHasNextPage }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    if (searchData === null) {
      return;
    }
    const { searchTerm, searchBy, maxResult, startIndex} = searchData;
    setLoading(true);
    setError(null);
    getBooks(searchTerm, searchBy, maxResult, startIndex)
      .then((books) => {
        updateBookData(books);
        getBooks(searchTerm, searchBy, maxResult, parseInt(maxResult) + parseInt(startIndex))
          .then(books => updateHasNextPage(true))
          .catch(e => updateHasNextPage(false));
      })
      .catch((e) => {
        updateBookData(null);
        setError(`No results for ${searchTerm}`)
      })
      .finally(() => setLoading(false));
  }, [searchData]);

  return (
    <div className={styles.container}>
      {loading && <p>Loading...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && bookData?.items?.length > 0 && (
        <BookList bookData={bookData} />
      )}
    </div>
  );
};

export default BookLoader;
