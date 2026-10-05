import { Link } from "react-router-dom";

export function NotFound() {
	return (
		<main className="grid min-h-screen place-content-center gap-4 text-center font-montserrat">
			<h1 className="font-semibold text-4xl">Page not found</h1>
			<Link className="text-accent underline" to="/">
				Return home
			</Link>
		</main>
	);
}
