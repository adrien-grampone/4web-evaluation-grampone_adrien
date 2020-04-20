import React from 'react';



const Header = ({ subtitle }) => {
    return (
        <div className="Header">
            <header className="header">
                <h1 class="header__title"></h1>
                <h2 class="header__subtitle">{subtitle}</h2>
            </header>
        </div>
    );
}


export default Header;
