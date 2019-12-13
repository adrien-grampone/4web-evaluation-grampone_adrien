import React from 'react';
import Header from "../layout/Header/Header"

const subtitle = "Login"



const Login = ({ email, setEmail, password, setPassword, passwordStrength }) => (
    <>
        <Header subtitle={subtitle} />
        <div class="container">
            <div class="main">

                <form id="form_id" method="post" name="myform">
                    <label for="username">Nom d'utilisateur (test) :</label>
                    <input value={email} onChange={e => setEmail(e.value)} type="email" name="username" id="username" />
                    <label for="password">Mot de passe (Test12345@) :</label>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" name="password" id="password" />
                    <h3> Password strength : <span class="password-strength__value">{passwordStrength}</span></h3>
                    <div id="myProgress">
                        <div id="myBar"></div>
                    </div>



                    <input type="button" value="Connexion" id="submit" onclick="validate()" />
                </form>

            </div>
        </div>
    </>
);




export default Login;
