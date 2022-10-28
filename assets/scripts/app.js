"use strict";
console.log("app.js");

// taikomes

const els = {
  addMovieBtn: document.getElementById("add-movie-btn"),
  addMovieModal: document.getElementById("add-modal"),
  backdrop: document.getElementById("backdrop"),
};

// EVENT LISTENERS ==================

// ==================================

// ===================================

els.addMovieBtn.addEventListener("click", () => {
  // parodyti modala
  els.addMovieModal.classList.add("visible");
  // parodyti backdrop
  els.backdrop.classList.add("visible");
});
