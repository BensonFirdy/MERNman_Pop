import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const NewProductForm = (props) => {
  let [title, setTitle] = useState("");
  let [price, setPrice] = useState("");
  let [description, setDescription] = useState("");

  let [errors, setErrors] = useState({});

  const history = useHistory();

  const addProduct = (e) => {
    e.preventDefault();

    let formInfo = { title, price, description };

    axios
      .post("http://localhost:8000/api/products", formInfo)
      .then((res) => {
        console.log("response after posting form", res);

        if (res.data.error) {
          setErrors(res.data.error.errors);
        } else {
          setTitle("");
          setPrice("");
          setDescription("");

          props.setNewProductToggle(!props.newProductToggle);

          history.push("/");
        }
      })
      .catch((err) => console.log("errr", err));
  };

  return (
    <div>
      <h3>Create Product</h3>
      <form onSubmit={addProduct}>
        <div>
          <label htmlFor="">Title:</label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <p>{errors.title?.message}</p>
        </div>
        <div>
          <label htmlFor="">Price ($):</label>
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
          <p>{errors.price?.message}</p>
        </div>
        <div>
          <label htmlFor="">Description:</label>
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <p>{errors.description?.message}</p>
        </div>

        <input type="submit" value="Add Product" />
      </form>
    </div>
  );
};

export default NewProductForm;
