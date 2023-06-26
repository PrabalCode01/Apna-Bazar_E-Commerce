import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {store, persistor }from "./redux/Store";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux'
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import { app } from './firebase.config';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store} app={app}>
   
    <PersistGate loading= {"loading"} persistor= {persistor}>

<App/>
    </PersistGate>
</Provider>

);


