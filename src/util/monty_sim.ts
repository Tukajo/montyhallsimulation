// Simulation logic

import { MontyHallSimulationResponse, MontyWinData } from './monty_types';

export const monty = (doors: number): MontyHallSimulationResponse => {
    const selectRandomDoor = () => {
        return Math.floor(Math.random() * doors);
    };
    const findSuitableDoorExcluding = (playerGuessedDoor: number, secretDoor: number): number => {
        let suitableDoor: number = selectRandomDoor();
        while (suitableDoor === playerGuessedDoor || suitableDoor === secretDoor) {
            suitableDoor = selectRandomDoor();
        }
        return suitableDoor;
    };

    const checkWin = (secretDoor: number, playerGuessedDoor: number): boolean => {
        return secretDoor === playerGuessedDoor;
    };

    const simSteps = 1000000;
    let switchWinCount = 0.0;
    let stayWinCount = 0.0;
    let currentStep = 0;
    while (simSteps > currentStep) {
        const secretDoor = selectRandomDoor();
        const playerGuessedDoor = selectRandomDoor();
        const revealedAlternative = findSuitableDoorExcluding(playerGuessedDoor, secretDoor);
        const playerSwitchedGuessDoor = findSuitableDoorExcluding(playerGuessedDoor, revealedAlternative); // The player guesses a "new" door.
        const stayWin = checkWin(playerGuessedDoor, secretDoor);
        const switchWin = checkWin(playerSwitchedGuessDoor, secretDoor);
        if (stayWin) {
            stayWinCount++;
        } else if (switchWin) {
            switchWinCount++;
        }

        currentStep++;
    }
    const normalizedswitchWinCount = switchWinCount / currentStep;
    const normalizedstayWinCount = stayWinCount / currentStep;
    const extraData: MontyWinData = { stayWins: stayWinCount, switchWins: switchWinCount };
    return {
        switchWinCount: normalizedswitchWinCount,
        stayWinCount: normalizedstayWinCount,
        doors: doors,
        extraData: extraData,
    };
};
