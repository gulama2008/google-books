import React, { useState } from "react";
import styles from "./PageBtn.module.scss";

const PageBtn = ({ searchData, updateSearchData, bookData }) => {
  console.log("pagebtn run");
  const [startIndex, setStartIndex] = useState(0);
  const totalItems = bookData.totalItems;

  const nextPage = () => {
    const newStartIndex=parseInt(searchData.maxResult)+parseInt(searchData.startIndex);
    const newSearchData = {
      ...searchData,
      startIndex: newStartIndex,
    };
    updateSearchData(newSearchData);
    setStartIndex(newStartIndex);
  };
  const previousPage = () => {
    const currentMaxResult = searchData.maxResult;
    setStartIndex(startIndex - currentMaxResult);
    const newSearchData = { ...searchData, startIndex: startIndex };
    updateSearchData(newSearchData);
  };
  return (
    <div className={styles.btn_container}>
      <button onClick={previousPage} disabled={!searchData.startIndex} className={ styles.btn}>
        Previous
      </button>
      <button
        onClick={nextPage}
        disabled={
          searchData.startIndex == Math.round(totalItems / searchData.maxResult)
        }
        className={ styles.btn}
      >
        Next
      </button>
    </div>
  );
};

export default PageBtn;
