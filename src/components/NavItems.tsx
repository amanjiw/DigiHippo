"use client";

import { PRODUCT_CATEGORYS } from "@/config";
import { useEffect, useMemo, useRef, useState } from "react";
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

const NavItems = () => {
	const [activeIndex, setActiveIndex] = useState<null | number>(null);

	useEffect(() => {
		const handler = (event: KeyboardEvent) => {
			if (event.key === "Escape") setActiveIndex(null);
		};

		document.addEventListener("keydown", handler);

		return () => document.removeEventListener("keydown", handler);
	}, []);

	const isAnyOpen = useMemo(() => activeIndex !== null, [activeIndex]);
	const navRef = useRef<HTMLDivElement | null>(null);
	useOnClickOutside(navRef, () => setActiveIndex(null));

	return (
		<div className="flex gap-4 h-full" ref={navRef}>
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
