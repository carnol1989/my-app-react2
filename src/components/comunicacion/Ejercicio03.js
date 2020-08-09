import React, { useState } from 'react';

const Hijo = ({render}) => {

    const modificar = () => {
        //  Pasarle el valor de un string como argumento a render
        return(
            render('Hola')
        )
    }
    
    return (
      <>
      <button onClick={modificar}> Click</button>
      </>
    )
  }
  
  const Padre = () => {
  
    const [texto, setTexto] = useState('') 
  
    const actualizar = (text) => {
        // Actualizar el estado de texto con el parámetro text
        setTexto(text)
    }
  
    return (
      <div>
        <h3>Ejercicio 03</h3>
        <p>{texto}</p>
        <Hijo render={actualizar} />
      </div>
    )
  }
  
  export default Padre;