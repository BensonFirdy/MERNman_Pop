
import React from "react";

const People = (props) => {
    const { detail } = props;
  return (
    <div>
      <h3>
        Name: <span className="text-info">{detail.name}</span>
      </h3>
      <p>
        Gender: <span className="text-info">{detail.gender}</span>
      </p>
      <p>
        Height: <span className="text-info">{detail.height}</span>
      </p>
      <p>
        Hair Color: <span className="text-info">{detail.hair_color}</span>
      </p>
    </div>
  );
};

export default People;