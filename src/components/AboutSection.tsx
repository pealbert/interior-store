import house from "@/assets/images/house.jpeg";

export function AboutSection() {
	return (
		<section
			className="mt-16 grid scroll-mt-24 items-center gap-8 border-[#ededed] border-y py-16 sm:mt-20 sm:scroll-mt-20 sm:py-20 lg:grid-cols-2 lg:gap-16"
			id="about"
		>
			<div className="overflow-hidden rounded-xl bg-[#f5f5f5]">
				<img
					alt="A compact wooden house surrounded by trees"
					className="aspect-[4/3] w-full object-cover"
					src={house}
				/>
			</div>
			<div className="max-w-xl">
				<p className="mb-2 font-medium text-accent text-xs uppercase tracking-[0.2em]">
					About House Staff
				</p>
				<h2 className="font-semibold text-2xl leading-tight sm:text-3xl">
					Furniture should make daily life feel lighter.
				</h2>
				<p className="mt-5 text-[#666] text-sm leading-7 sm:text-base">
					We focus on uncomplicated forms, comfortable materials, and pieces
					that work in compact homes. Every item is selected to be useful long
					after trends move on.
				</p>
				<div className="mt-8 grid grid-cols-3 gap-4">
					<div>
						<strong className="block text-xl sm:text-2xl">5+</strong>
						<span className="text-[#777] text-xs sm:text-sm">Core pieces</span>
					</div>
					<div>
						<strong className="block text-xl sm:text-2xl">100%</strong>
						<span className="text-[#777] text-xs sm:text-sm">Curated</span>
					</div>
					<div>
						<strong className="block text-xl sm:text-2xl">24h</strong>
						<span className="text-[#777] text-xs sm:text-sm">Support</span>
					</div>
				</div>
			</div>
		</section>
	);
}
