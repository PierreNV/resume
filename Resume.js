document.getElementById("container_button").onclick = function () {
  openMenuFunction();
};
function openMenuFunction() {
  document.getElementById("container_menu").classList.toggle("menu_toggle");
  document.getElementById("wrapper").classList.toggle("wrapper_toggle");
}

document.getElementById("print-button").onclick = function () {
  printFunction();
};
function printFunction() {
  window.print();
}
