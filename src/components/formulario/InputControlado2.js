import React, { useState } from 'react'
import validator from 'validator'

const InputHijo = (props) => {
    const actualizarHijo = (event) => {
        const inputText = event.target.value
        props.onChange(props.name, inputText)
    }

    return(
        <div>
            <input type="text" name={props.name} 
                placeholder={props.placeholder} 
                onChange={actualizarHijo} />
        </div>
    )
}

const InputControlado2 = () => {

    const [formState, setForm] = useState({
        name: '',
        email: ''
    })

    const actualizar = (inputName, text) => {
        if(!validator.isEmail(email)) {
            console.log('no es valido')
        }
        setForm({
            ...formState,
            [inputName]: text
        })
    }

    const {name, email} = formState;
    
    return(
        <div>
            <h4>Input No Controlado: Propagación de datos</h4>
            <InputHijo name="name" placeholder="Nombre" onChange={actualizar} />
            <InputHijo name="email" placeholder="Email" onChange={actualizar} />
            <h5>{name}</h5>
            <h5>{email}</h5>
        </div>
    )
}

export default InputControlado2