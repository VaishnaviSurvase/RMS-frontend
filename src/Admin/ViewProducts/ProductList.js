import React from 'react'
import { Link } from 'react-router-dom';

const ProductList = () => {
  return (
    <div className='container'>
      <Link to='/' className='btn green right margin-top'>Add Dishes</Link>
      <h2>Dishes ( {2} )</h2>

      <div className="dt-buttons">
        <button className='margin-right dt-button' name="csv"><span>CSV</span></button>
        <button className='margin-right dt-button' name="excel">Excel</button>
        <button className='margin-right dt-button' name="pdf">PDF</button>
        <button className='margin-right dt-button' name="print">Print</button>
        <button className='margin-right dt-button' name="column visibility">Column Visibility</button>
      </div>
      show <select name="entries_count" id="entries_count">
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="500">500</option>
        <option value="-1">All</option>
      </select> entries

      <div className="dataTables_filter">
        <label htmlFor="search">Search: </label>
        <input type="search" />
      </div>


    </div>
  )
}

export default ProductList;

