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
            <h4>Born: {nullCheck().born}</h4>
        </div>
    );
};

export default Tyrell;