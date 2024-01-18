import React, { useState } from 'react';

const ProductForm = ({ onAddToCart }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleAddToCart = () => {
    if (!imageUrl || !productName || !productDescription || !price) {
      alert('Please fill in all fields.');
      return;
    }

    const product = {
      imageUrl,
      productName,
      productDescription,
      price: parseFloat(price), 
    };

    
    onAddToCart(product);


    setImageUrl('');
    setProductName('');
    setProductDescription('');
    setPrice('');
  };

  return (
    <div className="container col-sm-10 col-md-10 col-lg-8 col-xl-6 col-xxl-6 mt-4 shadow-lg p-3 mb-5 bg-white rounded">
      <h2>Add to Products</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="imageUrl" className="form-label">Image URL:</label>
          <input
            type="text"
            className="form-control"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="productName" className="form-label">Product Name:</label>
          <input
            type="text"
            className="form-control"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="productDescription" className="form-label">Product Description:</label>
          <textarea
            className="form-control"
            id="productDescription"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price:</label>
          <input
            type="text"
            className="form-control"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <button type="button" className="btn btn-primary" onClick={handleAddToCart}>
          Add to Products 
          {/* <i class="bi bi-cart4"></i> */}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
