# practic movie app

## images

1.  https://picsum.photos/id/1003/1181/1772 deer
2.  https://picsum.photos/id/1006/3000/2000 mountain
3.  https://picsum.photos/id/1015/6000/4000 river

padaryti kad paspadus istrinti, atsiratu istynimo modalas. pati modala galim atsaukti, tai nutraukia istrynima. jei paspaudziam patvirtinti, tai toliau vyksta istrynimas.

prisideti filtra filtruoti pagal title

jei per sunku. Tai gryztam i init saka ir pradedam viska nuo pradziu. atliekam panasiai tuos pacius funkcionalumo dalykus

                #### ATMINTINE:

- CODE REFACTORING - kodo sutraukimas i funkcijas, kad nesikartotu ir butu optimalesne versija
- CANCEL BUTTON, type BUTTON. KIEKVIENAS MYGTUKAS siuncia forma nebent type nurodytas button.
- Form.elements.VALUE - special tag for FORM.
- ANY ELEMENT inside other element when creating element, could be obtained with [];
- i TextContent nesikelia JS.
- FORM.RESET() - isvalo FORM input values;
- GENERATE random ID: Math.random().toFixed(8).slice(2);
- Funkcijosviduje aprasytos funkcijos gali buti naudojamos uz funkcijos skliaustu, o kintamieji ne.
- liEl.dataset.movieId = newMovieObj.id; - prideda data-movie-id atributa <liEl> elementui

<!-- PIRMA DALIS  -->

- ### iskvietem modalus
- ### pasiemem formos input reiksmes idejom i elementus ir elementus storinam objekte
- ### Apsirasem buttonu veikima su EVENTLISTENERS;
- ## aprasem naujos korteles atsiradima:
  1. sukurem CREATE ELEMENT vidini elementa - li;
  2. sukurem <li> viduje esancius <div> <h2> ir <p> ir ju tekstus is karto, kaip STRING, naudodami ` ${}`,
  3. ir sukurta STRING patalpinome i sukurta <li> su insertAdjacentHTML("afterbegin", LIelementas); (galima ir su inner.html)
  4. sukurtas <li> yra grazinamas (return) funkcijos, kuri yra iskvieciama kai
  5. <li> elementa appendinam i jau HTML esanti - <ul>, lista.

<!-- ANTRA DALIS -->

dabar visa informacija yra laikoma objektuose ir masyvuose, tam kad butu ja galima apdoruoti backende.

todel, sukurta korteles atsiradima, aprasome kaip ojekta.

1. Pradzioje <FORM> pries submit EVENTLISTENER sukuriam nauja mayvo var - [MAINARRAY]. Jis saugos visa nauja filmu informacija.
2. Formos viduje, vietoje kur kvietem sukurto liEl funkcija, ir ja talpinom i DOM, ten kuriame nauja FUNCTION, kuri ides sia informacija kartu su <forEach> loop'u i [MAINARRAY].
3. Funkcijos viduje vyksta 2 veiksmai - 1)ipushinam naujo filmo formos input data, 2)ipushinta data loopinam dedam i html ir APPENDinam i <ull>;
4. Kad filmas butu istrinamas paspaudus ant Icon, kuriam nauja funkcija, kurioje aprasom filmo istrinima: 1) sukuriam kiekvienam <li> po i su .dataset() metodu, makeOneMovieHtml funkcijoje; 2) sukuriam id, artimiausiam <li> event.target'ui; 3) filtruojam su FILTER() funkcija per [MAINARRAY], ir iskvieciam visa [MAINARRAY], jeigu !== tam elementui kuris turi priskirta event.target id; 4) kad gautume nauja lista su elementais iskyrus tais, kurie buvo istrinti, kvieciame nauja RENDER() funkcija, kuri prasides ivykus pokyciui: 5) RENDER() funkcija : apskliaudzia forEach loop procesa kai pagamintas html sarasas yra appendinamas i dokumento html;
5. Kad istrynus visus filmus, vel atsirastu konteineris su tekstu, tik atsidarius puslapi, RENDER() funkcijoje pridedam dar viena if, kuris tikrina [MAINARRAY] ilgi ir grazina kont. jeigu ilgis === 0;

- second
-
