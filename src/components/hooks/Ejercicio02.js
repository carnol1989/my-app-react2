import React, { useState } from 'react';

const Ejercicio02 = () => {
    
    const [state, setState] = useState({
        clicks: 0
    })

    const [state2, setState2] = useState({
        title: ''
    })

    const merge = (nextState) => {
        setState({
            ...state,            
            ...nextState
        })

        setState2({
            ...state2,
            ...nextState
        })
    }

    const handleInput = (e) => {
        const valor = e.target.value
        merge({title: valor})
    }

    const addClicks = () => {
        merge({clicks: state.clicks + 1})
    }
    
    return(
        <div>
            <input type="text" onChange={handleInput} />
            <button onClick={addClicks}>Contador({state.clicks})</button>
        </div>
    )
}

export default Ejercicio02;