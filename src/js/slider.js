function slider() {
  initialize();
}

function onSliderClick() {
  const isActive = "carousel-pl__active";
  const carouselEl = document.querySelector(".carousel-pl__inner");
  const carouselItemsEl = carouselEl.querySelectorAll(".carousel-pl__item");

  for (let [index, element] of carouselItemsEl.entries()) {
    if (element.classList.contains(isActive)) {
      element.classList.toggle(isActive);

      let nextInd = 0;
      if (this.classList.contains("next")) {
        nextInd = ++index;
      } else {
        nextInd = --index;
      }

      const nextEl = carouselItemsEl[getIndex(nextInd, carouselItemsEl.length)];
      nextEl.classList.toggle(isActive);

      break;
    }
  }
}

function getIndex(currentInd, length) {
  let index = currentInd;

  if (currentInd > length - 1) {
    index = 0;
  } else if (currentInd < 0) {
    index = length - 1;
  }

  return index;
}

function initialize() {
  const elements = document.querySelectorAll(".carousel-pl__control-button");
  elements.forEach((element) => {
    element.addEventListener("click", onSliderClick);
  });
}

slider();
