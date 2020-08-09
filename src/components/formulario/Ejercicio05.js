import React from 'react'

const InputConRef = ({onSend}) => {
    const nombreFrutaRef = React.createRef();
    const precioRef = React.createRef();

    const manejadorClick = () => {
        const nombreFruta = nombreFrutaRef.current.value
        const precio = precioRef.current.value
        onSend({nombreFruta, precio})
    }

    return(
        <div>
            <input type="text" ref={nombreFrutaRef} placeholder="Nombre Fruta" />
            <input type="text" ref={precioRef} placeholder="Precio" />
            <button onClick={manejadorClick}>Enviar</button>
        </div>
    )
}

const Ejercicio05 = () => {
    const send = (data) => {
        alert('Fruta: ' + data.nombreFruta + '\nPrecio: ' + data.precio);
    }

    return(
        <div>
            <h3>Ejercicio 05</h3>
            <InputConRef onSend={send} />
        </div>
    )
}

export default Ejercicio05