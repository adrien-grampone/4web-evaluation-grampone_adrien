import React from 'react';
import Header from "../layout/Header/Header"


const subtitle = "Login"



const Login = ({ email, setEmail, password, setPassword, formHandler, styleError }) => (
    <>
        <Header subtitle={subtitle} />
        <div class="container">
            <div class="main">

                <form id="form_id" method="post" name="myform" onSubmit={formHandler} >
                    <label for="username">E-mail :</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" name="username" id="username" />
                    <label for="password">Mot de passe :</label>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" name="password" id="password" />
                    <h3> {styleError}</h3>




                    <button type="submit">Connexion</button>
                </form>

            </div>
        </div>
    </>
);




export default Login;
