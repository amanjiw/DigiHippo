import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const formatPrice = (
	price: string | number,
	options: {
		currency?: "USD" | "EUR" | "GBP" | "BDT";
		notation?: Intl.NumberFormatOptions["notation"];
	} = {}
) => {
	const { currency = "USD", notation = "compact" } = options;

	const numericPrice =
		typeof price === "string" ? Number.parseFloat(price) : price;

	return Intl.NumberFormat("en-US", {
		style: "currency",
		currency,
		notation,
		maximumFractionDigits: 2,
	}).format(numericPrice);
};
