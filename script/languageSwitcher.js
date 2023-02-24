function languageSwitcher() {
    if (location.hash == "#sv") {
        localStorage.setItem('hash', '#en');
        window.scroll({top: 0, behavior: 'smooth'});
        location.reload();
    }
    else {
        localStorage.setItem('hash', '#sv');
        window.scroll({top: 0, behavior: 'smooth'});
        location.reload();
    }
};