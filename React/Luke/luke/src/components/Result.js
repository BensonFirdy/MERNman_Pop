import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import People from "./People";

const Result = () => {  
  let { category, id } = useParams(); 

  
  let [detail, setDetail] = useState({});

  
  let [error, setError] = useState(false);

  
  useEffect(() => {
    
    axios
      .get(`https://swapi.dev/api/${category}/${id}/`)
      
      .then((response) => {
        setError(false);
        console.log("response-->", response.data);
        

        setDetail(response.data); 
      })
      .catch((err) => {
        console.log("errrr", err);
        setError(true);
      });
  }, [id, category]); 
  console.log("err", error);
  return (
    <div >
      <h2>
        Your Search Result: Category:{" "}
        <span >{category}</span> and ID:{" "}
        <span >{id}</span>{" "}
      </h2>
      {error === true ? (
        <div>
          <h1>Test</h1>
          <img
            src="https://cdn.vox-cdn.com/thumbor/SRwHbaTMxPr4f8EJdfai_UR2y34=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/6434955/obi-wan.0.jpg"
            width="500px"
            alt=""
          />
          <h6 >ID needs to be greater than 0!</h6>
        </div>
      ) : category === "people" ? (
        <People detail={detail}></People>
      ) : category === "planets" ? (
        <div>
          <h3>
            Name: <span >{detail.name}</span>
          </h3>
          <p>
            Climate: <span >{detail.climate}</span>
          </p>
          <p>
            Terrain: <span >{detail.terrain}</span>
          </p>
          <p>
            Population: <span >{detail.population}</span>
          </p>
        </div>
      ) : category === "species" ? (
        <div>
          <h3>
            Name: <span >{detail.name}</span>
          </h3>
          <p>
            Language: <span >{detail.language}</span>
          </p>
          <p>
            Skin Colors: <span >{detail.skin_colors}</span>
          </p>
          <p>
            Classification:{" "}
            <span className="text-info">{detail.classification}</span>
          </p>
        </div>
      ) : (
        <div>
          {}
          <h6 >
            Sorry! Working progress! Only People, Planets and Species categories
            are working!
          </h6>
        </div>
      )}
    </div>
  );
};

export default Result;