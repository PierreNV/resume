document.getElementById("container_dropdown_button").onclick = function () {
  menuToggleFunction();
};

function menuToggleFunction() {
  document
    .getElementById("container_menu_wrapper")
    .classList.toggle("menu_toggle");
  document.getElementById("wrapper").classList.toggle("wrapper_toggle");
}

document.getElementById("print-button").onclick = function () {
  window.print();
};
