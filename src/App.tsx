import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { baseUrl, simulationPage } from './routes/constants';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <nav
                    style={{
                        borderBottom: 'solid 1px',
                        paddingBottom: '1rem',
                    }}
                >
                    <Link to={`${baseUrl}`}>Home</Link>
                    <Link to={`${simulationPage}`}>Simulation</Link>
                </nav>
            </header>
        </div>
    );
}

export default App;
