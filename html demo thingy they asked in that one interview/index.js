const name = document.getElementById("name").value;
const surname = document.getElementById("surname").value;

const email = document.getElementById("mail");
const password = document.getElementById("pwd");
const telephone = document.getElementById("tely");
const age = document.getElementById("age");

const btn = document.getElementById("btn");
const title = document.getElementById("ji");

function C() {
  if (name.length < 10 || surname.length < 10) {
    title.textContent = "ceoirn";
  }
}
