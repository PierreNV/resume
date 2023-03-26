export const createLinks = (links) => {
  const menu = document.querySelector(".menu");

  links.forEach((link) => {
    const navLink = document.createElement("a");

    navLink.id = `menu__link__${link.toLowerCase()}`;
    navLink.classList = "menu__links menu__links__bg buttons-effect";
    navLink.textContent = `${link}`;
    link === "Home"
      ? (navLink.href = "index.html")
      : (navLink.href = `${link.toLowerCase()}` + `.html`);
    navLink.setAttribute("data-aos", "flip-down");
    navLink.setAttribute("data-aos-duration", "800");
    menu.append(navLink);
  });
};
