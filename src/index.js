import "./stylesheets/css/main.css";

const app = (() => {
  const $ = (elem) => document.querySelectorAll(elem);

  function addListenerToChild(child) {
    child.addEventListener("click", () => {
      // do something with child element
    });
  }

  function toggleDisplay(elem) {
    elem.classList.toggle("display-off");
  }

  [...$("navitem")].forEach((element) => {
    element.addEventListener("click", () =>
      toggleDisplay(element.childNodes[3])
    );

    const children = [...element.childNodes[3].children[0].children];
    children.forEach((child) => addListenerToChild(child));
  });
})();
