import css from "./css/style.css";
import menu from "./menu.json";
console.log(menu);
import template from "./template.hbs";
const body = document.querySelector("body");
console.log(body);
const checkbox = document.getElementById("theme-switch-toggle");
console.log(checkbox);
//console.log(template(menu));
const elem = template(menu);
const menuList = document.querySelector(".js-menu");
//console.log(menuList);

menuList.insertAdjacentHTML("afterbegin", elem);

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

if (localStorage.getItem("theme")) {
  body.classList.add(Theme.DARK);
  checkbox.checked = true;
}
checkbox.addEventListener("change", () => {
  console.log(checkbox.value);
  console.dir(checkbox.checked);
  if (checkbox.checked) {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
    localStorage.setItem("theme", " ");
  } else {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
    localStorage.removeItem("theme");
  }
});
