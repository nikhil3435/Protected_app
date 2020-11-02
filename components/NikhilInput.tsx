import React from 'react'

interface InputProps {
    changeFunction : (e:any) => void,
    label?: string,
    type?: string,
    placeholder?: string,
}

const NikhilInput = ({changeFunction, label, type,placeholder} : InputProps) => {
    const onChangeHandler = (e:any)=> {
        changeFunction(e)
    }
    return(
        <div>{label &&
            <label>{label}: </label>}
            <input type={type? type : "text"} onChange={onChangeHandler} placeholder={placeholder? placeholder : ""}/>
        </div>
    )
}

export default NikhilInput