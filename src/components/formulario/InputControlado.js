import React, { useState } from 'react';

const InputControlado = () => {

    const [text, setText] = useState('')
    const [color, setColor] = useState('blue')

    const  actualizar = (event) => {
        const textInput = event.target.value
        let colorInput = 'green'
        
        if(textInput.trim() === '') {
            colorInput = '#282c34'
            console.log('espacio vacio')
        }
        
        if(textInput.trim() !== '' && textInput.length < 5) {
            colorInput = 'red'
            console.log('menor de 5')
        }
        
        setText(textInput)
        setColor(colorInput)
    }

    //console.log(text);

    const styles = {
        border: `1px solid ${color}`,
        padding: "0.3em 0.6em",
        outline: "none"
    }

    return(
        <div>
            <h3>Input Controlado</h3>
            <input type="text" style={styles} value={text} placeholder="Ingrese la info" onChange={actualizar} />
        </div>
    )
}

export default InputControlado