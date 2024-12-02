import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ProductImage from './ProductImageUpload.js';
import axios from 'axios';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [restaurantPrice, setRestaurantPrice] = useState('');
  const [mrpPrice, setMrpPrice] = useState('');
  const [itemType, setItemType] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [stock, setStock] = useState('');
  const [description, setDescription] = useState('');
  const [productImages, setProductImages] = useState([{ id: 1, file: null }]);
  const [key, setKey] = useState(0);
  const [validationMessage, setValidationMessage] = useState('');

  const handleProductImageChange = (index, event) => {
    const newProductImages = [...productImages];
    newProductImages[index].file = event.target.files[0];
    setProductImages(newProductImages);
  };

  const addMoreImages = () => {
    setProductImages([...productImages, { id: productImages.length + 1, file: null }]);
  };

  const validatePrices = (restaurantPrice, mrpPrice) => {
    if (parseFloat(restaurantPrice) > parseFloat(mrpPrice)) {
      setValidationMessage('Sales price cannot be higher than product price');
      return false;
    } else {
      setValidationMessage('');
      return true;
    }
  }
  const validateForm = () => {
    if (!productName) {
      alert('Please fill the Product Name field');
      return false;
    }
    if (!restaurantPrice) {
      alert('Please fill the Restaurant Price field');
      return false;
    }
    if (!mrpPrice) {
      alert('Please fill the MRP Price field');
      return false;
    }
    if(!validatePrices(restaurantPrice, mrpPrice)){
      alert('Sales price cannot be higher than product price');
      return false;
    }
    if (!category) {
      alert('Please select the Category');
      return false;
    }
    if (!stock) {
      alert('Please select the Stock Availability');
      return false;
    }
    return true;
  };

  const formData = {
    productName,
    restaurantPrice,
    mrpPrice,
    itemType,
    category,
    subCategory,
    stock,
    description,
    productImages
  };
  const url = 'https://jsonplaceholder.typicode.com/posts';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    axios.post(url, formData)
      .then(response => {
        console.log(response.data);
        alert('Product added successfully');
        handleReset();
      })
      .catch(error => { console.log(error) });
  };

  const handleReset = () => {
    setProductName('');
    setRestaurantPrice('');
    setMrpPrice('');
    setItemType('');
    setCategory('');
    setSubCategory('');
    setStock('');
    setDescription('');
    setProductImages([{ id: 1, file: null }]);
    setKey(prevKey => prevKey + 1); // Change the key to remount the div
    setValidationMessage('');
  };

  return (
    <div className="row padding">
      <div className="col l2">&nbsp;</div>
      <div className='col l8'>

        <h3 className='center'>Add New Product</h3>

        <form className='container padding-16 card' id='myForm' onSubmit={handleSubmit}>
          <div className="group">
            <label htmlFor="product name">Product Name*</label>
            <input type="text" id='productName' name='productName' placeholder='Enter Product Name Here' className='input border' value={productName} onChange={(e) => setProductName(e.target.value)} />
          </div>

          <div className="row">
            <div className="half">
              <p>
                <label htmlFor="Restaurant Price (INR)*">Restaurant Price (INR)*</label>
                <input type="text" placeholder='Enter Sale Price Here' className='input border' id='restaurantPrice' name='restaurantPrice' style={{ width: '96%' }} value={restaurantPrice} onChange={(e) => {
                  const value = e.target.value.replace(/[^0-9]/g, '');// Restrict input to numbers only
                  setRestaurantPrice(value);
                  validatePrices(value, mrpPrice);
                }} />
              </p>
            </div>
            <div className="half">
              <p>
                <label htmlFor="MRP Price (INR)">MRP Price (INR)*</label>
                <input type="text" name='mrpPrice' id='mrpPrice' placeholder='Enter Product Price Here' className='input border' value={mrpPrice} onChange={(e) => {
                  const value = e.target.value.replace(/[^0-9]/g, '');
                  setMrpPrice(value);
                  validatePrices(restaurantPrice, value);
                }} />
              </p>
            </div>
          </div>
          {validationMessage && <span className='text-red'>{validationMessage}</span>}

          <div className="group">
            <label htmlFor="Item Type">Item Type</label>
            <select name="itemType" id="itemType" className='select border' value={itemType} onChange={(e) => setItemType(e.target.value)}  >
              <option value="" disabled selected>Select</option>
              <option value="Veg">Veg</option>
              <option value="Non Veg">Non Veg</option>
            </select>
          </div>

          <div className="row">
            <div className="half">
              <p>
                <label htmlFor="Category">Category*</label>
                <select name="category" id="category" className='select border' style={{ width: '96%' }} value={category} onChange={(e) => setCategory(e.target.value)}  >
                  <option value="" disabled selected>Select Your Category</option>
                  <option value="Non-Veg-pickles-572">Non-Veg-pickles-572</option>
                  <option value="Veg-pickles-618">Veg-pickles-618</option>
                  <option value="Best Sellers">Best Sellers</option>
                  <option value="Others">Others</option>
                </select>
              </p>
            </div>

            <div className="half">
              <p>
                <label htmlFor="Sub Category">Sub Category</label>
                <select name="subCategory" id="subCategory" className='select border' value={subCategory} onChange={(e) => setSubCategory(e.target.value)}>
                  <option value="" disabled selected>Select Your Sub Category</option>
                </select>
              </p>
            </div>
          </div>

          <div className="group">
            <label htmlFor="Stock Availability">Stock Availability:* </label>
            <input type='radio' className='radio' name='stock' value='yes' checked={stock === 'yes'}
              onChange={(e) => setStock(e.target.value)} />
            <label htmlFor="yes"> Yes </label>
            <input type="radio" className='radio' name='stock' value='no' checked={stock === 'no'} onChange={(e) => setStock(e.target.value)} />
            <label htmlFor="No"> No </label>
          </div>

          <label htmlFor="Description">Description:</label>
          <CKEditor
            editor={ClassicEditor}
            data={description}
            onChange={(event, editor) => {
              const data = editor.getData();
              setDescription(data);
            }}
            config={{
              toolbar: [
                'bold', 'italic', 'numberedList', 'bulletedList', 'indent', 'outdent', 'link', 'unlink', 'about',
              ]
            }}
          />

          <div className="row">
            {productImages.map((image, index) => (
              <div className="half margin-bottom" key={image.id}>
                <ProductImage onChange={(e) => handleProductImageChange(index, e)} key={key} />
              </div>
            ))}
          </div>

          <button type="button" className='btn indigo' onClick={addMoreImages}>Add More Images</button>

          <div>
            <button type='submit' className='btn blue margin-top'>Add Item</button>
            <button type='button' className='btn green margin-top margin-left' onClick={handleReset}>Reset</button>
          </div>
        </form>
      </div >
    </div>
  );
};

export default AddProduct;