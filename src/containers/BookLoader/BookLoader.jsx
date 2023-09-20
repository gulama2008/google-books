import React, { useEffect } from 'react'
import { getBooks } from '../../services/book-services'

const BookLoader = () => {
  useEffect(() => { 
    getBooks('conan','intitle')
  },[])
  return (
    <div>BookLoader</div>
  )
}

export default BookLoader