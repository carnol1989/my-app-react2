import React from 'react';

const Hijo = ({list, render}) => {
    return(
        <div>
            {list.map((item) => {
                if (render){
                    return render(item)
                }
                return <li key={item.id}>item.name</li>
            })}
        </div>
    )
}

const RenderProp = () => {
    const data = {
        frutas: [
            {id: '0', name: 'Fresa', price: 20}, 
            {id: '1', name: 'Manzana', price: 14},
            {id: '2', name: 'Sandia', price: 18}
        ]
    }

    const {frutas} = data;

    return (
        <div>
            <Hijo list={frutas} render={(data) => <div>{data.name}</div>} />
        </div>
    )
}

export default RenderProp;