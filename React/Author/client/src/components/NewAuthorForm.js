import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const NewAuthorForm = (props) => {
  let [author, setAuthor] = useState("");

  let [errors, setErrors] = useState({});

  const history = useHistory();

  const addAuthor = (e) => {
    e.preventDefault();

    let formInfo = { author };

    axios
      .post("http://localhost:8000/api/authors", formInfo)
      .then((res) => {
        console.log("response after posting form", res);

        if (res.data.error) {
          setErrors(res.data.error.errors);
        } else {

          setAuthor("");
          props.setNewAuthorToggle(!props.newAuthorToggle)

          history.push("/");
        }
      })
      .catch((err) => console.log("error after posting the form", err));
  };

  return (
      <div>
          <h3>Create Author</h3>
      <form onSubmit={addAuthor}>
        <div className="form-group">
          <label htmlFor="">Author Name:</label>
          <input
            type="text"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
          />
          <p>{errors.author?.message}</p>
        </div>
        
        <input
          type="submit"
          value="Add Author"
        />
      </form>
    </div>
  );
};

export default NewAuthorForm;