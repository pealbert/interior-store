import chairGrey from "@/assets/images/chair-grey.jpeg";
import chairWhite from "@/assets/images/chair-white.jpeg";
import sofa from "@/assets/images/sofa.jpeg";
import table from "@/assets/images/table.webp";
import wallLight from "@/assets/images/wall-light.jpeg";
import type { Product } from "@/types";

export const items: Product[] = [
	{
		id: 1,
		title: "Gray chair",
		image: chairGrey,
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
		category: "chairs",
		price: 49.99,
	},
	{
		id: 2,
		title: "Table",
		image: table,
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
		category: "tables",
		price: 149,
	},
	{
		id: 3,
		title: "Sofa",
		image: sofa,
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
		category: "sofa",
		price: 549.99,
	},
	{
		id: 4,
		title: "Lamp",
		image: wallLight,
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
		category: "light",
		price: 25,
	},
	{
		id: 5,
		title: "White chair",
		image: chairWhite,
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
		category: "chairs",
		price: 59.99,
	},
];
