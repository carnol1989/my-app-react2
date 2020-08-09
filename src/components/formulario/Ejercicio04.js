import React from 'react'

const InputControladoForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault()

        const nombreFruta = event.target[0].value
        const precio = event.target[1].value

        alert('Fruta: ' + nombreFruta + '\nPrecio: ' + precio);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Nombre Fruta" />
            <input placeholder="Precio" />
            <button>Enviar</button>
        </form>
    )
}

const Ejercicio04 = () => {
    return (
        <div>
            <h3>Ejercicio 04</h3>
            <InputControladoForm />
        </div>
    )
}

export default Ejercicio04