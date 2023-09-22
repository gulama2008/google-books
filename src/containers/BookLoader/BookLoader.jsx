import React, { useEffect, useState } from 'react'
import { getBooks } from '../../services/book-services'
import BookList from '../../components/BookList/BookList';
import styles from './BookLoader.module.scss';

const BookLoader = ({ searchData}) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => { 
    if (searchData === null) { 
      return;
    }
    const { input: searchTerm, selected: searchBy } = searchData;
    setLoading(true);
    setError(null);
    getBooks(searchTerm, searchBy)
      .then(books => setBooks(books))
      .catch(e => setError(e))
      .finally(() => setLoading(false));
  }, [searchData])
  
  return (
    <div className={ styles.container}>
      {loading && <p>Loading...</p>}
      {!loading && error && <p>{error.message}</p>}
      {!loading && books.length > 0 && <BookList books={ books} />}
      
    </div>
  )
}

export default BookLoader