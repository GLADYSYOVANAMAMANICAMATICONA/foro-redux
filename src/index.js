import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "redux-zero/react";
import store from "./store";
import './index.css';
import ForoApp from './App';
import registerServiceWorker from './registerServiceWorker';

const Index = () => (
	<Provider store={store}>
		<ForoApp />
	</Provider>
);
// provider es una etiqueta que permite inyectar los datos de store al componente APP 
// la etiqueta provider es el padre de app por eso puede inyectar
ReactDOM.render(<ForoApp />, document.getElementById('root'));
registerServiceWorker();
