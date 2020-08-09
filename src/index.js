import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Portal } from './components/Portales';
import UseState from './components/hooks/UseState-1';
import UseState2 from './components/hooks/UseState-2';
import Ejercicio02 from './components/hooks/Ejercicio02';
import CicloDeVida from './components/hooks/CicloDeVida';
import ParentComponents from './components/comunicacion/ParentComponents';
import RenderProp from './components/comunicacion/RenderProp';
import Ejercicio03 from './components/comunicacion/Ejercicio03';
import Hoc from './components/comunicacion/Hoc';
import InputNoControladosRef from './components/formulario/InputNoControlados';
import InputNoControladoForm from './components/formulario/InputNoControladoForm';
import InputControlado from './components/formulario/InputControlado';
import InputControlado2 from './components/formulario/InputControlado2';
import ApiContext from './components/api-context/ApiContext';
import Ejercicio04 from './components/formulario/Ejercicio04';
import Ejercicio05 from './components/formulario/Ejercicio05';

ReactDOM.render(
  <React.StrictMode>
    {/*<App />
    <Portal />
    <UseState />
    <UseState2 />*/}
    <Ejercicio02 />
    {/*<CicloDeVida />
    <ParentComponents />
    <RenderProp />*/}
    <Ejercicio03 />
    {/*<Hoc/>
    <InputNoControladosRef />
    <InputNoControladoForm />
    <InputControlado />
    <InputControlado2 />
    <ApiContext />*/}
    <Ejercicio04 />
    <Ejercicio05 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
