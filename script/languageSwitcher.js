"use strict";

function languageSwitcher() {

    if (!localStorage.getItem('language')) {
        localStorage.setItem('language', 'sv');
        window.scroll({top: 0});
        location.reload();
        return;
    } 
    else {
        localStorage.clear("language");
        window.scroll({top: 0});
        location.reload();
};};