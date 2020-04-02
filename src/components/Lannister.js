import React from 'react';
import nullCheck from "../components/nullCheck";

function Lannister(props){

    return (
        <div>
            <h4>Coat of Arms: {nullCheck(props).coatOfArms}</h4>
        </div>
    );
};

export default Lannister;