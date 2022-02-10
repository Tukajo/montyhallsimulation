export type MontyHallSimulationResponse = {
    extraData: MontyWinData;
    switchWinCount: number;
    stayWinCount: number;
    doors: number;
};
export type MontyWinData = { stayWins: number; switchWins: number };
