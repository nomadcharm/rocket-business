import { createVideoBanner } from "../VideoBanner/VideoBanner";
import { createSection } from "../Section/Section";
import { productList } from "../ProductList/ProductList";

export const createLanding = (app) => {
	const banner = createSection("banner");
	const video = createVideoBanner();

	const productsSection = createSection("products");
	const productsCatalog = productList();
	productsSection.firstChild.append(productsCatalog);

	banner.firstChild.append(video);
	app.append(banner, productsSection);
};
