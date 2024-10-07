import { products } from "../../db";
import { productCard } from "../ProductCard/ProductCard";
import { createSlider } from "../Slider/Slider";

let sliderCreated = false;
let slider;

export const productList = () => {
  const listItems = [];
  const parentDiv = document.createElement("div");
  const productListEl = document.createElement("ul");
  productListEl.classList.add("products__list");

  products.map(product => {
    const listItem = document.createElement("li");
    listItem.classList.add("products__card");
    const productEl = productCard(product);
    productEl.classList.add("card");

    if (product.id === 4 || product.id === 5) {
      productEl.classList.add("card__sm");
    };

    listItem.append(productEl);
    listItems.push(productEl);
    productListEl.append(listItem);
  });

  const enableResponsiveList = () => {
    if (innerWidth <= 425 && !sliderCreated) {
      slider = createSlider(productListEl, listItems, parentDiv);
      sliderCreated = true;
    } else if (innerWidth > 425 && sliderCreated) {
      const existingSlider = productListEl.querySelector(".products__list--slider");
      if (existingSlider) {
        productListEl.removeChild(existingSlider);
      }
      sliderCreated = false;
    };
  };

  window.addEventListener("resize", () => {
    enableResponsiveList()
  });

  window.addEventListener("load", () => {
    enableResponsiveList()
  });

  parentDiv.prepend(productListEl);
  return parentDiv;
};
