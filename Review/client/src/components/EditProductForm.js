import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";


const EditProductForm = () => {

  const [productInfo, setProductInfo] = useState({});


  const { _id } = useParams();


  const history = useHistory(); 

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${_id}`)
      .then((res) => {
        console.log("res-->", res);
        setProductInfo(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);


  const changeHandler = (e) => {
   
      setProductInfo({
        ...productInfo, 
        [e.target.name]: e.target.value, 
      });
    
  };


  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/products/${_id}`, productInfo)
      .then((res) => {
        console.log(res);
        history.push("/"); 
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h3>Edit Product: {_id}</h3>
        <div >
          <label htmlFor="">Title:</label>

          <input
            type="text"
            name="title"
            onChange={changeHandler}
            value={productInfo.title}
          />
        </div>
        <div >
          <label htmlFor="">Price ($):</label>
          <input
            type="number"
            name="price"
            onChange={changeHandler}
            value={productInfo.price}
          />
        </div>
        <div >
          <label htmlFor="">Description:</label>
          <input
            type="text"
            name="description"
            onChange={changeHandler}
            value={productInfo.description}
          />
        </div>
      
        <input
          type="submit"
          value="Update Product"
        />
      </form>
    </div>
  );
};

export default EditProductForm;