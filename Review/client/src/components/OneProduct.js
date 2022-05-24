import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useHistory } from "react-router-dom";

const OneProduct = () => {

  const { _id } = useParams();


  const [productInfo, setProductInfo] = useState({});

  const history = useHistory(); 

  useEffect(() => {

    axios
      .get(`http://localhost:8000/api/products/${_id}`)
      .then((res) => {
        console.log(res); 

        setProductInfo(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);



  const deleteProduct = () => {
    axios
      .delete(`http://localhost:8000/api/products/${_id}`)
      .then((res) => {
        console.log("res=>", res);
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Details about one Product. ID is {_id}</h3>
      <h3>Title: {productInfo.title}</h3>
      <p>Price:{productInfo.price}</p>
      <p>Description: {productInfo.description}</p>

      <button onClick={deleteProduct} >
        Delete {productInfo.title}
      </button>
    </div>
  );
};

export default OneProduct;