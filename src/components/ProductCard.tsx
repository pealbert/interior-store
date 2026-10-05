import type { ProductCardProps } from "@/types";

export function ProductCard({ product, onAdd, onShow }: ProductCardProps) {
	return (
		<article className="group relative h-full overflow-hidden rounded-xl border border-[#ededed] bg-white pb-5 text-left transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_-30px_rgba(0,0,0,0.45)]">
			<button
				className="block w-full cursor-pointer overflow-hidden bg-[#f3f3f3]"
				onClick={() => onShow(product)}
				type="button"
			>
				<img
					alt={product.title}
					className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
					src={product.image}
				/>
			</button>
			<h2 className="mx-5 mt-5 font-semibold text-[#333] text-lg">
				{product.title}
			</h2>
			<p className="mx-5 mt-2 mb-8 line-clamp-2 text-[#666] text-sm leading-relaxed">
				{product.description}
			</p>
			<b className="mx-5 font-medium text-sm text-success">
				{product.price.toFixed(2)}$
			</b>
			<button
				aria-label={`Add ${product.title} to cart`}
				className="absolute right-5 bottom-4 grid size-9 cursor-pointer place-items-center rounded-full border border-accent bg-accent font-semibold text-lg text-white transition hover:bg-white hover:text-accent active:scale-95"
				onClick={() => onAdd(product)}
				type="button"
			>
				+
			</button>
		</article>
	);
}
