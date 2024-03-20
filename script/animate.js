"use strict";

try {
  AOS.init({
    startEvent: "load",
  });
} catch (error) {
  window.alert("AOS ANIMATION FAILED");
}
