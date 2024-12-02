import React from 'react';

export const SingleBoxProduct = ({ product }) => {
  return (
    <div className='col m3'>
      <div
        className='section card-4 round-large'
        style={{ maxWidth: '300px' }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{ width: '100%' }}
        />
        <div className='container'>
          <p className='large'>{product.name}</p>
          <span>Rating: {product.rating}</span>
          <div className='row'>
            <div className='col m6'>
              <h4 className='text-red xlarge'>
                <b>{product.price}</b>
              </h4>
            </div>
            <div className='col m6'>
              <button className='btn orange round margin-bottom card'>
                + Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
