let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");
let carasoulDom = document.querySelector(".carasoul");
let listItemDom = carasoulDom.querySelector(".list"); // Ensure correct list selection
let tumbnailDom = carasoulDom.querySelector(".tumbnaill"); // Ensure correct thumbnail selection

nextDom.onclick = function () {
  showSlider("next");
};

prevDom.onclick = function () {
  showSlider("prev");
};

let timeRunning = 3000;
let runTimeOut;

function showSlider(type) {
  let itemSlider = document.querySelectorAll(".carasoul .list .item");
  let itemThumbnail = document.querySelectorAll(".carasoul .tumbnaill .list");

  if (type === "next") {
    // Check if the first item in the slider is a valid Node
    if (itemSlider[0] && itemSlider[0] instanceof Node) {
      listItemDom.appendChild(itemSlider[0]);
    } else if (itemSlider.length > 0) {
      // Get the position of the last item if the first item is undefined
      let positionLastItem = itemSlider.length - 1;
      listItemDom.prepend(itemSlider[positionLastItem]);
    }

    // Check if the first thumbnail is a valid Node
    if (itemThumbnail[0] && itemThumbnail[0] instanceof Node) {
      tumbnailDom.appendChild(itemThumbnail[0]);
    } else if (itemThumbnail.length > 0) {
      // Get the position of the last thumbnail if the first thumbnail is undefined
      let positionLastItem = itemThumbnail.length - 1;
      tumbnailDom.prepend(itemThumbnail[positionLastItem]);
    }

    // Add the 'next' class to the carousel DOM
    carasoulDom.classList.add("next");
  }

  // Remove 'next' class after a timeout
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carasoulDom.classList.remove("next");
  }, timeRunning);
}
