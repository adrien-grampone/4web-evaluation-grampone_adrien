import React, { useState, useEffect } from "react";
import "./Dashboard";
import Login from "./Dashboard";

const EnhanceJeu = props => {
    const [gridSize, setGridSize] = useState("");
    const [nbrCycleLife, setnbrCycleLife] = useState("");
    return (
        <Login
            {...props}
            gridSize={gridSize}
            setGridSize={setGridSize}
            nbrCycleLife={nbrCycleLife}
            setnbrCycleLife={setnbrCycleLife}
        />
    );
};

export default EnhanceJeu;