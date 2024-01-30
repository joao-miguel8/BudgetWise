import classNames from "classnames";
import { GrTransaction } from "react-icons/gr";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { PiTarget } from "react-icons/pi";
import { IoCardOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import type { NavItemType } from "./types/NavItemType";

function Nav({ handleCloseNavMenu, isNavMenuOpen }: { handleCloseNavMenu: () => void; isNavMenuOpen: boolean }) {
	const navItems: NavItemType[] = [
		{ icon: <MdOutlineSpaceDashboard />, name: "Overview" },
		{ icon: <GrTransaction />, name: "Transaction" },
		{ icon: <PiTarget />, name: "Plan" },
		{ icon: <IoCardOutline />, name: "Budget" },
	];

	return (
		<div className={classNames("h-screen w-full min-[450px]:w-[240px] z-[60] fixed top-0 bg-[rgb(249,249,249)]", isNavMenuOpen ? "translate-x-0" : "-translate-x-full", "duration-300")}>
			<nav className="mt-16">
				<button onClick={() => handleCloseNavMenu()} className="absolute top-2 left-4">
					<IoMdClose size={"1.6rem"} />
				</button>
				<ul className="flex flex-col gap-4">
					{navItems.map((item: NavItemType) => {
						return (
							<li key={item.name} className="">
								<button className="px-6 py-2 w-full flex items-center gap-4 text-[#767676] ">
									{item.icon}
									<span className="text-16">{item.name}</span>
								</button>
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
}

export default Nav;
