import type { OrderProps } from "@/types";

export function Order({ order, onDelete }: OrderProps) {
	return (
		<div className="relative mb-5 min-h-17.5 w-full pr-7 text-left">
			<img
				alt={order.title}
				className="float-left mr-5 h-17.5 w-17.5 object-cover"
				src={order.image}
			/>
			<h2 className="mb-2 font-semibold text-lg">{order.title}</h2>
			<p className="font-semibold text-[#797979]">{order.price.toFixed(2)}$</p>
			<button
				aria-label={`Remove ${order.title} from cart`}
				className="absolute top-5 right-0 cursor-pointer text-accent transition hover:scale-125 hover:text-[#d83030]"
				onClick={() => onDelete(order.id)}
				type="button"
			>
				<svg
					aria-hidden="true"
					fill="currentColor"
					height="15"
					viewBox="0 0 24 24"
					width="15"
				>
					<path d="M9 3h6l1 2h5v2H3V5h5l1-2Zm-4 6h14l-1 12H6L5 9Zm4 2v8h2v-8H9Zm4 0v8h2v-8h-2Z" />
				</svg>
			</button>
		</div>
	);
}
