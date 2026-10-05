import { categories } from "@/data/categories";
import type { CategoriesProps } from "@/types";

export function Categories({ activeCategory, onSelect }: CategoriesProps) {
	return (
		<fieldset
			aria-label="Product categories"
			className="mb-7 flex w-full min-w-0 max-w-full gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible"
		>
			{categories.map((category) => (
				<button
					aria-pressed={activeCategory === category.key}
					className={`shrink-0 cursor-pointer rounded-full border px-5 py-2 text-sm transition hover:border-[#c0c0c0] ${activeCategory === category.key ? "border-[#bbb] bg-[#e7e7e7]" : "border-transparent bg-[#f5f5f5]"}`}
					key={category.key}
					onClick={() => onSelect(category.key)}
					type="button"
				>
					{category.name}
				</button>
			))}
		</fieldset>
	);
}
