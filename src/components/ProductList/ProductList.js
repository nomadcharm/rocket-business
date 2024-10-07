import { products } from "../../db";
import { productCard } from "../ProductCard/ProductCard";
import { createSlider } from "../Slider/Slider";

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
    }

    listItem.append(productEl);
    listItems.push(productEl);
    productListEl.append(listItem);
  });

  if (innerWidth <= 425) {
    createSlider(productListEl, listItems, parentDiv);
  };

  parentDiv.prepend(productListEl);
  return parentDiv;
};
