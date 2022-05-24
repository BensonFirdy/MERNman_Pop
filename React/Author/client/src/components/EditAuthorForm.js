import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const EditAuthorForm = () => {
  const [authorInfo, setAuthorInfo] = useState({});

  const { _id } = useParams();

  const history = useHistory(); //initilized history so we can redirect

  let [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/authors/${_id}`)
      .then((res) => {
        console.log("res-->", res);
        setAuthorInfo(res.data.results);
        
      })
      .catch((err) => console.log(err));
  }, []);

  const changeHandler = (e) => {
    setAuthorInfo({
      ...authorInfo, 
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/authors/${_id}`, authorInfo)
    .then((res) => {
      console.log("testing this response",res);

      if (res.data.error) {
        setErrors(res.data.error.errors)
      } else {
        setAuthorInfo("")

        history.push("/"); 
      }
      })

      .catch((err) => {
        console.log("testing the error", err);
      } );
   }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h5>Edit this author</h5>
        <div>
          <label htmlFor="">Name:</label>
          <input
            type="text"
            name="author"
            onChange={changeHandler}
            value={authorInfo.author}
          />
        </div>
        <p>{errors.author?.message}</p>

        <input
          type="submit"
          value="Update Author"
        />
        <Link to={"/"}>
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default EditAuthorForm;