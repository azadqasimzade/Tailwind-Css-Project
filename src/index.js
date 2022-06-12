import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Loader } from './Components/Preloader/Preloader';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Loader/>
        <App />
    </>
);