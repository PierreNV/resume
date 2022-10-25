document.getElementById("container_button").onclick = function () {
  openMenuFunction();
};
function openMenuFunction() {
  document.getElementById("container_menu").classList.toggle("menu-toggle");
  document.getElementById("wrapper").classList.toggle("wrapper-hide");
}

document.getElementById("print-button").onclick = function () {
  printFunction();
};
function printFunction() {
  window.print();
}
