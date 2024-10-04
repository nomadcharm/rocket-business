import { createVideoBanner} from "./components/VideoBanner/VideoBanner";
import { createSection } from "./components/Section/Section";
import { productList } from "./components/ProductList/ProductList";
import "./style.scss";

const app = document.querySelector('#app');

// banner section
const banner = createSection("banner");
const video = createVideoBanner();

// products section
const productsSection = createSection("products");
const productsCatalog = productList();
productsSection.firstChild.append(productsCatalog)

banner.firstChild.append(video);
app.append(banner, productsSection);


// 1.5 часа
// + 2 часа
