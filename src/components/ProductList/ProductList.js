import { products } from "../../db";
import { productCard } from "../ProductCard/ProductCard";

export const productList = () => {
  const productListEl = document.createElement("ul");
  productListEl.classList.add("products__list");

  products.map(product => {
    const productEl = productCard(product);
    productEl.style.backgroundImage = product.img;
    productEl.classList.add("products__card");
    if (product.id === 4 || product.id === 5) {
      productEl.classList.add("card__sm");
    }
    productListEl.append(productEl);
  });

  return productListEl;
}