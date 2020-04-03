import React from 'react';
import nullCheck from "../components/nullCheck";

function StarkFounder(props) {
  
  return(
    <div>
      <h4>Name: { nullCheck(props).name }</h4>
    </div>
  );
};

export default StarkFounder;