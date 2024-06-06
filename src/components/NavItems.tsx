"use client";

import { PRODUCT_CATEGORYS } from "@/config";
import { useMemo, useState } from "react";
import NavItem from "./NavItem";

const NavItems = () => {
	const [activeIndex, setActiveIndex] = useState<null | number>(null);

	const isAnyOpen = useMemo(() => activeIndex !== null, [activeIndex]);

	return (
		<div className="flex gap-4 h-full">
			{PRODUCT_CATEGORYS.map((category, index) => {
				const handleOpen = () => {
					if (activeIndex === index) {
						setActiveIndex(null);
					} else {
						setActiveIndex(index);
					}
				};

				const isOpen = index === activeIndex;

				return (
					<NavItem
						key={""}
						category={category}
						handleOpen={handleOpen}
						isOpen={isOpen}
						isAnyOpen={isAnyOpen}
					/>
				);
			})}
		</div>
	);
};

export default NavItems;
