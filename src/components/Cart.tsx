"use client";
import { formatPrice } from "@/lib/utils";
import { Separator } from "./ui/separator";

import {
	SheetTrigger,
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetFooter,
} from "./ui/sheet";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

// ## =>

const Cart = () => {
	const itemCount = 10;
	const fee = 1;

	return (
		<Sheet>
			<SheetTrigger className="group -m-2 flex items-center p-2">
				<ShoppingCart
					aria-hidden="true"
					className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
				/>
				<span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
					0
				</span>
			</SheetTrigger>
			<SheetContent className="w-full flex flex-col pr-0 sm:max-w-lg">
				<SheetHeader className="space-y-2.5 pr-6">
					<SheetTitle>Cart(0)</SheetTitle>
				</SheetHeader>
				{itemCount > 0 ? (
					<>
						<div className="w-full flex flex-col pr-6">
							{/* TODO: cart logic */}
							cart items
						</div>
						<div className="space-y-4 pr-6">
							<Separator />
							<div className="space-y-1.5 text-sm">
								<div className="flex">
									<span className="flex-1">Shipping</span>
									<span>Free</span>
								</div>
								<div className="flex">
									<span className="flex-1">
										Transactions Fee
									</span>
									<span> {formatPrice(fee)} </span>
								</div>
								<div className="flex">
									<span className="flex-1">Total</span>
									<span> {formatPrice(fee)} </span>
								</div>
							</div>
							<SheetFooter>
								<SheetTrigger asChild>
									<Link
										href="/cart"
										className={buttonVariants({
											className: "w-full",
										})}
									>
										Continue to Checkout
									</Link>
								</SheetTrigger>
							</SheetFooter>
						</div>
					</>
				) : (
					<div className=""></div>
				)}
			</SheetContent>
		</Sheet>
	);
};

export default Cart;
