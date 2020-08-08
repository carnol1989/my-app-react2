import React from 'react';
import ReactDom from 'react-dom';

/*class Modal extends React.Component {
    render() {
        return ReactDom.createPortal((
            <div>
                Hola desde un Portal
                <button onClick={this.ocultar}>Ocultar</button>
            </div>
        ), document.getElementById('modal-root'))
    }
}*/

//Componente de función
const Modal = (props) => {
    const styles = {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '0',
        left: '0',
        background: 'linear-gradient(to top right, #667eea, #764ba2',
        opacity: '0.9',
        color: '#FFF'
    }

    return ReactDom.createPortal((
        <div style={styles}>
            Hola desde un Portal
            <button onClick={props.visible}>Ocultar</button>
        </div>
    ), document.getElementById('modal-root'))
}

export class Portal extends React.Component {

    state = {
        visible: false
    }

    mostrar = () => {
        this.setState({
            visible: true
        })
    }

    ocultar = () => {
        this.setState({
            visible: false
        })
    }

    render() {
        return(
            <div>
                <button onClick={this.mostrar}>Mostrar</button>
                {this.state.visible && <Modal visible={this.ocultar} />}                
            </div>
        )
    }
}