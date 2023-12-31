import { useState } from "react";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import styles from "./App.module.scss";
import BookLoader from "./containers/BookLoader/BookLoader";
import PageOption from "./components/PageOption/PageOption";
import PageBtn from "./components/PageBtn/PageBtn";

function App() {
  const [searchData, setSearchData] = useState(null);
  const [bookData, setBookData] = useState(null);
  const [hasNextPage, setHasNextPage] = useState(true);

  const updateSearchData = (data) => {
    setSearchData(data);
  };
  const updateBookData = (data) => {
    setBookData(data);
  };
  const updateHasNextPage = (data) => { 
    setHasNextPage(data);
  }
  return (
    <div className={styles.container}>
      <Header/>
      <SearchBar searchData={searchData} updateSearchData={updateSearchData} />
      {bookData && (
        <PageOption
          className={ styles.container_pageOption}
          searchData={searchData}
          updateSearchData={updateSearchData}
        />
      )}
      <BookLoader
        searchData={searchData}
        bookData={bookData}
        updateBookData={updateBookData}
        updateHasNextPage={ updateHasNextPage}
      />
      {bookData && (
        <PageBtn
          searchData={searchData}
          updateSearchData={updateSearchData}
          bookData={bookData}
          hasNextPage={ hasNextPage}
        />
      )}
    </div>
  );
}

export default App;
