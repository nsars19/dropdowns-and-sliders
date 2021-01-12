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

  function nextImage() {
    if (focus == 9) return 
    
    const slides = elem('.slides')
    // slides.children[focus].style.transform = `translateX(-${currentWidth})`
    // slides.children[focus].style.opacity = "0"
    // slides.children[focus].style.transition = "opacity 0.3s ease, transform 0.3s ease"
    
    // remove current slide from display
    slides.children[focus].style.display = "none"

    // remove current focused value
    focus += 1

    // add new current slide to display
    slides.children[focus].style.display = "grid"
  }

  function previousImage() {
    if (focus == 0) return

    const slides = elem('.slides')

    // remove current slide from display
    slides.children[focus].style.display = "none"
    
    // change current focused value
    focus -= 1

    // add new current slide to display
    slides.children[focus].style.display = "grid"
  }

  function times(x, callback) {
    for (let i = 0; i < x; i++) {
      callback()
    }
  }

  function setActiveIcon(current, newChoice) {
    const currentChoice = elem(".slide-control-icons").children[current]
    const selected = elem(".slide-control-icons").children[newChoice]
    
    currentChoice.firstElementChild.style.background = "none"
    selected.firstElementChild.style.background = "#222"
  }

  elem(".shift-right").addEventListener('click', nextImage);
  elem(".shift-left").addEventListener('click', previousImage);

  [...$(".icon")].forEach((icon, idx) => {
    icon.addEventListener('click', () => {
      if (focus === idx) return
      
      setActiveIcon(focus, idx)

      focus <= idx 
      ? times(idx - focus, nextImage)
      : times(focus - idx, previousImage)

    })
  })
})();
