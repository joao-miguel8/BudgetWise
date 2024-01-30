import { useState } from "react";
import Dashboard from "./layouts/desktop/dashboard/Dashboard";

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
			<Dashboard />
		</>
	);
}

export default App;
