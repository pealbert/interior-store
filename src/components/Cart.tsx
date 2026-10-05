import { Order } from "@/components/Order";
import type { CartProps } from "@/types";

export function Cart({ orders, onDeleteOrder, onClose }: CartProps) {
	const total = orders.reduce((sum, order) => sum + order.price, 0);

	return (
		<div className="absolute top-full right-4 z-90 mt-2 max-h-[calc(100dvh-6rem)] w-[calc(100vw-2rem)] max-w-72 overflow-y-auto rounded-lg bg-[#fafafa] px-5 pt-5 shadow-[4px_5px_20px_-7px_#606060] sm:right-6 sm:max-h-[calc(100dvh-5rem)] lg:right-10">
			<button className="sr-only" onClick={onClose} type="button">
				Close cart
			</button>
			{orders.length > 0 ? (
				<>
					{orders.map((order) => (
						<Order key={order.id} onDelete={onDeleteOrder} order={order} />
					))}
					<p className="clear-both mb-5 text-left font-semibold text-xl">
						Total:{" "}
						{total.toLocaleString(undefined, { minimumFractionDigits: 2 })}$
					</p>
				</>
			) : (
				<h2 className="mb-5 text-left font-semibold text-xl">No Staff</h2>
			)}
		</div>
	);
}
