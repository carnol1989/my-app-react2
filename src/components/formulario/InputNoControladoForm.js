import React from 'react';

const InputNoControlado = ({onSend}) => {

    const handleSubmit = (event) => {
        event.preventDefault()

        const nombre = event.target[0].value
        const email = event.target[1].value

        onSend({nombre, email})
    }

    return(
        <form onSubmit={handleSubmit}>
            <input placeholder="Nombre" />
            <input placeholder="Email" />
            <button>Enviar</button>
        </form>
    )
} 

const InputNoControladoForm = () => {
    const send = (data) => {
        console.log(data);
    }

    return(
        <div>
            <h3>Input No controlados Formulario</h3>
            <InputNoControlado onSend={send} />
        </div>
    )
}

export default InputNoControladoForm