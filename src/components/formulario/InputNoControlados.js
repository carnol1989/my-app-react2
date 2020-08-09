import React from 'react';

const InputConRef = ({onSend}) => {

    const nombreRef = React.createRef();
    const emailRef = React.createRef();

    const manejadorClick = () => {
        const nombre = nombreRef.current.value
        const email = emailRef.current.value
        onSend({nombre, email})
    }

    return(
        <div>
            <input type="text" ref={nombreRef} placeholder="Nombre" />
            <input type="text" ref={emailRef} placeholder="Email" />
            <button onClick={manejadorClick}>Enviar</button>
        </div>
    )
}

const InputNoControladosRef = () => {

    const send = (data) => {
        console.log(data);
    }

    return(
        <div>
            <h3>Input No controlados Refs</h3>
            <InputConRef onSend={send} />
        </div>
    )
}

export default InputNoControladosRef