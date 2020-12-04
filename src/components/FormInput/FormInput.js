import React from 'react'
import './FormInput.scss'


const FormInput = ({ changeHandler, label, ...otherProps }) => {
    return (
        <div className="group">
            <input
                className="form-input"
                onChange={changeHandler}
                {...otherProps} />
            {label ?
                <label className={`${otherProps.value.lenght ? 'shrink' : ''}
                    form-input-label`}>
                    {label}
                </label> : null
            }
        </div>
    )
}

export default FormInput
