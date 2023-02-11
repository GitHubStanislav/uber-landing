"use strict";
// modal window
const modalWindow = document.querySelector(".modal-window");
const overlay = document.querySelector(".overlay");
const buttonCloseModal = document.querySelector(".close-modal-window");
const showModal = document.querySelectorAll(".show-modal");

showModal.forEach((e) => {
  e.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

const showModalWindow = () => {
  modalWindow.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
};

const addHidedClass = () => {
  modalWindow.classList.add("hidden");
  overlay.classList.add("hidden");
  document.body.style.overflow = "";
};

showModal.forEach((elem) => {
  elem.addEventListener("click", showModalWindow);
});

buttonCloseModal.addEventListener("click", addHidedClass);
overlay.addEventListener("click", addHidedClass);

//Intersection Observer API
const intersection = document.querySelectorAll(".intersection");
const lookingFor = new IntersectionObserver(
  (entries, observer) => {
    const entry = entries[0];
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.remove("intersection");
      entry.target.classList.add("element-show");
      observer.unobserve(entry.target);
    }
  },
  {
    threshold: 0.1,
    root: null,
  }
);

intersection.forEach((e) => {
  lookingFor.observe(e);
});

// burger

const sideBurgerMenu = document.querySelector(".menu");
const burgerButton = document.querySelector(".hamburger");

burgerButton.addEventListener("click", () => {
  burgerButton.classList.toggle("hamburger-active");
  sideBurgerMenu.classList.toggle("menu-active");
});

const showConsoleLog1 = () => {
  console.log('1');
};
