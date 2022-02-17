import { Stack } from '@material-ui/core';
import React from 'react';
import { MontyHallSimulationResponse } from '../util/monty_types';

export const ResultViewer = (props: MontyHallSimulationResponse): JSX.Element => {
    const { switchWinCount, stayWinCount, extraData, doors } = props;
    const totalWins = extraData.stayWins + extraData.switchWins;

    return (
        <Stack spacing={2}>
            <p>After 1000000 (one million) simulations, with {doors} doors.</p>
            {switchWinCount > stayWinCount && (
                <div>
                    <p style={{ color: 'red' }}>There was a success rate of {stayWinCount * 100}% when staying.</p>
                    <p style={{ color: 'green' }}>
                        There was a success rate of {switchWinCount * 100}% when switching.
                    </p>
                </div>
            )}
            {switchWinCount < stayWinCount && (
                <div>
                    <p style={{ color: 'green' }}>There was a success rate of {stayWinCount * 100}% when staying.</p>
                    <p style={{ color: 'red' }}>There was a success rate of {switchWinCount * 100}% when switching.</p>
                </div>
            )}
            <p>
                Moreover, of the total {totalWins} wins, {extraData.stayWins} were caused by staying.
            </p>
            <p>While {extraData.switchWins} were caused by switching.</p>
        </Stack>
    );
};
