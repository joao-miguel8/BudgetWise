import { useState } from "react";
import Dashboard from "./layouts/desktop/dashboard/Dashboard";
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import useMediaQuery from "./hook/useMediaQuery";

function App() {
	const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

	const handleCloseNavMenu = () => {
		setIsNavMenuOpen(false);
	};

	const handleOpenNavMenu = () => {
		setIsNavMenuOpen(true);
	};

	const isDesktop = useMediaQuery("(min-width: 768px)");
	return (
		<>
			{!isDesktop ? (
				<>
					<Header handleOpenNavMenu={handleOpenNavMenu} />
					<Nav handleCloseNavMenu={handleCloseNavMenu} isNavMenuOpen={isNavMenuOpen} />
				</>
			) : (
				<Dashboard />
			)}
		</>
	);
}

export default App;
