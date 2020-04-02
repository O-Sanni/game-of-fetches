import React from 'react';
import nullCheck from "../components/nullCheck";

function Targaryen (props){
 
    return (
        <div>
            <h4>Region: {nullCheck(props).region}</h4>
        </div>
    );
};

export default Targaryen;