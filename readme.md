# practic movie app

## images

1.  https://picsum.photos/id/1003/1181/1772 deer
2.  https://picsum.photos/id/1006/3000/2000 mountain
3.  https://picsum.photos/id/1015/6000/4000 river

padaryti kad paspadus istrinti, atsiratu istynimo modalas. pati modala galim atsaukti, tai nutraukia istrynima. jei paspaudziam patvirtinti, tai toliau vyksta istrynimas.

prisideti filtra filtruoti pagal title

jei per sunku. Tai gryztam i init saka ir pradedam viska nuo pradziu. atliekam panasiai tuos pacius funkcionalumo dalykus

- CODE REFACTORING - kodo sutraukimas i funkcijas, kad nesikartotu ir butu optimalesne versija
- CANCEL BUTTON, type BUTTON. KIEKVIENAS MYGTUKAS siuncia forma nebent type nurodytas button.
- Form.elements.VALUE - special tag for FORM.
- ANY ELEMENT inside other element when creating element, could be obtained with [];
- i TextContent nesikelia JS.

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

- second
-
