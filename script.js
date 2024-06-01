/* !! TEXT INPUT */

let nome = document.querySelector(`#nome`);

//focus è quando entriamo nell'input e si triggera un evento
nome.addEventListener(`focus`, (e) => console.log(e));

//blur è quando esco da un input
nome.addEventListener(`blur`, (e) => console.log(e));

//change si triggera all'uscita dall'evento/input e controlla se è stato cambiato qualcosa all'interno. Se è stato cambiato qualcosa, come ad esempio, è stato scritto del testo, allora si esegue
nome.addEventListener(`change`, (e) => console.log(e));

/* !! CHECKBOX */
check1.addEventListener(`change`, (e) => {
  console.log(e);
});

//partire con la checkbox già flaggata
//check1.checked = true;

/* !! SELECT */
console.log(select.options);
//per partire con una scelta preimpostata e non la prima come di default - si possono usare sia .selected che .value che .selectIndex = x. Si equivalgono.
//select.options[2].selected = true;
select.addEventListener(`change`, (e) => {
  console.log(e);
});
/* ! ENTIRE FORM */
let myForm = document.querySelector(`#myform`);

/* !! SUBMIT BUTTON */

let submitButton = document.querySelector(`#submit`);
submitButton.addEventListener(`click`, (e) => {
  //per evitare che il form ci porti da un'altra parte, usiamo prevent default
  e.preventDefault();
  console.log(myForm);
  //costruire un key/value pair a partire da un form. Praticamente trasforma il form per creare un log semplificato per vedere tutte le coppie di chiavi e valori
  let testForm = new FormData(myForm);
  testForm.forEach((key, value) => console.log(key, value));
  console.log(testForm);
});
