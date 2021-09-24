import React from 'react';

const Form = (props) => {
    return ( 
        <form className="col-12 form-wrapper" onSubmit={props.submit}>
            <p className="text-app">Weather App</p>
            <input 
                type="text" 
                value={props.value}
                onChange={props.change}
                placeholder="Wpisz miasto"    
            />
            <button>Szukaj</button>
        </form>
     );
}
 
export default Form;
