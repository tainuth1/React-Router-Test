import React, { useState } from "react";
import "./add-product.css";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    id: Date.now(),
    name: "",
    price: 0,
    category: "Food",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name != "" && formData.price != 0 && formData.image != "") {
      try {
        const res = await fetch("http://localhost:3000/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (!res.ok) {
          throw new Error("Failed to submit data.");
        }
        alert("Add Product Sucessfuly.");
        setFormData({
          id: Date.now(),
          name: "",
          price: 0,
          category: "Food",
          image: "",
        });
      } catch (error) {
        alert("Failed to submit data.");
      }
    } else {
      alert("Some Field is empty.");
    }
  };

  return (
    <div className="wrapper">
      <form className="add-product-form" onSubmit={handleSubmit}>
        <h2>Add Product</h2>
        <input
          type="text"
          onChange={handleChange}
          value={formData.name}
          name="name"
          placeholder="Enter product name"
        />
        <input
          type="number"
          onChange={handleChange}
          value={formData.price}
          name="price"
          placeholder="Enter product price"
        />
        <select
          name="category"
          onChange={handleChange}
          value={formData.category}
        >
          <option value="Food">Food</option>
          <option value="Technology">Technology</option>
          <option value="Clothe">Clothe</option>
        </select>
        <input
          type="url"
          name="image"
          onChange={handleChange}
          value={formData.image}
          placeholder="Enter product image (url)"
        />
        <button className="add-btn">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
