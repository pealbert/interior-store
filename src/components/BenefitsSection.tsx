const benefits = [
	{
		number: "01",
		title: "Considered design",
		text: "Clean forms that sit comfortably in changing interiors.",
	},
	{
		number: "02",
		title: "Small collection",
		text: "Fewer choices, carefully selected for everyday use.",
	},
	{
		number: "03",
		title: "Student friendly",
		text: "Straightforward pieces and support for first homes.",
	},
];

export function BenefitsSection() {
	return (
		<section aria-labelledby="benefits-heading" className="py-16 sm:py-20">
			<h2 className="sr-only" id="benefits-heading">
				Why choose House Staff
			</h2>
			<div className="grid gap-8 sm:grid-cols-3 sm:gap-6">
				{benefits.map((benefit) => (
					<article className="border-[#ddd] border-t pt-5" key={benefit.number}>
						<span className="font-medium text-accent text-xs">
							{benefit.number}
						</span>
						<h3 className="mt-4 font-semibold text-lg">{benefit.title}</h3>
						<p className="mt-2 text-[#777] text-sm leading-6">{benefit.text}</p>
					</article>
				))}
			</div>
		</section>
	);
}
