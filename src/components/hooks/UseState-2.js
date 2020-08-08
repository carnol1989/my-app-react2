import React, { useState } from 'react';
import UseState from './UseState-1';

const UseState2 = () => {
    
    const [state, setState] = useState({
        clicks: 0,
        title: ''
    })

    const merge = (nextState) => {
        setState({
            ...state,//spread operator (...) para copiar un objeto
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

export default UseState2;