let currentIndex = 0;

const updatePagination = (pagination) => {
  const dots = pagination.children;
  Array.from(dots).forEach(dot => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
};

const showSlide = (index, slider, pagination) => {
  const slides = slider.children;
  const CARD__WIDTH = 230;
  const TOTAL_CARDS = 2;
  const maxIndex = TOTAL_CARDS - 1;

  for (let i = 0; i < slides.length; i++) {
    if (i === index) {
      slides[i].style.opacity = "1";
    } else {
      slides[i].style.opacity = "0.5";
    }
  }

  currentIndex = Math.max(0, Math.min(index, maxIndex));
  slider.style.transform = `translateX(-${currentIndex * CARD__WIDTH}px)`;

  updatePagination(pagination);
};

export const createSlider = (productListEl, listItems, parentDiv) => {
  const slider = document.createElement("li");
  slider.classList.add("products__list--slider");
  const lastTwoItems = listItems.slice(-2);

  lastTwoItems.forEach(item => {
    slider.appendChild(item.cloneNode(true));
  });

  const pagination = document.createElement("div");
  pagination.classList.add("pagination");

  lastTwoItems.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("pagination__dot");
    dot.dataset.index = index;
    pagination.appendChild(dot);
  });

  productListEl.appendChild(slider);
  parentDiv.appendChild(pagination);

  showSlide(0, slider, pagination);

  let startX;
  let endX;
  slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  }, { passive: true });

  slider.addEventListener("touchmove", (e) => {
    endX = e.touches[0].clientX;
  }, { passive: true });
  
  slider.addEventListener("touchend", () => {
    if (startX > endX + 50) {
      if (currentIndex < lastTwoItems.length - 1) {
        currentIndex++;
        showSlide(currentIndex, slider, pagination);
      }
    } else if (startX < endX - 50) {
      if (currentIndex > 0) {
        currentIndex--;
        showSlide(currentIndex, slider, pagination);
      }
    }
  });

  return slider;
};