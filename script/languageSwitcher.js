"use strict";

function languageSwitcher() {

    if (!localStorage.getItem('language')) {
        localStorage.setItem('language', 'sv');
        location.hash = "sv";
        location.reload();
        window.scroll({top: 0, behavior: "smooth"});
        return;
    } 
    else {
        localStorage.clear("language");
        location.hash = "";
        location.reload();
        window.scroll({top: 0, behavior: "smooth"});
};};