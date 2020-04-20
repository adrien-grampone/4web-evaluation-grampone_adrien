import React, { useState, useEffect } from "react";
import "./Dashboard";


import Dashboard from "./Dashboard";
import { generateInitialGrid, step } from "../Services/algo";

const EnhanceJeu = props => {
    const [gridSize, setGridSize] = useState(10);
    const [nbrCycleLife, setnbrCycleLife] = useState(10);
    const [grid, setGrid] = useState(generateInitialGrid(gridSize));
    const [live, setLive] = useState();

    const nextStep = () => {
        setGrid(step(grid));
    };

    useEffect(() => {
        setGrid(generateInitialGrid(gridSize));
    }, [gridSize]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (live) {
                setnbrCycleLife(nbrCycleLife - 1);
                nextStep();
            }
        }, 40);
        if (nbrCycleLife === 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    });

    return (
        <Dashboard
            {...props}
            gridSize={gridSize}
            setGridSize={setGridSize}
            nbrCycleLife={nbrCycleLife}
            setnbrCycleLife={setnbrCycleLife}
            grid={grid}
            nextStep={nextStep}
            live={live}
            setLive={setLive}
            setGrid={setGrid}
        />
    );
};

export default EnhanceJeu;