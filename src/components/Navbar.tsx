import React from "react";
import MaxWithWrapper from "./MaxWithWrapper";
import Link from "next/link";
import { Icons } from "./Icons";
import NavItems from "./NavItems";
import { buttonVariants } from "./ui/button";
import Cart from "./Cart";

//  ## =>

const Navbar = () => {
	const user = null;

	return (
		<div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
			<header className="relative bg-white">
				<MaxWithWrapper>
					{" "}
					<div className="border-b border-gray-200">
						<div className="flex h-16 items-center">
							{/* TODO:mobile nav */}
							<div className=" ml-4 flex lg:ml-0">
								<Link href="/">
									<Icons.logo className="h-10 w-10" />
								</Link>
							</div>
							<div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
								<NavItems />
							</div>
							<div className="ml-auto flex items-center">
								<div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
									{user ? null : (
										<Link
											className={buttonVariants({
												variant: "ghost",
											})}
											href="/sign-in"
										>
											Sing in
										</Link>
									)}
									{user ? null : (
										<span
											className="h-6 w-px bg-gray-200"
											aria-hidden="true"
										/>
									)}
									{user ? (
										<p></p>
									) : (
										<Link
											href="sing-up"
											className={buttonVariants({
												variant: "ghost",
											})}
										>
											Create account
										</Link>
									)}
									{user ? (
										<span
											aria-hidden="true"
											className="h-6 w-px bg-gray-200"
										/>
									) : null}

									{user ? null : (
										<div className="flex lg:ml-6">
											<span
												aria-hidden="true"
												className="h-6 w-px bg-gray-200"
											/>
										</div>
									)}

									<div className="ml-4 flow-root lg:ml-6">
										<Cart />
									</div>
								</div>
							</div>
						</div>
					</div>
				</MaxWithWrapper>
			</header>
		</div>
	);
};

export default Navbar;
