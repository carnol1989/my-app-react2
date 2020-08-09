import React, { useState } from 'react';

const ComponentA = ({num, addCount}) => {
    return (
        <div>
            <button onClick={addCount}>
                ComponentA {num}
            </button>
        </div>
    )
}

const ComponentB = ({num, addCount}) => {
    return(
        <div>
            <button onClick={addCount}>
                ComponentB {num}
            </button>
        </div>
    )
}

const ParentComponents = () => {
    const [countA, setCountA] = useState(0)
    const [countB, setCountB] = useState(0)

    const addA = () => {
        setCountA(countA + 1)
    }

    const addB = () => {
        setCountB(countB + 1)
    }

    return (
        <div>            
            {/*Cada componente independiente
            <ComponentA num={countA} addCount={addA} />
            <ComponentB num={countB} addCount={addB} />*/}
            {/*Cada componente sincronizado*/}
            <ComponentA num={countA} addCount={addB} />
            <ComponentB num={countB} addCount={addA} />
        </div>
    )
}

export default ParentComponents;