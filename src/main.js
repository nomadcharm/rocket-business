import { createLanding } from "./components/Landing/Landing";
import { createPopUp } from "./components/PopUp/PopUp";
import "./scss/style.scss";

const app = document.querySelector('#app');

createLanding(app);

setTimeout(() => {
  const popUp = createPopUp()

  const openModal = () => {
    popUp.classList.add('is-open');
  }

  app.append(popUp)
  setTimeout(() => {
    openModal()
  }, 1000)
}, 5000);
