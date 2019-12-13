import React from 'react';

import Header from "../layout/Header/Header"


const subtitle = "DashBoard";

const Dashboard = ({
    gridSize,
    setGridSize,
    nbrCycleLife,
    setnbrCycleLife
}) => (
        <>
            <Header subtitle={subtitle} />
            <div className="dashboard">
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
                            <input type="button" value="Lancer le jeu" id="submit" onclick="" />
                        </div>
                        <div className="submit__index">
                            <input
                                type="button"
                                value="Retour au login"
                                id="submit"
                                onclick="javascript:location.href='index.html'"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
export default Dashboard;