import React from 'react';
import nullCheck from "../components/nullCheck";

function Tyrell (props){  
    return (
        <div>
            <h4>Born: {nullCheck(props).born}</h4>
        </div>
    );
};

export default Tyrell;