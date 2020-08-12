import React, { Fragment, useState } from 'react';

const InputEmpleado = (props) => {
    const initialFormState = { id: null, nombre: '', apellido: '', area:'' }
	const [ empleado, setEmpleado ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setEmpleado({ ...empleado, [name]: value })
    }
    
    return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!empleado.nombre || !empleado.apellido || !empleado.area) return

				props.addEmpleado(empleado)
				setEmpleado(initialFormState)
			}}
		>
			<input type="text" name="nombre" placeholder="Nombre" value={empleado.nombre} onChange={handleInputChange} />
            <br/>
			<input type="text" name="apellido" placeholder="Apellido" value={empleado.apellido} onChange={handleInputChange} />
            <br/>
            <input type="text" name="area" placeholder="Area" value={empleado.area} onChange={handleInputChange} />
            <br/>
			<button>Agregar</button>
		</form>
	)
}

const Empleado = (props) => {
    return(
        <div key={props.id} >
            {props.nombre} {props.apellido}
            <br />
            {props.area}            
        </div>        
    )
}

const ListaEmpleado = (props) => {
    return(
        <Fragment>
        <div>
            {props.empleados.map((empl) => 
                <Empleado id={empl.id} nombre={empl.nombre} apellido={empl.apellido} area={empl.area} />      
            )}
        </div> 
        </Fragment>       
    )
}

const boxStyleFormEmpl = {
    'padding-left': '10px',
    'padding-top': '10px',
    'margin-left': '57px',
    float: 'left',
    position: 'relative',
    width: '45%',
    border: 'red solid 1px',
    color: 'blue',
    height: 'auto',
    textAlign: 'center'
}

const boxStyleListEmpl = {
    'padding-top': '10px',
    'padding-left': '10px',
    'margin-left': '10px',
    position: 'relative',
    float: 'left',
    width: '45%',
    border: 'red solid 1px',
    color: 'blue',
    height: 'auto',
    textAlign: 'left'
}

const boxStyleEmpl = {
    padding: '0.5em',
    margin: ' 0.5em',
    border: '1px solid gray',
    borderRadius: '0.3em',    
    textAlign: 'center'
}

const Tarea02 = () => {

    const empleadosData = [
		{ id: 0, nombre: '', apellido: '', area: '' }
    ]

    //const initialFormState = { id: null, nombre: '', apellido: '', area: '' }
    
    const [ empleados, setEmpleados ] = useState(empleadosData)
    //const [ currentEmpleado, setCurrentEmpleado ] = useState(initialFormState)

    const addEmpleado = empleado => {
        empleado.id = empleados.lenth + 1;
        setEmpleados([ ...empleados, empleado ])
    }

    return(
        <Fragment>
            <div style={boxStyleFormEmpl}>
                <h3>Agregar nuevo empleado</h3>
                <InputEmpleado addEmpleado={addEmpleado} />
            </div>
            <div style={boxStyleListEmpl}>
                <h3>Lista de Empleados</h3>
                <ListaEmpleado empleados={empleados} />
            </div>
        </Fragment>                
    )
}

export default Tarea02;