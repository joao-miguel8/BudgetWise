import Nav from "@/components/nav/Nav";
import Header from "./components/header/Header";
import { useState } from "react";

function App() {
	const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

	const handleCloseNavMenu = () => {
		setIsNavMenuOpen(false);
	};

	const handleOpenNavMenu = () => {
		setIsNavMenuOpen(true);
	};

	return (
		<>
			<Header handleOpenNavMenu={handleOpenNavMenu} />
			<Nav isNavMenuOpen={isNavMenuOpen} handleCloseNavMenu={handleCloseNavMenu} />
		</>
	);
}

export default App;
