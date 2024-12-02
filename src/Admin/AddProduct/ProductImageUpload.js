import React, { useState } from 'react';
import { Checkmark } from 'react-checkmark'

const ProductImageUpload = ({ onChange }) => {
  const [imageSrc, setImageSrc] = useState('');
  const [errorMessages, setErrorMessages] = useState('');

  const error = "Only jpeg and png files are allowed";
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
        e.target.value = null;
        setImageSrc('');
        setErrorMessages(error);
        setTimeout(() => {
          alert(error);
        }, 200);
        return;
      }
        setErrorMessages('');
        const reader = new FileReader();
        reader.onloadend = () => {
          setImageSrc(reader.result);
        };
        reader.readAsDataURL(file);
        onChange(e);
      }
  };

  return (
    <>
      <div className="group">
        <label htmlFor="Product Image">Product Image (500px X 500px)</label>
        <input type="file" name='productImage' id='productImage' onChange={handleImageChange} />
      </div>
      {
        imageSrc &&
        (
          <div className="image-container ">
            <img className='zone' src={imageSrc} alt="Product" />
            <Checkmark size='medium' className='checkmark' />
          </div>
        )}
      {errorMessages && <span className='text-red'>{errorMessages}</span>}
    </>
  );
};

export default ProductImageUpload;