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

ReactDOM.render(
  <React.StrictMode>
    {/*<App />
    <Portal />
    <UseState />
    <UseState2 />*/}
    <Ejercicio02 />
    <CicloDeVida />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
