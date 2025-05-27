import { useEffect, useState } from "react";
import "./view-product.css";

const ViewProduct = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:3000/products");
      if (res.ok == false) {
        throw new Error("Failed to fetch product");
      }
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <h1>View All Products</h1>
      <div className="card-container">
        {products.length == 0 ? (
          <h2 style={{ textAlign: "center" }}>Empty Products</h2>
        ) : (
          products.map((pro) => (
            <div className="pro-card">
              <img src={pro.image} alt="" />
              <p>{pro.name}</p>
              <p>{pro.category}</p>
              <span>${pro.price}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ViewProduct;
