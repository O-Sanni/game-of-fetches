import React from 'react';

function Lannister(props){
    function nullCheck(){
        if(props.info===null){
            return "empty";
        }

        else{
        return props.info;}
    }
    return (
        <div>
            <h4>Coat of Arms: {nullCheck().coatOfArms}</h4>
        </div>
    );
};

export default Lannister;