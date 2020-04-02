import React from 'react';
import nullCheck from "../components/nullCheck";

function StarkFounder(props) {
  
  return(
    <div>
      <h3>Name: { nullCheck(props).name }</h3>
    </div>
  );
};

export default StarkFounder;