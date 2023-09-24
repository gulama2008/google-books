import React, { useState } from 'react'
import styles from './PageBtn.scss';

const PageBtn = ({ searchData, updateSearchData,bookData}) => {
    console.log('pagebtn run');
    const [startIndex, setStartIndex] = useState(0);
    // updateSearchData({ ...searchData, startIndex: startIndex });
    const totalItems = bookData?.totalItems;
    console.log(totalItems);
    console.log(searchData?.startIndex);
    console.log(searchData?.startIndex==0);
    const nextPage = () => {
        const currentMaxResult = searchData.maxResult;
        setStartIndex(parseInt(startIndex) + parseInt(currentMaxResult));
        const newSearchData = { ...searchData, startIndex: startIndex };
        console.log(newSearchData);
      updateSearchData(newSearchData);
    };
    const previousPage = () => { 
        const currentMaxResult = searchData.maxResult;
        setStartIndex(startIndex - currentMaxResult);
        const newSearchData = { ...searchData, startIndex: startIndex };
        updateSearchData(newSearchData);
    }
    return <div>
        <button onClick={previousPage} disabled={ searchData?.startIndex==0}>Previous Page</button>
      <button onClick={nextPage}>Next Page</button>
  </div>;
};

export default PageBtn