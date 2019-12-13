import React, { useState, useEffect } from "react";
import "./Login.css";
import Login from "./Login";
import { Stream } from "stream";
const EnhanceLogin = props => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordStrength, setPasswordStrength] = useState(0);
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
        console.log(password);
        console.log(value)
        setPasswordStrength(value);
    }, [password])

    return <Login {...props} email={email} setEmail={setEmail} password={password} setPassword={setPassword} passwordStrength={passwordStrength} />
};
export default EnhanceLogin;