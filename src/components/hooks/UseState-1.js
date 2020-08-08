import React, { useState } from 'react';

const UseState = () => {

    const [clicks, setClick] = useState(0)

    const addClicks = () => {
        setClick(clicks + 1)
    }

    return(
        <div>
            <button onClick={addClicks}>Contador({clicks})</button>
        </div>
    )
}

export default UseState;