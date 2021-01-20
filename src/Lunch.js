import React from 'react';


function Lunch(props){
    return (
        <div>
            <h1>Today We are Serving {props.dishName} in Lunch!</h1>
           <h1> {props.sweet} Will also be served!!</h1>
        </div>
    )
}


export default Lunch;
