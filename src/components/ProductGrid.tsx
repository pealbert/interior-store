import { ProductCard } from "@/components/ProductCard";
import type { ProductGridProps } from "@/types";

export function ProductGrid({ products, onAdd, onShow }: ProductGridProps) {
	return (
		<div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
			{products.map((product) => (
				<div className="min-w-0" key={product.id}>
					<ProductCard onAdd={onAdd} onShow={onShow} product={product} />
				</div>
			))}
		</div>
	);
}
