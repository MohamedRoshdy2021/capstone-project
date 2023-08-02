import "./style.css";
import getData from "./modules/display-homepage";
import showPopupCategories from "./modules/show-popup-category";
import showPopupContacts from "./modules/popup-contact";

getData();

const menuCat = document.getElementById("categories");
menuCat.addEventListener("click", () => {
  showPopupCategories();
});

const menuCont = document.getElementById("contacts");
menuCont.addEventListener("click", () => {
  showPopupContacts();
});
