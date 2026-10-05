import { useState } from "react";
import interior from "@/assets/images/interior.webp";
import { Cart } from "@/components/Cart";
import type { HeaderSectionProps } from "@/types";

export function HeaderSection({ orders, onDeleteOrder }: HeaderSectionProps) {
	const [cartOpen, setCartOpen] = useState(false);

	return (
		<header className="relative">
			<div className="fixed inset-x-0 top-0 z-80 border-[#ededed] border-b bg-white/95 shadow-[0_8px_30px_-28px_rgba(0,0,0,0.55)] backdrop-blur-md">
				<div className="relative mx-auto flex w-full min-w-0 max-w-360 flex-wrap items-center px-4 py-3 sm:flex-nowrap sm:px-6 lg:px-10">
					<a className="font-semibold text-lg sm:text-xl" href="#top">
						House Staff
					</a>
					<button
						aria-expanded={cartOpen}
						aria-label="Open shopping cart"
						className={`ml-auto grid size-9 cursor-pointer place-items-center rounded-full transition hover:bg-[#f5f5f5] hover:text-accent ${cartOpen ? "bg-[#f5f5f5] text-accent" : ""}`}
						onClick={() => setCartOpen((isOpen) => !isOpen)}
						type="button"
					>
						<svg
							aria-hidden="true"
							fill="currentColor"
							height="14"
							viewBox="0 0 24 24"
							width="14"
						>
							<path d="M7 4H2V2h6l1 2h13l-3 9H9L7 4Zm3 11h9v2h-9v-2Zm0 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
						</svg>
					</button>
					<nav
						aria-label="Main navigation"
						className="mt-2 w-full min-w-0 border-[#ededed] border-t pt-2 sm:mt-0 sm:ml-3 sm:w-auto sm:border-0 sm:pt-0"
					>
						<ul className="flex items-center justify-between gap-3 font-light text-xs sm:justify-start sm:gap-6 sm:text-sm">
							<li>
								<a className="transition-opacity hover:opacity-50" href="#shop">
									Shop
								</a>
							</li>
							<li>
								<a
									className="transition-opacity hover:opacity-50"
									href="#about"
								>
									About Us
								</a>
							</li>
							<li>
								<a
									className="transition-opacity hover:opacity-50"
									href="#contacts"
								>
									Contacts
								</a>
							</li>
						</ul>
					</nav>
					{cartOpen && (
						<Cart
							onClose={() => setCartOpen(false)}
							onDeleteOrder={onDeleteOrder}
							orders={orders}
						/>
					)}
				</div>
			</div>

			<section
				className="relative mt-24 mb-14 min-h-90 overflow-hidden rounded-sm bg-[#777] bg-center bg-cover bg-blend-multiply sm:mt-20 sm:min-h-105 lg:min-h-125"
				style={{ backgroundImage: `url(${interior})` }}
			>
				<div className="absolute inset-y-0 left-[7%] flex max-w-[75%] flex-col justify-center text-left text-white sm:max-w-96">
					<h1 className="font-semibold text-3xl leading-tight sm:text-4xl lg:text-[40px]">
						Best Staff For Your House
					</h1>
					<p className="mt-6 font-light text-sm sm:mt-10 sm:ml-3 sm:text-xl">
						Free For Students!
					</p>
				</div>
			</section>
		</header>
	);
}
