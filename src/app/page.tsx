import Image from "next/image";
import MaxWithWrapper from "@/components/MaxWithWrapper";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
	return (
		<MaxWithWrapper className="">
			<div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
				<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
					your marketplace for high-quality{" "}
					<span className="text-blue-600">digital assets</span>
				</h1>
				<p className="mt-6 text-lg max-w-prose text-muted-foreground">
					welcome to DigiHippo. Evry assets on you platform is
					verified by our team to ensure our highest quality
					standarts.{" "}
				</p>
				<div className="flex flex-col sm:flex-row">
					<Link href="/products" className={buttonVariants()}>
						Browse Trending
					</Link>
				</div>
			</div>
		</MaxWithWrapper>
	);
}
