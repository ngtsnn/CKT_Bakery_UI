const deskSideList = document.querySelector(".side-list");
const mobileSideList = document.querySelector(".mobile-side-list");
const deskSideListItems = deskSideList.querySelectorAll(".side-list-item");
const mobileSideListItems = mobileSideList.querySelectorAll(".side-list-item");
const sideTitle = document.querySelector("#side-title");

console.log(deskSideList)
console.log(mobileSideList)

deskSideListItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    let activeItems = document.querySelectorAll(".side-list-item.active");
    activeItems.forEach((activeItem) => {
      activeItem.classList.remove("active");
    });
    item.classList.add("active");
    mobileSideListItems[index].classList.add("active")
    sideTitle.innerText = item.innerText;
  });
});

mobileSideListItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    let activeItems = document.querySelectorAll(".side-list-item.active");
    activeItems.forEach((activeItem) => {
      activeItem.classList.remove("active");
    });
    item.classList.add("active");
    deskSideListItems[index].classList.add("active")
    sideTitle.innerText = item.innerText;
  });
});

$("#m-side-list").owlCarousel({
  loop: false,
  margin: 10,
  nav: false,
  autowidth: true,
});
