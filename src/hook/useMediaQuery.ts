import { useEffect, useState } from "react";

export default function useMediaQuery(query: string) {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		// create media query object
		const media = window.matchMedia(query);
		// check if window viewport matches boolean is === to matches trigger viewport
		if (media.matches !== matches) {
			// enable true
			setMatches(media.matches);
		}
		const mediaQueryListener = () => setMatches(media.matches);
		window.addEventListener("resize", mediaQueryListener);
		return () => window.removeEventListener("resize", mediaQueryListener);
	}, [matches, query]);

	return matches;
}
