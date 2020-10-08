let container = document.getElementById("container");
class Die {
  constructor() {
    this.value;
    this.roll();
    this.div = document.createElement("div");
    this.div.classList.add("die");
    this.par = document.createElement("p");
    this.text = document.createTextNode(this.value);
    this.par.appendChild(this.text);
    this.div.appendChild(this.par);
    container.appendChild(this.div);
  }
  roll() {
    if (this.value != 0) {
      this.value = Math.floor(Math.random() * 6) + 1;
    }
  }
}
let dieArray = [];

let counter = 0;
function insertDie() {
  let di = new Die();
  document.getElementsByClassName("die")[counter].setAttribute("id", counter);
  dieArray.push(di);
  counter++;
}
function rollDice() {
  dieArray.forEach((element, i) => {
    element.roll();
    document.getElementsByTagName("p")[i].textContent = element.value;
  });
}
function sum() {
  let sum = 0;
  dieArray.forEach((element) => {
    sum += element.value;
  });
  alert(`The sum of all dice is ${sum}`);
}

document.addEventListener("click", function (e) {
  if (e.target && e.target.className == "die") {
    dieArray[e.target.id].roll();
    e.target.firstChild.textContent = dieArray[e.target.id].value;
  }
});

document.addEventListener("dblclick", function (e) {
  if (e.target && e.target.className == "die") {
    dieArray[e.target.id].value = 0;
    e.target.style.display = "none";
  }
});
