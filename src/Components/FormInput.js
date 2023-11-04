import React from "react";


const FormInput = (props) => {



    return (

        <React.Fragment>
            <label htmlFor={props.id}>{props.label}</label>
            <input
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange} >
            </input>
        </React.Fragment>



    )

}

export default FormInput;