import React from 'react';

function Targaryen (props){
    function nullCheck(){
        if(props.info===null){
            return "empty";
        }

        else{
        return props.info;}
    }
    return (
        <div>
            <h4>Region: {nullCheck().region}</h4>
        </div>
    );
};

export default Targaryen;