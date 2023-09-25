import React from 'react'
import styles from './PageOption.module.scss'

const PageOption = ({ searchData,updateSearchData,className }) => {
    const onChange = (e) => { 
        const currentMaxResult = e.target.value;
        const newSearchData = { ...searchData, maxResult: currentMaxResult };
        updateSearchData(newSearchData);
    }
    console.log('pageoption run');
  return (
      <form className={className}>
          <label htmlFor="pageOption">Books per page</label>
          <select name="" id="pageOption" onChange={onChange} className={ styles.select}>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={40}>40</option>
          </select>
    </form>
  )
}

export default PageOption