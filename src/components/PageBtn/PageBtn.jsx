import React, { useState } from "react";
import styles from "./PageBtn.module.scss";

const PageBtn = ({ searchData, updateSearchData, hasNextPage }) => {
  const [startIndex, setStartIndex] = useState(0);

  const nextPage = () => {
    const newStartIndex =
      parseInt(searchData.maxResult) + parseInt(searchData.startIndex);
    const newSearchData = {
      ...searchData,
      startIndex: newStartIndex,
    };
    updateSearchData(newSearchData);
    setStartIndex(newStartIndex);
  };
  const previousPage = () => {
    const newStartIndex =
      parseInt(searchData.startIndex)-parseInt(searchData.maxResult);
    const newSearchData = {
      ...searchData,
      startIndex: newStartIndex,
    };
    updateSearchData(newSearchData);
    setStartIndex(newStartIndex);
  };
  return (
    <div className={styles.btn_container}>
      <button
        onClick={previousPage}
        disabled={searchData.startIndex == 0}
        className={styles.btn}
      >
        Previous
      </button>
      <button
        onClick={nextPage}
        disabled={
          !hasNextPage
        }
        className={styles.btn}
      >
        Next
      </button>
    </div>
  );
};

export default PageBtn;
