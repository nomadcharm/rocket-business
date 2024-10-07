import { createLikeBtn } from "../IconButtons/LikeBtn";
import { createViewBtn } from './../IconButtons/ViewBtn';

const updateProductImages = (product, card) => {
  const width = window.innerWidth;

  if (width <= 425) {
    product.img = product.imgMobile;
  } else if (width <= 1024) {
    product.img = product.imgTablet;
  } else if (width > 1025) {
    product.img = product.img;
  };

  card.style.backgroundImage = `url(${product.img})`;
};

export const productCard = (product) => {
  const cardEl = document.createElement("article");
  cardEl.classList.add("card");

  window.addEventListener("load", () => {
    updateProductImages(product, cardEl);
  });

  window.addEventListener("resize", () => {
    updateProductImages(product, cardEl);
  });

  const cardTitleEL = document.createElement("h3");
  cardTitleEL.classList.add("card__title");
  cardTitleEL.textContent = `${product.title}, ${product.weight}`;

  const btnGroup = document.createElement("div");
  btnGroup.classList.add("card__btn-group");

  const likeBtnEl = createLikeBtn();
  likeBtnEl.classList.add("card__like-btn");
  const viewBtnEl = createViewBtn();
  viewBtnEl.classList.add("card__view-btn");

  const promoGroup = document.createElement("div");
  promoGroup.classList.add("card__promo-group");

  if (product.discount > 0) {
    const discountPromoEl = document.createElement("div");
    discountPromoEl.classList.add("card__discount");
    discountPromoEl.classList.add(product.discount < 30 ? "card__discount--sm" : "card__discount--md");
    discountPromoEl.textContent = `- ${product.discount}%`;
    promoGroup.append(discountPromoEl);
  };

  if (product.promo !== "") {
    const currentPromoEl = document.createElement("div");
    currentPromoEl.classList.add("card__promo");

    if (product.promo === "Товар дня") {
      currentPromoEl.classList.add("card__promo--daily");
    } else if (product.promo === "Хит") {
      currentPromoEl.classList.add("card__promo--hit");
    } else {
      currentPromoEl.classList.add("card__promo--sale");
    };

    currentPromoEl.textContent = product.promo;
    promoGroup.append(currentPromoEl);
  };

  const actionGroup = document.createElement("div");
  actionGroup.classList.add("card__action-group");

  const priceEl = document.createElement("p");
  priceEl.classList.add("card__price");
  priceEl.textContent = `${product.price} ₽`;

  const purchaseBtn = document.createElement("button");
  purchaseBtn.classList.add("card__purchase-btn");
  const purchaseBtnTextEl = document.createElement("span");
  purchaseBtnTextEl.textContent = "Оставить заявку";

  purchaseBtn.appendChild(purchaseBtnTextEl);
  actionGroup.append(priceEl, purchaseBtn);
  btnGroup.append(likeBtnEl, viewBtnEl);
  cardEl.append(cardTitleEL, btnGroup, promoGroup, actionGroup);
  return cardEl;
};
