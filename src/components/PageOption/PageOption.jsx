import React from 'react'
import styles from './PageOption.module.scss'

const PageOption = ({ searchData,updateSearchData,className }) => {
    const onChange = (e) => { 
        const currentMaxResult = e.target.value;
        const newSearchData = { ...searchData, maxResult: currentMaxResult };
        updateSearchData(newSearchData);
    }
  return (
      <form className={className}>
          <label htmlFor="pageOption">Results per page</label>
          <select name="" id="pageOption" onChange={onChange} className={ styles.select}>
              <option value={12}>12</option>
              <option value={24}>24</option>
              <option value={36}>36</option>
          </select>
    </form>
  )
}

export default PageOption