import React from 'react';

function BaratheonR (props){
    function nullCheck(){
        if(props.info===null){
            return "empty";
        }

        else{
        return props.info.aliases[1];}
    }
    return (
        <div>
            <h4>Alias: {nullCheck()}</h4>
        </div>
    );
};

export default BaratheonR;