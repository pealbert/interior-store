export function ContactSection() {
	return (
		<section
			className="flex scroll-mt-24 flex-col items-start justify-between gap-8 rounded-xl bg-[#f3f3f1] px-5 py-9 sm:scroll-mt-20 sm:px-10 sm:py-12 md:flex-row md:items-center"
			id="contacts"
		>
			<div className="max-w-xl">
				<p className="mb-2 font-medium text-accent text-xs uppercase tracking-[0.2em]">
					Need a hand?
				</p>
				<h2 className="font-semibold text-2xl sm:text-3xl">
					Let’s find the right piece for your space.
				</h2>
				<p className="mt-3 text-[#666] text-sm leading-6">
					Tell us about your room and we’ll help you keep it simple.
				</p>
			</div>
			<a
				className="shrink-0 rounded-full bg-[#222] px-6 py-3 font-medium text-sm text-white transition hover:bg-accent"
				href="mailto:hello@housestaff.example"
			>
				Contact us
			</a>
		</section>
	);
}
