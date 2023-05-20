"use strict";

export const languageSwitcher = () => {
  if (!window.localStorage.getItem("language")) {
    window.localStorage.setItem("language", "sv");
    window.location.hash = "sv";
    window.scrollTo(0, 0);
    window.location.reload(true);
    return;
  } else {
    window.localStorage.clear("language");
    window.location.hash = "";
    history.replaceState("", "", location.pathname);
    window.scrollTo(0, 0);
    window.location.reload(true);
  }
};
