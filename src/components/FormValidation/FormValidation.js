
export const showErrorMessage = (el, text) => {

  const errorMessage = document.createElement("p");
  errorMessage.classList.add("error-message");
  errorMessage.textContent = text;
  el.parentElement.append(errorMessage);
};

export const removeErrorMessage = (input) => {
  const errorMessage = document.querySelector(".error-message");

  if (input.parentElement.contains(errorMessage)) {
    errorMessage.remove()
  }
}

export const validateForm = (form) => {
  let validated = true;

  const validateInputs = () => {
    const inputs = form.querySelectorAll(".form__input");
    validated = true;

    inputs.forEach(input => {
      if (input.value.trim() === "") {
        validated = false;
      }
    });

    inputs.forEach(input => {
      input.addEventListener("input", () => {
        removeErrorMessage(input)
      })
    })

    const checkbox = form.querySelector(".form__checkbox");
    if (checkbox && !checkbox.checked) {
      validated = false;
    }

    if (validated) {
      form.querySelector(".form__submit").disabled = false;
    }

  };

  form.addEventListener("blur", (e) => {
    if (e.target.tagName === "INPUT" && e.target.type !== "checkbox") {
      if (e.target.value.trim() === "") {
        showErrorMessage(e.target, "Поле не заполнено");
      }
      validateInputs();
    }
  }, true);

  form.addEventListener('change', (e) => {
    if (e.target.type === 'checkbox') {
      validateInputs();
    }
  });
};

