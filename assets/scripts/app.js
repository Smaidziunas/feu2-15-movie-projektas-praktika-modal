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
  NoMoviesContainer: document.getElementById("entry-text"),
};
console.log("els ===", els);

//============  BENDRAS filmu KINTAMASIS SUKURIAM NAUJA MOVIES MASYVA KURIAME ISAUGOSIME INFORMACIJA
let mainMoviesArr = [];

// Testavimui pridedam filma:
{
  addNewMovieHandler({
    id: generateId(),
    title: "test",
    imageUrl: "https://picsum.photos/id/1003/600/500",
    rating: "5",
  });
}

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
  //========================gauti input REIKSMES i nauja movieDetails OBJEKTA
  const movieDetails = {
    id: generateId(),
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

  // pridedam movie i FUNKCIJA, kuri ides naujo filmo details i masyva ir pasuks cikla, kuriame detales irasys i DOM;
  addNewMovieHandler(movieDetails);
  // paspaudus norim uzdaryti modala
  closeMovieModal();
  // uzdarius modala norim istrinti reiksmes is formos
  els.lists.inputForm.reset();
});

// MAIN FUNCTIONS ======================================================================

/**
 * padavus movieDetails masyva su naujom formos input reiksmem, PUSHina jas i nauja masyva [mainMoviesArr] ir, daro for loop'a idedamas reiksmes i HTML elementus.
 * @param {object} newMovieObj
 */
function addNewMovieHandler(newMovieObj) {
  //pridedam filma i mainMovie arr
  mainMoviesArr.push(newMovieObj);
  //paslepiam main sekcija <entry-text>
  els.NoMoviesContainer.style.display = "none";
  //issivalom saraso konteineri kad nebutu dubliuojami elementai su APPEND funkcija
  els.lists.UlMoviesCont.innerHTML = "";
  //sukam cikla per visa ta MainMovies array, per kuri generuojam nauja filma:
  mainMoviesArr.forEach((mObj) => {
    // kuriam htmlEl vieno movie
    const NewMovieHtmlEl = makeOneMovieHtmlEl(mObj);
    //talpinam ta movie i dom
    els.lists.UlMoviesCont.append(NewMovieHtmlEl);
  });
}

function closeMovieModal() {
  // paslepti modala
  els.modals.addMovieModal.classList.remove("visible");
  // paslepti backdrop
  els.lists.backdropMovieCard.classList.remove("visible");
}

//=======================================================================================
//                     =============     MOVIE HTML   ======================
/**
 * sukuria ir grazina li elementa is argumentu gauto objekto reiksmiu
 * @param {object} NewMovieODetails
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
function makeOneMovieHtmlEl(NewMovieODetails) {
  //1.sukuriam liEl >> isorinis elementas <<<<
  const liEl = document.createElement("li");
  liEl.classList.add("movie-element");
  // prisidedam data-movie-id atributa, kad atskirti indvidualu liEl
  liEl.dataset.movieId = NewMovieODetails.id;

  //2.sukuriam divContaineri >> vidiniai elementai kaip stringas<<
  const liInsideHtml = `
  <div class="movie-element__image">
    <img src="${NewMovieODetails.imageUrl}" alt="element__image">
  </div>
  <div class="movie-element__info">
    <h2>${NewMovieODetails.title}</h2>
    <p>${NewMovieODetails.rating}</p>
    <i class="delete fa fa-trash" aria-hidden="true"></i>
  </div>
   `;
  //3. div patalpinam i jau aprasyta liEl >> talpinam i isorini elementa
  liEl.insertAdjacentHTML("afterbegin", liInsideHtml);
  // console.log("liEl", liEl);
  const deleteBtnEl = liEl.querySelector(".delete");
  // deleteBtn Event Listener, kad paspaudus issitrintu:
  deleteBtnEl.addEventListener("click", movieDeleteHandler);
  return liEl;
}
/**
 * reaguoja i event ir leidzia nusitaikyti i event.target tevini elementa, kuris ir yra newMovieArray
 * @param {*} event
 */
function movieDeleteHandler(event) {
  console.log("delete movie", event.target);
  event.target.parentElement.parentElement.remove();
}

// HELPER FUNCTIONS ======================================================================
function generateId() {
  return Math.random().toFixed(8).slice(2);
}
