// ==UserScript==
// @name         Fix Gest'Hordes - Digging
// @version      0.1
// @description  Fix digging
// @author       Phost
//
// @updateURL    https://github.com/2phost/mh-gh-translator/raw/main/hm_map.js
// @downloadURL  https://github.com/2phost/mh-gh-translator/raw/main/hm_map.js
//
// @match        https://gest-hordes2.eragaming.fr/carte/*
// @match        https://gest-hordes2.eragaming.fr/carte
//
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let carte = document.getElementById('zoneCarte');
    carte.setAttribute('style',"zoom: 0.8;");

    let cases_carte = Array.from(document.querySelectorAll('.caseCarte'));
    cases_carte
        .filter((case_carte) => {
        for (let i = 0; i < case_carte.children.length; i++) {
            if (case_carte.children[i].classList.contains("epuise")) {
                return false
            }
        }
        return true

    })
        .forEach((case_carte) => {
        //let carte_alter_div = document.createElement('div');
        //carte_alter_div.innerHTML = `<img src="https://fatamorgana.md26.eu/css/img/small_gather.gif" style="width: 0.6vw; display: inline-block; padding-top: 14px; padding-left: 2px">`;

        let carte_alter_div = document.createElement('img');
        carte_alter_div.setAttribute('src', 'https://fatamorgana.md26.eu/css/img/small_gather.gif');
        carte_alter_div.setAttribute('style', 'width: 0.8vw; position: absolute; top: 0px; right: 0px');

        //let theFirstChild = case_carte.getElementsByClassName('quadrillage')[0]
        //case_carte.insertBefore(carte_alter_div, theFirstChild.nextSibling);
        //let theFirstChild = case_carte.firstChild;
        //case_carte.insertBefore(carte_alter_div, theFirstChild);
        case_carte.appendChild(carte_alter_div);
    });
})();

