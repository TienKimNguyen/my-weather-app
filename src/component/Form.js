import React from "react";

const Form = (props) => (
    // set up an attribute and call in getWeather in App.js
    <form onSubmit={props.getWeather}> 
        <input type = "text" name = "city" placeholder="City..."/>
        <input type = "text" name = "country" placeholder="Country..."/>
        <button>Get Weather</button>
    </form>    
);

export default Form;