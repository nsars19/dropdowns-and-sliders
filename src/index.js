import "./stylesheets/css/main.css";

const app = (() => {
  let focus = 0

  const $ = (elem) => document.querySelectorAll(elem);
  const elem = (elem) => document.querySelector(elem)

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

  [...$(".slide")].forEach((slide, idx) => {
    const {slideInfo} = {idx, slide}
    
    // console.log(slideInfo)
  })

  function nextImage() {
    if (focus == 9) return 
    
    const slides = elem('.slides')
    // slides.children[focus].style.transform = `translateX(-${currentWidth})`
    // slides.children[focus].style.opacity = "0"
    // slides.children[focus].style.transition = "opacity 0.3s ease, transform 0.3s ease"
    
    // remove current slide from display
    slides.children[focus].style.display = "none"
    focus += 1
    // add current slide to display
    slides.children[focus].style.display = "grid"
  }

  function previousImage() {
    if (focus == 0) return

    const slides = elem('.slides')
    // remove current slide from display
    slides.children[focus].style.display = "none"
    focus -= 1
    // add current slide to display
    slides.children[focus].style.display = "grid"
  }

  elem(".shift-right").addEventListener('click', nextImage)
  elem(".shift-left").addEventListener('click', previousImage)
})();
