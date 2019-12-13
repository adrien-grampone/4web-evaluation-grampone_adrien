import React from 'react';


const Login = () =>


    <div class="container">
        <div class="main">

            <form id="form_id" method="post" name="myform">
                <label for="username">Nom d'utilisateur (test) :</label>
                <input type="text" name="username" id="username" />
                <label for="password">Mot de passe (Test12345@) :</label>
                <input type="password" name="password" id="password" />
                <h3> Password strength : <span class="password-strength__value">0</span></h3>
                <div id="myProgress">
                    <div id="myBar"></div>
                </div>



                <input type="button" value="Connexion" id="submit" onclick="validate()" />
            </form>

        </div>
    </div>;

export default Login;
