import "./stylesheets/css/main.css";

const app = (() => {
  const $ = (elem) => document.querySelectorAll(elem);

  [...$("navitem")].forEach((element) => {
    element.addEventListener("click", () => {
      element.childNodes[3].classList.toggle("display-off");
    });

    let children = [...element.childNodes[3].children[0].children];
    children.forEach((child) => addListenerToChild(child));
  });

  function addListenerToChild(child) {
    child.addEventListener("click", () => {
      console.log(child);
    });
  }
})();
