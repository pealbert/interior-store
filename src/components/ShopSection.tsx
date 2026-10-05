import { Categories } from "@/components/Categories";
import { ProductGrid } from "@/components/ProductGrid";
import type { ShopSectionProps } from "@/types";

export function ShopSection({
	activeCategory,
	onAdd,
	onSelectCategory,
	onShow,
	products,
}: ShopSectionProps) {
	return (
		<section className="scroll-mt-24 sm:scroll-mt-20" id="shop">
			<div className="mb-8 max-w-2xl">
				<p className="mb-2 font-medium text-accent text-xs uppercase tracking-[0.2em]">
					Selected interior
				</p>
				<h2 className="font-semibold text-2xl text-[#222] sm:text-3xl">
					Simple pieces for thoughtful spaces
				</h2>
				<p className="mt-3 text-[#666] text-sm leading-relaxed sm:text-base">
					A small collection of practical furniture and lighting designed to
					feel at home in any room.
				</p>
			</div>
			<Categories activeCategory={activeCategory} onSelect={onSelectCategory} />
			<ProductGrid onAdd={onAdd} onShow={onShow} products={products} />
		</section>
	);
}
