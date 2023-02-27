"use strict";

function languageSwitcher() {
    if (!window.localStorage.getItem('language')) {
        window.localStorage.setItem('language', 'sv');
        window.location.hash = "sv";
        window.scrollTo({top: 0, behavior: "smooth"});
        window.location.reload();
        return;
    } 
    else {
        window.localStorage.clear("language");
        window.location.hash = "";
        window.scroll({top: 0, behavior: "smooth"});
        window.location.reload();
};};