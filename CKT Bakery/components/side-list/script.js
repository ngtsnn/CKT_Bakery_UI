const sideListItems = document.querySelectorAll(".side-list-item");
const sideTitle = document.querySelector("#side-title");

sideListItems.forEach((item) => {
  item.addEventListener("click", () => {
    let activeItems = document.querySelectorAll(".side-list-item.active");
    activeItems.forEach((activeItem) => {
      activeItem.classList.remove("active");
    });
    item.classList.add("active");
    sideTitle.innerText = item.innerText;
  });
});

$(".owl-carousel").owlCarousel({
  loop: false,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    450: {
      items: 2,
    },
    600: {
      items: 3.4,
    },
  },
});
