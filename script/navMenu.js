export const createMenu = () => {
  const header = document.getElementById("header__nav");

  const navMenu = document.createElement("nav");
  navMenu.id = "header__nav__menu";

  const divMenu = document.createElement("div");
  divMenu.classList = "toggle-target display-none";

  divMenu.append(navMenu);
  header.append(divMenu);
};
