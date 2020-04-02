import React from 'react';

function Baratheon (props){
    function nullCheck(){
        if(props.info===null){
            return "empty";
        }

        else{
        return props.info.seats[1];}
    }
    return (
        <div>
            <h4>Seat: {nullCheck()}</h4>
        </div>
    );
};

export default Baratheon;