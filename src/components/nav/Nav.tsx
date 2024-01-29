import { GrTransaction } from "react-icons/gr";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { PiTarget } from "react-icons/pi";
import { IoCardOutline } from "react-icons/io5";
import type { NavItemType } from "./types/NavItemType";

function Nav() {
	const navItems: NavItemType[] = [
		{ icon: <MdOutlineSpaceDashboard />, name: "Overview" },
		{ icon: <GrTransaction />, name: "Transaction" },
		{ icon: <PiTarget />, name: "Plan" },
		{ icon: <IoCardOutline />, name: "Budget" },
	];

	return (
		<div className="h-screen w-full min-[450px]:w-[240px] z-[60] fixed top-0 bg-[rgb(249,249,249)] ">
			<nav className="mt-10">
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
