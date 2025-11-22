// function toggleAnswer(element) {
//   const allAnswers = document.querySelectorAll(".faq .answer");
//   const allButtons = document.querySelectorAll(".faq button");
//   allAnswers.forEach((answer) => (answer.style.display = "none"));
//   allButtons.forEach((btn) => btn.classList.remove("active"));

//   element.classList.add("active");
//   const answer = element.nextElementSibling;
//   answer.style.display = "block";
// }

function toggleAnswer(element) {
  const allAnswers = document.querySelectorAll(".faq .answer");
  const allButtons = document.querySelectorAll(".faq button");

  const answer = element.nextElementSibling;
  const isActive = element.classList.contains("active");

  // Close all answers and remove active from all buttons
  allAnswers.forEach((ans) => (ans.style.display = "none"));
  allButtons.forEach((btn) => btn.classList.remove("active"));

  // If it was not active, open it; if active, close it (toggle behavior)
  if (!isActive) {
    element.classList.add("active");
    answer.style.display = "block";
  }
}

function createSlider(sliderId) {
  let currentIndex = 0;
  const slider = document.getElementById(sliderId);
  const totalItems = slider.children.length;

  function updateSlider() {
    currentIndex = (currentIndex + 1) % totalItems;
    slider.scrollTo({
      left: currentIndex * 210,
      behavior: "smooth",
    });
  }

  setInterval(updateSlider, 3000);
}

createSlider("experts-slider");
createSlider("tools-slider");

let currentIndex = 0;
const items = document.querySelectorAll(".slider-item");
const dots = document.querySelectorAll(".dot");

function updateSlider() {
  items.forEach((item, index) => {
    item.style.display =
      index >= currentIndex && index < currentIndex + 6 ? "flex" : "none";
  });
  // dots.forEach((dot, index) => {
  //     dot.classList.toggle('active', index === Math.floor(currentIndex / 6));
  // });
}

function autoSlide() {
  currentIndex = (currentIndex + 1) % (items.length - 5);
  updateSlider();
}

setInterval(autoSlide, 2000);
updateSlider();

let index = 0;
const slides = document.querySelector(".slides");
const totalSlides = slides.children.length;

function showSlide(i) {
  index = (i + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  showSlide(index + 1);
}

function prevSlide() {
  showSlide(index - 1);
}
setInterval(nextSlide, 2000);

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (toggleBtn && nav) {
    toggleBtn.addEventListener("click", () => {
      nav.classList.toggle("active");
    });

    document.addEventListener("click", (event) => {
      if (
        !nav.contains(event.target) &&
        !toggleBtn.contains(event.target) &&
        nav.classList.contains("active")
      ) {
        nav.classList.remove("active");
      }
    });
  }
});
