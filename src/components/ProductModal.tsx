import { useEffect } from "react";
import type { ProductModalProps } from "@/types";

export function ProductModal({ product, onAdd, onClose }: ProductModalProps) {
	useEffect(() => {
		const closeOnEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") onClose();
		};
		window.addEventListener("keydown", closeOnEscape);
		return () => window.removeEventListener("keydown", closeOnEscape);
	}, [onClose]);

	return (
		<div className="fixed inset-0 z-100 overflow-auto bg-black/80 p-4 sm:p-5">
			<button
				aria-label="Close product details"
				className="fixed inset-0 cursor-default"
				onClick={onClose}
				type="button"
			/>
			<article
				aria-label={product.title}
				aria-modal="true"
				className="relative z-1 mx-auto my-[5vh] w-full max-w-md rounded-xl bg-white px-5 py-8 text-left sm:my-[10vh] sm:px-7.5 sm:py-10"
				role="dialog"
			>
				<button
					aria-label="Close product details"
					className="absolute top-3 right-4 text-2xl"
					onClick={onClose}
					type="button"
				>
					×
				</button>
				<img
					alt={product.title}
					className="aspect-[4/3] w-full rounded-lg object-cover"
					src={product.image}
				/>
				<h2 className="mx-5 mt-2.5 font-semibold text-[#333] text-xl">
					{product.title}
				</h2>
				<p className="mx-5 mt-2.5 text-[#333] text-sm">{product.description}</p>
				<b className="mx-5 mt-2.5 inline-block text-[#5fa36a]">
					{product.price.toFixed(2)}$
				</b>
				<button
					aria-label={`Add ${product.title} to cart`}
					className="absolute right-5 bottom-5 h-9 w-9 rounded-full bg-[#ca5252] font-semibold text-white"
					onClick={() => onAdd(product)}
					type="button"
				>
					+
				</button>
			</article>
		</div>
	);
}
