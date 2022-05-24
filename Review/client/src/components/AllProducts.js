import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";


const AllProducts = (props) => {

  const [allProducts, setAllProducts] = useState([]); 


  const [deleteToggle, setDeleteToggle] = useState(false);


  useEffect(() => {

    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        console.log("response:", res);

        setAllProducts(res.data.results);
      })
      .catch((err) => {
        console.log("errr:", err);
      });
  }, [deleteToggle, props.newProductToggle]); 


  const deleteProduct = (id) => {
    console.log("deleting product with this id->", id);
    axios
      .delete(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        console.log("res after deleting", res);
        setDeleteToggle(!deleteToggle);
      })
      .catch((err) => console.log(err));
  };


  return (
    <div>
      <h2>All the products</h2>
      <div>
        {allProducts.map((productObj, idx) => {
          return (
            <div
              key={productObj._id}
            >
              <div >
                <h5 >
                  <Link to={`/products/${productObj._id}`}>
                    {productObj.title}
                  </Link>
                </h5>
          
               
                <p>
                  <Link to={`/edit/${productObj._id}`} >
                    Edit {productObj.title}
                  </Link>
                </p>
                <button
                  onClick={(e) => {
                    deleteProduct(productObj._id);
                  }}
                >
                  Delete {productObj.title}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};


export default AllProducts;