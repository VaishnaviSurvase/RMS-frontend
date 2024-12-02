import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data from './Data.json';

const NewOrders = ({ handleContent }) => {
  const [searchitem, setSearchItem] = useState('');
  const [resultsearch, setResultsearch] = useState(data);

  const handleSearch = (e) => {
    setSearchItem(e.target.value);
    const results = data.filter((item) => item.orderid.includes(e.target.value));
    setResultsearch(results);
  };


  return (
    <>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2>New Orders ({data.length})</h2>
        <form >
          <p>
            <input
              className="input border round card"
              placeholder="Search Orders..."
              value={searchitem}
              onChange={handleSearch}
            />
          </p>
        </form>
      </div>
      {
      resultsearch.length > 0 ? (resultsearch.map((items) => (
        <div
          className="container white card margin-bottom padding-16"
          style={{ maxWidth: '770px', marginLeft: '15px' }}
        >
          <h5>Order Id : {items.orderid}</h5>
          <span className="text-grey">{items.orderTime}</span>
          <div className="row">
            <div className="col s6 m6 16">
              <h6>No Of Items : {items.NoOfItems}</h6>
              <h4>
                Total : {'\u20B9'} &nbsp;<b> {items.Total}</b>
              </h4>
            </div>
            <div className="col s6 m6 16">
              <a className="button white hover-none margin-botton" href="/">
                Name : <b>{items.Name}</b>
              </a>
              <br />
              <Link
                to="/"
                className="btn white round-xxlarge text-theme border broder-grey margin-left"
              >
                {items.Number} &nbsp; <i className="fas fa-phone"></i>
              </Link>
            </div>
          </div>
          <hr />
          <div className="center">
            <button className="btn black round small left">Confirmed</button>
            <span className="text-theme center">
              <b>order confirmed</b>
            </span>
            <Link
            onClick={()=>handleContent('View',items.orderid)}
              className="btn blue right round small"
            >
              View
            </Link>

          </div>
        </div>
      ))) :( <h4 className='margin-left'>No result found for OrderID :{searchitem}</h4>)}
    </>
  );
};

export default NewOrders;