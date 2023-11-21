// random user api => https://random-data-api.com/api/v2/users
const url = "https://random-data-api.com/api/v2/users";

let fullName = document.querySelector(".full-name");
let id = document.querySelector(".id");
let userName = document.querySelector(".user-name");
let birth = document.querySelector(".birth");
let country = document.querySelector(".country");
let prof = document.querySelector(".prof");
let email = document.querySelector(".email");
let phone = document.querySelector(".phone");
let sample = document.querySelector(".sample");
let age = document.querySelector(".age");
let dp = document.querySelector("img");

const now = new Date();

async function getUser() {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new error("response is not okay");
    const data = await res.json();
    console.log(data);
    const ages = now.getFullYear() - data.date_of_birth.split("-")[0];
    sample.innerHTML = `Real user info`;
    id.innerHTML = `${data.id}`;
    fullName.innerHTML = `${data.first_name} ${data.last_name}`;
    userName.innerHTML = `${data.username}`;
    birth.innerHTML = `${data.date_of_birth}`;
    country.innerHTML = `${data.address.country}`;
    prof.innerHTML = `${data.employment.title}`;
    email.innerHTML = `${data.email}`;
    phone.innerHTML = `${data.phone_number}`;
    age.innerHTML = `${ages}`;
    dp.src = `${data.avatar}`;
  } catch (error) {
    console.log("error is", error);
  }
}

const btn = document.querySelector(".create");
btn.addEventListener("click", function () {
  getUser();
});
