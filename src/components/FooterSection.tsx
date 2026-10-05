export function FooterSection() {
	return (
		<footer className="mt-14 flex flex-col gap-3 border-[#ededed] border-t py-8 text-center font-light text-xs sm:flex-row sm:items-center sm:justify-between sm:text-left">
			<a className="font-semibold text-sm" href="#top">
				House Staff
			</a>
			<p>All rights reserved © {new Date().getFullYear()}</p>
		</footer>
	);
}
