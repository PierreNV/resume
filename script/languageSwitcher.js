"use strict";

function languageSwitcher() {
    if (!window.localStorage.getItem('language')) {
        window.localStorage.setItem('language', 'sv');
        window.location.hash = "sv";
        window.location.reload(true);
        document.scroll({top: 0, behavior: "smooth"});
        return;
    } 
    else {
        window.localStorage.clear("language");
        window.location.hash = "";
        window.location.reload(true);
        document.scroll({top: 0, behavior: "smooth"});
};};