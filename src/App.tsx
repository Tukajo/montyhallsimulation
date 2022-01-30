import React, { useState } from 'react';
import './App.css';
import { Slider, IconButton, Button, Stack, Box } from '@material-ui/core';
import { AddCircle, RemoveCircle } from '@material-ui/icons';
import { monty } from './util/monty_sim';
import { MontyHallSimulationResponse } from './util/monty_types';
import { ResultViewer } from './components/ResultViewer';
function App() {
    // The number of doors to be used in the monty hall simulation.
    const [doors, setDoors] = useState(3);
    const [montySimulationObject, setMontySimulationObject] = useState<MontyHallSimulationResponse | undefined>();
    const runMontySimulation = () => {
        setMontySimulationObject(monty(doors));
    };

    const handleSlider = (newValue: number) => {
        setDoors(newValue);
    };

    const incrementSlider = () => {
        const newDoors = doors + 1;
        setDoors(newDoors);
    };
    const decrementSlider = () => {
        const newDoors = doors - 1;
        setDoors(newDoors);
    };

    return (
        <div className="App">
            <header className="App-header">
                {montySimulationObject && <ResultViewer {...montySimulationObject}></ResultViewer>}
                <p style={{ color: '#000000' }}>You have {doors} doors selected</p>
                <span
                    style={{
                        width: '100%',
                        background: '#FFFFFF',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Stack direction={'row'} spacing={2}>
                        <Box border={2} sx={{ width: 300 }}>
                            <Stack direction={'row'} spacing={4}>
                                <IconButton onClick={decrementSlider}>
                                    <RemoveCircle />
                                </IconButton>
                                <Slider
                                    aria-label="Monty Hall Door Count"
                                    min={3}
                                    max={1000}
                                    defaultValue={3}
                                    value={doors}
                                    onChange={(event: Event, newValue: number | number[], activeThumb: number) => {
                                        const safeValue = typeof newValue === 'number' ? newValue : 0;
                                        handleSlider(safeValue);
                                    }}
                                />
                                <IconButton onClick={incrementSlider}>
                                    <AddCircle />
                                </IconButton>
                            </Stack>
                        </Box>
                        <Button
                            onClick={() => {
                                runMontySimulation();
                            }}
                        >
                            Run Simulation
                        </Button>
                    </Stack>
                </span>
            </header>
        </div>
    );
}

export default App;
