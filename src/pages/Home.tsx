import { useCallback, useMemo, useState } from "react";
import { AboutSection } from "@/components/AboutSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ContactSection } from "@/components/ContactSection";
import { FooterSection } from "@/components/FooterSection";
import { HeaderSection } from "@/components/HeaderSection";
import { ProductModal } from "@/components/ProductModal";
import { ShopSection } from "@/components/ShopSection";
import { items } from "@/data/items";
import type { CategoryKey, Product } from "@/types";

export function Home() {
	const [orders, setOrders] = useState<Product[]>([]);
	const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

	const visibleProducts = useMemo(
		() =>
			activeCategory === "all"
				? items
				: items.filter((item) => item.category === activeCategory),
		[activeCategory],
	);

	const addOrder = useCallback((product: Product) => {
		setOrders((currentOrders) =>
			currentOrders.some((order) => order.id === product.id)
				? currentOrders
				: [...currentOrders, product],
		);
	}, []);

	const deleteOrder = useCallback((productId: Product["id"]) => {
		setOrders((currentOrders) =>
			currentOrders.filter((order) => order.id !== productId),
		);
	}, []);

	return (
		<div
			className="mx-auto w-full min-w-0 max-w-360 px-4 font-light font-montserrat sm:px-6 lg:px-10"
			id="top"
		>
			<HeaderSection onDeleteOrder={deleteOrder} orders={orders} />
			<main className="min-w-0">
				<ShopSection
					activeCategory={activeCategory}
					onAdd={addOrder}
					onSelectCategory={setActiveCategory}
					onShow={setSelectedProduct}
					products={visibleProducts}
				/>
				<AboutSection />
				<BenefitsSection />
				<ContactSection />
			</main>
			<FooterSection />
			{selectedProduct && (
				<ProductModal
					onAdd={addOrder}
					onClose={() => setSelectedProduct(null)}
					onShow={setSelectedProduct}
					product={selectedProduct}
				/>
			)}
		</div>
	);
}
