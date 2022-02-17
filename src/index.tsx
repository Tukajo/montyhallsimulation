import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import MainSimulation from './routes/MainSimulation';
import { baseUrl, simulationPage } from './routes/constants';
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={`${baseUrl}`} element={<App />} />
                <Route path={`${simulationPage}`} element={<MainSimulation />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);
