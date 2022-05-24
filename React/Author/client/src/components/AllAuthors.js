import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const AllAuthors = (props) => {

  const [allAuthors, setAllAuthors] = useState([]); 


  const [deleteToggle, setDeleteToggle] = useState(false);


  useEffect(() => {

    axios
      .get("http://localhost:8000/api/authors")
      .then((res) => {
        console.log("response:", res);
        setAllAuthors(res.data.results);
      })
      .catch((err) => {
        console.log("error:", err);
      });
  }, [deleteToggle, props.newAuthorToggle]);

  const deleteAuthor = (id) => {
    console.log("deleting author with this id->", id);
    axios
      .delete(`http://localhost:8000/api/authors/${id}`)
      .then((res) => {
        console.log("res after deleting", res);
        setDeleteToggle(!deleteToggle);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h5>We have quotes by:</h5>

      <table>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Actions available</th>
          </tr>
        </thead>
        <tbody>
          {allAuthors.map((authorObj, idx) => (
            <tr>
              <td>{authorObj.author}</td>
              <td>
                <Link
                  to={`/edit/${authorObj._id}`}
                >
                  Edit
                </Link>
                <button
                  onClick={(e) => {
                    deleteAuthor(authorObj._id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllAuthors;