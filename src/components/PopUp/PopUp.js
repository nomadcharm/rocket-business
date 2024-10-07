import { validateForm } from "../FormValidation/FormValidation";
import IMask from "imask";

const createInput = (inputType, spanText) => {
  const labelEl = document.createElement("label");
  labelEl.classList.add("form__label");

  const inputEl = document.createElement("input");
  inputEl.classList.add(inputType === "checkbox" ? "form__checkbox" : "form__input")
  inputEl.setAttribute("type", inputType);
  inputEl.setAttribute("required", "");

  const spanEl = document.createElement("span");
  spanEl.classList.add(inputType === "checkbox" ? "form__checkbox-span" : "form__input-span")
  spanEl.textContent = spanText;

  labelEl.append(inputEl, spanEl);
  return labelEl;
}

export const createPopUp = () => {
  const modalEl = document.createElement("div");
  modalEl.classList.add("modal");

  const innerModalEl = document.createElement("div");
  innerModalEl.classList.add("modal__inner");

  const modalTitleEl = document.createElement("h2");
  modalTitleEl.classList.add("modal__title");
  modalTitleEl.textContent = "Оставьте заявку";

  const formEl = document.createElement("form");
  formEl.classList.add("form");

  const nameInputEl = createInput("text", "Ваше имя *");
  const phoneInputEl = createInput("text", "Номер телефона*");

  IMask(phoneInputEl.firstChild, {
    mask: "+{7} (000) 000-00-00]",
    lazy: true,
  });

  const formBottomEl = document.createElement("div");
  formBottomEl.classList.add("form__bottom");
  const checkboxEl = createInput("checkbox", "Я соглашаюсь на обработку персональных данных");

  const submitBtn = document.createElement("button");
  submitBtn.classList.add("form__submit")
  submitBtn.setAttribute("type", "submit");
  submitBtn.disabled = true;
  const submitBtnSpanEl = document.createElement("span");
  submitBtnSpanEl.textContent = "Отправить";

  const closeBtn = document.createElement("button");
  closeBtn.classList.add("modal__close");
  closeBtn.innerHTML = `
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 5L5 15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M5 5L15 15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `;

  const closeModal = () => {
    modalEl.classList.remove("is-open");
  }

  closeBtn.addEventListener("click", (closeModal))

  window.addEventListener("click", (e) => {
    if (!modalEl.firstChild.contains(e.target)) {
      closeModal()
    }
  })

  validateForm(formEl);

  const sendData = async () => {
    const data = {
      name: nameInputEl.firstChild.value.trim(),
      phone: phoneInputEl.firstChild.value,
    }

    const response = await fetch("mail.php", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    });

    const result = await response.text();
    const resultNotification = document.createElement("div");
    resultNotification.classList.add("notification");
    resultNotification.textContent = result;
    document.body.append(resultNotification);

    setTimeout(() => {
      resultNotification.classList.add("move-out");

      setTimeout(() => {
        resultNotification.remove();
    }, 1000);
    }, 4000)
};

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  sendData();
  formEl.reset();
  closeModal();
});

submitBtn.append(submitBtnSpanEl);
formBottomEl.append(checkboxEl, submitBtn);
formEl.append(nameInputEl, phoneInputEl, formBottomEl);
innerModalEl.append(modalTitleEl, formEl, closeBtn);
modalEl.append(innerModalEl);
return modalEl;
}