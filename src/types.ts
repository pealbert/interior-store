import type { Dispatch, SetStateAction } from "react";

export type CategoryKey = "all" | "chairs" | "tables" | "sofa" | "light";

export interface Category {
	key: CategoryKey;
	name: string;
}

export interface Product {
	id: number;
	title: string;
	image: string;
	description: string;
	category: Exclude<CategoryKey, "all">;
	price: number;
}

export interface HeaderSectionProps {
	orders: Product[];
	onDeleteOrder: (productId: Product["id"]) => void;
}

export interface CartProps extends HeaderSectionProps {
	onClose: () => void;
}

export interface OrderProps {
	order: Product;
	onDelete: (productId: Product["id"]) => void;
}

export interface CategoriesProps {
	activeCategory: CategoryKey;
	onSelect: (category: CategoryKey) => void;
}

export interface ProductGridProps {
	products: Product[];
	onAdd: (product: Product) => void;
	onShow: Dispatch<SetStateAction<Product | null>>;
}

export interface ProductCardProps {
	product: Product;
	onAdd: (product: Product) => void;
	onShow: (product: Product) => void;
}

export interface ProductModalProps extends ProductCardProps {
	onClose: () => void;
}

export interface ShopSectionProps extends ProductGridProps {
	activeCategory: CategoryKey;
	onSelectCategory: (category: CategoryKey) => void;
}
