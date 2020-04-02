import React from 'react';

function Tyrell (props){
    function nullCheck(){
        if(props.info===null){
            return "empty";
        }
        else{
        return props.info;}
    }
    return (
        <div>
            <h1>name: {nullCheck().name}</h1>
        </div>
    );
};

export default Tyrell;