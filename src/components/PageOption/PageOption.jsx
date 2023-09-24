import React from 'react'

const PageOption = ({ searchData,updateSearchData }) => {
    const onChange = (e) => { 
        const currentMaxResult = e.target.value;
        const newSearchData = { ...searchData, maxResult: currentMaxResult };
        updateSearchData(newSearchData);
    }
    console.log('pageoption run');
  return (
      <form>
          <select name="" id="" onChange={onChange}>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={40}>40</option>
          </select>
    </form>
  )
}

export default PageOption