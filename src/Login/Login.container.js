import React, { useState, useEffect } from "react";
import "./Login.css";
import Login from "./Login";

import { useHistory } from "react-router-dom"


const EnhanceLogin = props => {
    const [email, setEmail] = useState("contact@web.fr");
    const [password, setPassword] = useState("azerty");
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [styleProgressBar, setStyleProgressBar] = useState({});
    let [styleError, setStyleError] = useState("");



    const formHandler = e => {
        e.preventDefault();
        console.log(email, password);
        if (email === "contact@web.fr" && password === "azerty") {
            document.location.href = "/display?d=0&page=1&l=5&s=b";

        }
        else {
            console.log('B')
            setStyleError("Erreur de connexion");

        }
    }
    useEffect(() => {

        let value = 0;

        if (password.length > 8) {
            value += 1;
        }
        if (password.match(/\d/)) {
            value += 1;

        }
        if (password.match(/[a-zA-Z]/)) {
            value += 1;

        }
        if (password.match(/\W/)) {
            value += 1;

        }
        if (password.match(/[A-Z]/)) {
            value += 1;

        }
        setStyleProgressBar({
            width: `${value * 20}%`,
            backgroundColor: `
              rgb(
                ${(255 / 5) * (5 - value)},
                ${(255 / 5) * value},
                ${0}
              )`
        });
        console.log(password);
        console.log(value)
        setPasswordStrength(value);
    }, [password])



    return <Login {...props} email={email} setEmail={setEmail} password={password} setPassword={setPassword} passwordStrength={passwordStrength} styleProgressBar={styleProgressBar} formHandler={formHandler} styleError={styleError} />
};
export default EnhanceLogin;