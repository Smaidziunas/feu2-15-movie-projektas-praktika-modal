"use strict";
console.log("app.js");

// taikomes ======================================================================
const els = {
  btns: {
    movieBtn: document.getElementById("add-movie-btn"),
    cancelBackdropBtn: document.getElementById("cancelBackdropBtn"),
  },
  modals: {
    addMovieModal: document.getElementById("add-modal"),
  },
  lists: {
    backdropMovieCard: document.getElementById("backdrop"),
    inputForm: document.getElementById("add-movie-form"),
    UlMoviesCont: document.getElementById("movie-list"),
  },
};
console.log("els ===", els);

// EVENT LISTENERS ======================================================================
//                  Parodom modala
els.btns.movieBtn.addEventListener("click", () => {
  // parodyti modala (pridedam jau aprasyta klase visible, nes ten dar yra ir papild animations)
  els.modals.addMovieModal.classList.add("visible");
  // parodyti backdrop (pridedam jau aprasyta klase visible, nes ten dar yra ir papild animations)
  els.lists.backdropMovieCard.classList.add("visible");
});
//                  Isjungiam modala
els.lists.backdropMovieCard.addEventListener("click", closeMovieModal);
// isjungti backrop paspaudus and cancel mygtuko
els.btns.cancelBackdropBtn.addEventListener("click", closeMovieModal);

//                FORMA
els.lists.inputForm.addEventListener("submit", (event) => {
  //stabdom issuntima
  event.preventDefault();
  console.log("kraunam");
  //gauti input REIKSMES i nauja MOVIEOBJ
  const movieDetails = {
    title: els.lists.inputForm.elements.title.value.trim(),
    imageUrl: els.lists.inputForm.elements["image-url"].value.trim(),
    rating: els.lists.inputForm.elements.rating.value.trim(),
  };
  console.log("movieDetails ===", movieDetails);

  //mini validacija
  if (
    movieDetails.title === "" ||
    movieDetails.imageUrl === "" ||
    movieDetails.rating === ""
  ) {
    // stabdom validacija ir printinam ivesti varda
    console.log("nebaigta pildyti");
    return;
  }

  // kuriam movie
  const NewMovieHtmlEl = makeOneMovieHtmlEl(movieDetails);

  //talpinam ta movie i dom
  els.lists.UlMoviesCont.append(NewMovieHtmlEl);
});

// MAIN FUNCTIONS ======================================================================

function closeMovieModal() {
  // paslepti modala
  els.modals.addMovieModal.classList.remove("visible");
  // paslepti backdrop
  els.lists.backdropMovieCard.classList.remove("visible");
}

//=======================================================================================
//                     =============     MOVIE HTML  ======================
/**
 * sukuria ir grazina li elementa is argumentu gauto objekto reiksmiu
 * @param {object} NewMovieObj
 */
/*
     <!-- <li class="movie-element">
        <div class="movie-element__image">
          <img src="https://picsum.photos/id/1003/600/500" alt="element__image">
        </div>
        <div class="movie-element__info">
          <h2>Bambi</h2>
          <p>4/5 stars</p>
        </div>
      </li> -->
*/
function makeOneMovieHtmlEl(NewMovieObj) {
  //1.sukuriam liEl >> isorinis elementas <<<<
  const liEl = document.createElement("li");
  liEl.classList.add("movie-element");

  //2.sukuriam divContaineri >> vidiniai elementai kaip stringas<<
  const liInsideHtml = `
  <div class="movie-element__image">
    <img src="${NewMovieObj.imageUrl}" alt="element__image">
  </div>
  <div class="movie-element__info">
    <h2>${NewMovieObj.title}</h2>
    <p>${NewMovieObj.rating}</p>
  </div>
   `;
  //3. div patalpinam i jau aprasyta liEl >> talpinam i isorini elementa
  liEl.insertAdjacentHTML("afterbegin", liInsideHtml);
  console.log("liEl", liEl);
  return liEl;
}
