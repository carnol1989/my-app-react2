import React, { useState } from 'react'

const { Provider, Consumer } = React.createContext()

const Nieto = () => {
    return (
        <Consumer>
            {(consumer) => (
                <div style={boxStyles}>
                    <button onClick={consumer.addClick}>Add {consumer.clicks}</button>
                </div>
            )}
        </Consumer>
    )
}

const Hijo = () => {
    return (
        <div style={boxStyles}>
            <Nieto />
        </div>
    )
}

const boxStyles = {
    padding: '0.5em',
    margin: ' 0.5em',
    border: '1px solid gray',
    borderRadius: '0.3em',
    textAlign: 'center'
}

const ApiContext = () => {
    const [clicks, setClicks] = useState(0)

    const addClick = () => {
        setClicks(clicks + 1)
    }
    
    return (
        <Provider value={{ clicks: clicks, addClick: addClick }}>
            <div style={boxStyles}>
                <p>{clicks}</p>
                <Hijo />
            </div>
        </Provider>
    )
}

export default ApiContext;