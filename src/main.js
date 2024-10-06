import { createVideoBanner} from "./components/VideoBanner/VideoBanner";
import { createSection } from "./components/Section/Section";
import { productList } from "./components/ProductList/ProductList";
import { createPopUp } from "./components/PopUp/PopUp";
import "./style.scss";

const app = document.querySelector('#app');

const createMainPage = () => {
// banner section
const banner = createSection("banner");
const video = createVideoBanner();

// products section
const productsSection = createSection("products");
const productsCatalog = productList();
productsSection.firstChild.append(productsCatalog)

banner.firstChild.append(video);
app.append(banner, productsSection);

}
createMainPage()

setTimeout(() => {
  const popUp = createPopUp()
  app.append(popUp)
  popUp.classList.add("is-open")
}, 2000)


// 1.5 часа
// + 2 часа
// + 30 min
