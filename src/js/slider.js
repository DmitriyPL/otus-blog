function onSliderClick(btn, elem) {
  const isActive = "carousel-pl__active";
  const carouselItemsEl = elem.querySelectorAll(".carousel-pl__item");

  for (let [index, element] of carouselItemsEl.entries()) {
    if (element.classList.contains(isActive)) {
      element.classList.toggle(isActive);

      let nextInd = 0;
      if (btn.classList.contains("next")) {
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

function setSliderSize(elem, sliderSize) {
  if (sliderSize){
    const sliders = elem.querySelectorAll(".carousel-pl__item img");
    sliders.forEach((slide) => {
      slide.style.height = `${sliderSize.slideHieght}px`;
      slide.style.width  = `${sliderSize.slideWidth}px`;
    }); 
  }
}

function addSlides(elem, slides) {

  slides.forEach( (slide, index) => {

    const div = document.createElement('div');
    div.classList.add("carousel-pl__item");
    if (index === 0){
      div.classList.add("carousel-pl__active");
    }

    const img = document.createElement('img');   
    img.src = slide;
    img.alt = `${index+1} slide`;

    div.append(img); 
    elem.append(div);

  });
}

function addButtonInSlider(elem, buttonType) {
  
  const btn = document.createElement('button');
  btnType = (buttonType === "left") ? "prev" : "next"; 
  btn.classList.add("carousel-pl__control-button", btnType);

  const img = document.createElement('img');
  img.classList.add("carousel-pl__control-icon");
  img.src = `./assets/img/icon-${buttonType}.png`;

  btn.append(img);
  elem.append(btn);

  btn.addEventListener("click", function(ev) {
    ev.preventDefault();
    onSliderClick(btn, elem);
  });

}

function Slider(slideWrapper, params) {

  if (!(slideWrapper instanceof HTMLElement)) {
    console.log("Container is not DOM element");
  }

  const div = document.createElement('div');
  div.classList.add("carousel-pl__inner");
  slideWrapper.append(div);

  addButtonInSlider(div, "left");
  addSlides(div, params.slides);
  addButtonInSlider(div, "right")
  setSliderSize(div, params.sliderSize);

}

function addSlidersOnPage() {

  const sliderList= [];

  const sl1 = document.getElementById('sl1');
  const sl2 = document.getElementById('sl2');

  params1 = {
    sliderSize: {
      slideWidth: 400,
      slideHieght: 400
    },
    slides: [
      "./assets/img/40-300x300-grayscale.jpg",
      "./assets/img/63-300x300-grayscale.jpg",
      "./assets/img/972-300x300-grayscale.jpg"
    ],
  }

  const newSlider1 = new Slider(sl1, params1);
  sliderList.push(newSlider1);

  params2 = {
    sliderSize: {
      slideWidth: 200,
      slideHieght: 200
    },
    slides: [
      "./assets/img/40-300x300-grayscale.jpg",
      "./assets/img/63-300x300-grayscale.jpg",
      "./assets/img/972-300x300-grayscale.jpg"
    ],
  }

  const newSlider2 = new Slider(sl2, params2);
  sliderList.push(newSlider2);

}

addSlidersOnPage();