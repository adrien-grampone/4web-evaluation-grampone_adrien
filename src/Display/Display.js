import React, { Component } from 'react';
import "./Display.css";
import DisplayData from '../Data/departments.json'

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: this.extractParamsUrl3(window.location.href) };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    desacLien() {
        let f = this.TestextractParamsUrlFiltre(window.location.href);
        let r = this.TestextractParamsUrlFiltreR(window.location.href);

        window.onload = function () {
            var str = window.location.href;
            var url = new URL(str);
            let page = url.searchParams.get("page");
            let l = url.searchParams.get("l");

            if (l == 109 || f == 0 || r == 0) {
                document.getElementById('prec1').style.display = "none";
                document.getElementById('prec2').style.display = "none";
                document.getElementById('suiv1').style.display = "none";
                document.getElementById('suiv2').style.display = "none";
                document.getElementById('deux').style.display = "none";
                document.getElementById('trois').style.display = "none";
            }
            if (page == 1 && l == 5 || page == 1 && l == 10 || page == 1 && l == 20 || page == 1 && l == 50) {
                document.getElementById('prec2').style.display = "none";
                document.getElementById('prec1').style.display = "none";
            }
            if (page == 2) {
                document.getElementById('prec2').style.display = "none";

            }
            if (page == 22 && l == 5 || page == 11 && l == 10 || page == 6 && l == 20 || page == 3 && l == 50) {
                document.getElementById('suiv2').style.display = "none";
                document.getElementById('suiv1').style.display = "none";
            }
            if (page == 21 && l == 5 || page == 10 && l == 10 || page == 5 && l == 20 || page == 2 && l == 50) {
                document.getElementById('suiv2').style.display = "none";

            }
        }
    }

    handleChange(event) {
        // this.setState({ value: event.target.value });
        if (event.target.value == 109) {
            document.location.href = "/display?d=0&page=1&l=" + event.target.value + "&s=" + this.extractParamsUrlS(window.location.href);

        }
        else {
            document.location.href = "/display?d=" + this.extractParamsUrl(window.location.href) + "&page=" + this.extractParamsUrl2(window.location.href) + "&l=" + event.target.value + "&s=" + this.extractParamsUrlS(window.location.href);

        }

    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    textChange() {

        document.location.href = "display?d=" + this.extractParamsUrl(window.location.href) + "&page=" + this.extractParamsUrl2(window.location.href) + "&l=" + this.extractParamsUrl3(window.location.href) + "&s=" + this.extractParamsUrlS(window.location.href) + "&f=" + document.getElementById('id').value;
    }

    extractParamsUrl(chaineGET) {
        var str = chaineGET;
        var url = new URL(str);
        let d = url.searchParams.get("d");
        return d;
    }
    extractParamsUrl2(chaineGET) {
        var str = chaineGET;
        var url = new URL(str);
        let page = url.searchParams.get("page");
        return page;
    }
    extractParamsUrl3(chaineGET) {
        var str = chaineGET;
        var url = new URL(str);
        let l = url.searchParams.get("l");
        return l;
    }
    paramSens(chaineGET) {
        var str = chaineGET;
        var url = new URL(str);
        let s = url.searchParams.get("s");
        var sens;
        if (s == "h") {
            sens = "↑"
        }
        else if (s == "b") {
            sens = '↓'
        }
        return sens;
    }

    extractParamsUrlS(chaineGET) {
        var str = chaineGET;
        var url = new URL(str);
        let s = url.searchParams.get("s");
        return s;
    }

    extractParamsUrlFiltre(chaineGET) {
        var str = chaineGET;
        var url = new URL(str);
        let f = url.searchParams.get("f");
        return f;
    }
    TestextractParamsUrlFiltre(chaineGET) {
        var str = chaineGET;
        var url = new URL(str);
        let f = url.searchParams.get("f");
        if (f == "null") {
            return 1;
        }
        if (f == null) {
            return 1;
        }
        else if (f == "") {
            return 1;
        }
        else {
            return 0;
        }
    }
    TestextractParamsUrlFiltreR(chaineGET) {
        var str = chaineGET;
        var url = new URL(str);
        let f = url.searchParams.get("r");
        if (f == null) {
            return 1;
        }
        else if (f == "") {
            return 1;
        }
        else {
            return 0;
        }
    }

    affichNPage() {
        { document.write('<span id="prec2" class="pagination" ><a href="/display?d=' + this.soustraction(this.soustraction(parseInt(this.extractParamsUrl(window.location.href)), parseInt(this.extractParamsUrl3(window.location.href))), parseInt(this.extractParamsUrl3(window.location.href))) + '&page=' + (parseInt(this.extractParamsUrl2(window.location.href)) - 2) + '&l=' + parseInt(this.extractParamsUrl3(window.location.href)) + '&s=' + this.extractParamsUrlS(window.location.href) + '"> &laquo;&laquo;</a></span>') }
        { document.write('<span id="prec1" class="pagination"><a href="/display?d=' + this.soustraction(parseInt(this.extractParamsUrl(window.location.href)), parseInt(this.extractParamsUrl3(window.location.href))) + '&page=' + (parseInt(this.extractParamsUrl2(window.location.href)) - 1) + '&l=' + parseInt(this.extractParamsUrl3(window.location.href)) + '&s=' + this.extractParamsUrlS(window.location.href) + '">&laquo;</a></span>') }
        { document.write('<span id="un" class="pagination"><a href="/display?d=0&page=1&l=' + parseInt(this.extractParamsUrl3(window.location.href)) + '&s=' + this.extractParamsUrlS(window.location.href) + '">1</a></span>') }
        { document.write('<span id="deux" class="pagination"><a href="/display?d=' + parseInt(this.extractParamsUrl3(window.location.href)) + '&page=2&l=' + parseInt(this.extractParamsUrl3(window.location.href)) + '&s=' + this.extractParamsUrlS(window.location.href) + '">2</a></span>') }
        { document.write('<span id="trois" class="pagination"><a href="/display?d=' + parseInt(this.extractParamsUrl3(window.location.href)) * 2 + '&page=3&l=' + parseInt(this.extractParamsUrl3(window.location.href)) + '&s=' + this.extractParamsUrlS(window.location.href) + '">3</a></span>') }
        { document.write('<span id="suiv1" class="pagination"><a href="/display?d=' + this.addition(parseInt(this.extractParamsUrl3(window.location.href)), parseInt(this.extractParamsUrl(window.location.href))) + '&page=' + this.addition(parseInt(this.extractParamsUrl2(window.location.href)), 1) + '&l=' + parseInt(this.extractParamsUrl3(window.location.href)) + '&s=' + this.extractParamsUrlS(window.location.href) + '">&raquo;</a></span>') }
        { document.write('<span id="suiv2" class="pagination"><a href="/display?d=' + this.addition((parseInt(this.extractParamsUrl3(window.location.href)) * 2), parseInt(this.extractParamsUrl(window.location.href))) + '&page=' + this.addition(parseInt(this.extractParamsUrl2(window.location.href)), 2) + '&l=' + parseInt(this.extractParamsUrl3(window.location.href)) + '&s=' + this.extractParamsUrlS(window.location.href) + '">&raquo;&raquo;</a></span>') }

    }

    extractParamsUrlRadio(chaineGET) {
        var str = chaineGET;
        var url = new URL(str);
        let f = url.searchParams.get("r");
        return f;
    }

    addition(var1, var2) {
        let result;
        result = var1 + var2;
        return result;
    }

    soustraction(var1, var2) {
        let result;
        result = var1 - var2;
        return result;
    }

    filtre() {
        var test = "COM"
        return test;
    }

    filterRad() {

        if (document.getElementById('Saint').checked == true) {

            document.location.href = "display?d=" + this.extractParamsUrl(window.location.href) + "&page=" + this.extractParamsUrl2(window.location.href) + "&l=" + this.extractParamsUrl3(window.location.href) + "&s=" + this.extractParamsUrlS(window.location.href) + "&f=" + this.extractParamsUrlFiltre(window.location.href) + "&r=" + document.getElementById('Saint').value;
        }
        else if (document.getElementById('Haut').checked == true) {

            document.location.href = "display?d=" + this.extractParamsUrl(window.location.href) + "&page=" + this.extractParamsUrl2(window.location.href) + "&l=" + this.extractParamsUrl3(window.location.href) + "&s=" + this.extractParamsUrlS(window.location.href) + "&f=" + this.extractParamsUrlFiltre(window.location.href) + "&r=" + document.getElementById('Haut').value;
        }
    }
    verifRSaint() {
        if (this.extractParamsUrlRadio(window.location.href) == "Saint") {
            return true;
        }

    }
    verifRHaut() {
        if (this.extractParamsUrlRadio(window.location.href) == "Haut") {

            return true;
        }
    }
    affichNbL() {

        return <form id='FormNbL' onSubmit={this.handleSubmit}><label id='labelNbL'>Selectionner le nombre de lignes à afficher :<select id='selNbL' value={this.state.value} onChange={this.handleChange}><option value="5">5</option><option value="10">10</option><option value="20">20</option><option value="50">50</option><option value="109">ALL</option></select></label></form>

    }


    handleClick() {

        var url = new URL(window.location.href);
        let f = url.searchParams.get("f");
        let test;
        if (f == null) {
            test = 1;
        }
        else if (f == "") {
            test = 1;
        }
        else {
            test = 0;
        }
        if (test == 0) {
            if (document.getElementById("sens").innerHTML === "↑") {

                document.getElementById("sens").innerHTML = "&darr;";
                document.location.href = "/display?d=" + this.extractParamsUrl(window.location.href) + "&page=" + this.extractParamsUrl2(window.location.href) + "&l=" + this.extractParamsUrl3(window.location.href) + "&s=b&f=" + f;
            }

            else if (document.getElementById("sens").innerHTML === "↓") {

                document.getElementById("sens").innerHTML = "&uarr;"
                document.location.href = "/display?d=" + this.extractParamsUrl(window.location.href) + "&page=" + this.extractParamsUrl2(window.location.href) + "&l=" + this.extractParamsUrl3(window.location.href) + "&s=h&f=" + f;
            }
        }
        else {
            if (document.getElementById("sens").innerHTML === "↑") {

                document.getElementById("sens").innerHTML = "&darr;";
                document.location.href = "/display?d=" + this.extractParamsUrl(window.location.href) + "&page=" + this.extractParamsUrl2(window.location.href) + "&l=" + this.extractParamsUrl3(window.location.href) + "&s=b";


            }

            else if (document.getElementById("sens").innerHTML === "↓") {

                document.getElementById("sens").innerHTML = "&uarr;"
                document.location.href = "/display?d=" + this.extractParamsUrl(window.location.href) + "&page=" + this.extractParamsUrl2(window.location.href) + "&l=" + this.extractParamsUrl3(window.location.href) + "&s=h";

            }
        }
    }
    enTeteTab() {
        return <table>
            <tr>

                <th>ID <button id="sens" onClick={() => this.handleClick()}>
                    {this.paramSens(window.location.href)}
                </button>
                </th>
                <input type="textarea" placeholder="Exemple : COM" id="id" name="test"></input><button id="filtre" onClick={() => this.textChange()}>
                    Valider
            </button> <th>Code Region</th>
                <th>Code</th>
                <p>Filtrer </p>
                <input type="checkbox" id="Saint" name="Saint" value="Saint" />
                <label for="Saint">Saint</label>
                <input type="checkbox" id="Haut" name="Haut" value="Haut" />
                <label for="Haut">Haut</label>
                <button id="f" onclick="ctr()" value="valider" onClick={() => this.filterRad()}>Valider</button> <th>Nom</th>
                <th>Slug</th>
            </tr>

        </table>
    }

    affichData(displayDetail) {
        return <table>

            <tr>

                <td>{displayDetail.id}</td>
                <td>{displayDetail.region_code}</td>
                <td>{displayDetail.code}</td>
                <td>{displayDetail.name}</td>
                <td>{displayDetail.slug}</td>
            </tr>
        </table>
    }


    render() {
        var filtre = this.extractParamsUrlFiltre(window.location.href);
        var filtreR = this.extractParamsUrlRadio(window.location.href);
        if (this.paramSens(window.location.href) == "↑") {

            if (this.TestextractParamsUrlFiltre(window.location.href) == 1 && this.TestextractParamsUrlFiltreR(window.location.href) == 1) {

                return (
                    < div >
                        {this.affichNbL()}

                        {this.enTeteTab()}

                        {DisplayData.reverse().slice(this.extractParamsUrl(window.location.href), parseInt(this.extractParamsUrl3(window.location.href)) + parseInt(this.extractParamsUrl(window.location.href))).map((displayDetail, index) => {

                            return this.affichData(displayDetail)

                        })}
                        <br></br>
                        {this.affichNPage()}

                        {this.desacLien()}
                    </div >
                );
            }
            else if (this.TestextractParamsUrlFiltre(window.location.href) == 0 && this.TestextractParamsUrlFiltreR(window.location.href) == 1) {

                return (
                    < div >
                        {this.affichNbL()}

                        {this.enTeteTab()}

                        {DisplayData.reverse().slice(this.extractParamsUrl(window.location.href), 109).filter(function (data) { return data.region_code.indexOf(filtre.toUpperCase()) != -1 }).map((displayDetail, index) => {

                            return this.affichData(displayDetail)

                        })}
                        <br></br>
                        {this.affichNPage()}

                        {this.desacLien()}
                    </div >
                );
            }

            else if (this.TestextractParamsUrlFiltre(window.location.href) == 0 && this.TestextractParamsUrlFiltreR(window.location.href) == 0) {

                return (
                    < div >
                        {this.affichNbL()}

                        {this.enTeteTab()}

                        {DisplayData.reverse().slice(this.extractParamsUrl(window.location.href), 109).filter(function (data) { return data.region_code.indexOf(filtre.toUpperCase()) != -1 }).filter(function (dat) { return dat.name.indexOf(filtreR) == 0 }).map((displayDetail, index) => {

                            return this.affichData(displayDetail)

                        })}
                        <br></br>
                        {this.affichNPage()}

                        {this.desacLien()}
                    </div >
                );
            }
            else if (this.TestextractParamsUrlFiltre(window.location.href) == 1 && this.TestextractParamsUrlFiltreR(window.location.href) == 0) {

                return (
                    < div >
                        {this.affichNbL()}

                        {this.enTeteTab()}

                        {DisplayData.reverse().slice(this.extractParamsUrl(window.location.href), 109).filter(function (dat) { return dat.name.indexOf(filtreR) == 0 }).map((displayDetail, index) => {

                            return this.affichData(displayDetail)

                        })}

                        <br></br>
                        {this.affichNPage()}

                        {this.desacLien()}
                    </div >
                );
            }
        }

        else if (this.paramSens(window.location.href) == "↓") {
            if (this.TestextractParamsUrlFiltre(window.location.href) == 1 && this.TestextractParamsUrlFiltreR(window.location.href) == 1) {
                return (
                    < div >
                        {this.affichNbL()}

                        {this.enTeteTab()}

                        {DisplayData.slice(this.extractParamsUrl(window.location.href), parseInt(this.extractParamsUrl3(window.location.href)) + parseInt(this.extractParamsUrl(window.location.href))).map((displayDetail, index) => {

                            return this.affichData(displayDetail)

                        })}
                        <br></br>
                        {this.affichNPage()}

                        {this.desacLien()}
                    </div >

                );
            }
            else if (this.TestextractParamsUrlFiltre(window.location.href) == 0 && this.TestextractParamsUrlFiltreR(window.location.href) == 1) {
                return (
                    < div >
                        {this.affichNbL()}

                        {this.enTeteTab()}

                        {DisplayData.slice(this.extractParamsUrl(window.location.href), 109).filter(function (data) { return data.region_code.indexOf(filtre.toUpperCase()) != -1 }).map((displayDetail, index) => {

                            return this.affichData(displayDetail)

                        })}
                        <br></br>
                        {this.affichNPage()}

                        {this.desacLien()}
                    </div >
                );
            }
            else if (this.TestextractParamsUrlFiltre(window.location.href) == 0 && this.TestextractParamsUrlFiltreR(window.location.href) == 0) {
                return (
                    < div >

                        {this.affichNbL()}

                        {this.enTeteTab()}

                        {DisplayData.slice(this.extractParamsUrl(window.location.href), 109).filter(function (data) { return data.region_code.indexOf(filtre.toUpperCase()) != -1 }).filter(function (dat) { return dat.name.indexOf(filtreR) == 0 }).map((displayDetail, index) => {

                            return this.affichData(displayDetail)

                        })}
                        <br></br>
                        {this.affichNPage()}

                        {this.desacLien()}

                    </div >

                );
            }
            else if (this.TestextractParamsUrlFiltre(window.location.href) == 1 && this.TestextractParamsUrlFiltreR(window.location.href) == 0) {
                return (
                    < div >

                        {this.affichNbL()}

                        {this.enTeteTab()}

                        {DisplayData.slice(this.extractParamsUrl(window.location.href), 109).filter(function (dat) { return dat.name.indexOf(filtreR) == 0 }).map((displayDetail, index) => {

                            return this.affichData(displayDetail)

                        })}

                        <br></br>


                        {this.affichNPage()}
                        {this.desacLien()}

                    </div >
                );
            }
        }
    }

}


export default Display

