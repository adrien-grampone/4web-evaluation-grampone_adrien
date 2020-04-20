import React from "react";
import "./Dashboard.css";
import Header from "../layout/Header/Header";
import { generateInitialGrid } from "../Services/algo";

const subtitle = "";
const Dashboard = ({
    gridSize,
    setGridSize,
    nbrCycleLife,
    setnbrCycleLife,
    grid,
    nextStep,
    live,
    setLive,
    setGrid
}) => (
        <>
            <Header subtitle={subtitle} />
            <div id="test" className="dashboard">
                {" "}
                <div className="main">
                    <div className="gridSize">
                        <input
                            type="text"
                            value={gridSize}
                            onChange={e => setGridSize(e.target.value)}
                            name="gridSize"
                            placeholder="Taille de la grille :"
                        />
                    </div>
                    <div className="nbrCycleLife">
                        <input
                            type="text"
                            value={nbrCycleLife}
                            onChange={e => setnbrCycleLife(e.target.value)}
                            name="nbrCycleLife"
                            placeholder="Nombre de cycle :"
                        />
                    </div>

                    <div className="boutons">
                        <div className="run__game">
                            <input
                                type="button"
                                value="Prochaine étape"
                                id="submit"
                                onClick={nextStep}
                            />
                        </div>
                        <div className="run__cycle">
                            <input
                                type="button"
                                value={live ? "Stop" : "Lancer"}
                                id="submit"
                                onClick={() => setLive(!live)}
                            />
                        </div>
                        <div className="submit__index">
                            <input
                                type="button"
                                value="Retour au login"
                                id="submit"
                                onClick="javascript:location.href='index.html'"
                            />
                        </div>
                    </div>
                    <div className="grid">
                        {grid.map((line, idLine) => (
                            <div>
                                {line.map((cell, idCell) => (
                                    <span
                                        onClick={() => {
                                            const newGrid = [...grid];
                                            newGrid[idLine][idCell] = !cell;
                                            setGrid(newGrid);
                                        }}
                                    >
                                        {cell ? "🤍" : "🖤"}
                                    </span>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
export default Dashboard;