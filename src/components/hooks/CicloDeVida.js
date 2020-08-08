import React, { useEffect, useState } from 'react';

const CicloDeVida = () => {
    const [users, setUsers] = useState([]);
    const [emoji, setEmoji] = useState('🍎');

    useEffect(() => {
        //console.log('Hola soy useEffect');
        console.log('Solicitud a la api');
        fetch('http://jsonplaceholder.typicode.com/users/')
        .then((resp) => resp.json())
        .then((users) => setUsers(users))
    }, []) //el array significa que se ejecute 1 sola vez

    //para que se desmonte el componente
    useEffect(() => {
        const setTimeoutId = setTimeout(() => {
            console.log('Soy un setTimeout');
        }, 3000)

        return() => {
            clearTimeout(setTimeoutId)
            console.log('Component desmontado');
        }
    }, [])

    const cambiarEmoji = () => {
        const nextEmoji = emoji === '🍎' ? '🍐' : '🍎'
        setEmoji(nextEmoji)
    }

    return (
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
                <div>{emoji}</div>
                <button onClick={cambiarEmoji}>Cambiar Emoji</button>
        </div>
    )
}

const Desmontado = () => {
    const [mostrar, setMostrar] = useState(true);

    const desmontar = () => {
        setMostrar(false)
    }

    return(
        <div>
            <button onClick={desmontar}>Desmontar</button>
            {mostrar && <CicloDeVida />}
        </div>
    )
}

export default Desmontado;