const counter = document.querySelector(".counter");
const img = document.querySelector("img");

const add = document.getElementById("btn-add");
const substr = document.getElementById("btn-substr");
const reset = document.getElementById("btn-reset");

let count = 0;

events();
function events() {
  add.addEventListener('click',Add);
  substr.addEventListener('click',Substr);
  reset.addEventListener('click',Reset);
}

function Add() {
  count++;
  counter.textContent = count;
  console.log(count);  
  ChangeState();
}

function Substr() {
  count--;
  counter.textContent = count;  
  console.log(count);
  ChangeState();
}

function Reset() {
  count = 0;
  counter.textContent = count;
  console.log(count); 
  ChangeState(); 
}

function ChangeState() {
  if (count <= 0) {    
    img.classList.remove("enabled-img");
    img.classList.add("disabled-img");    
    console.log("disabled");
  } else {
    img.classList.remove("disabled-img");  
    img.classList.add("enabled-img");
    console.log("enabled");
  }
}
