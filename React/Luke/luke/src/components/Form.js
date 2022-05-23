import React, { useState } from "react";
import { useHistory } from "react-router-dom";


const Form = () => {
 
  let [category, setCat] = useState("");
    let [id, setId] = useState("");

   
    const history = useHistory(); 
    
    const search = (e) => {
        e.preventDefault(); 


        history.push(`/${category}/${id}`) 
    }

  return (
    <div>
      {}
      <form  onSubmit={search}>
        <div >
          <label htmlFor="">Search For:</label>
          <select
            onChange={(e) => {
              setCat(e.target.value);
            }} defaultValue={"default"}
          >
            {}
            <option value="default" disabled>
              Please select a category
            </option>

            <option value="people">People</option>
            <option value="films">Films</option>
            <option value="planets">Planets</option>
            <option value="species">Species</option>
            <option value="starships">Starships</option>
            <option value="vehicles">Vehicles</option>
          </select>
        </div>
        <div >
          <label htmlFor="">ID</label>
          <input
            type="number"            
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
          {}
        </div>
        <input          
          type="submit"
          value="Search"
        />
      </form>
    </div>
  );
};

export default Form;