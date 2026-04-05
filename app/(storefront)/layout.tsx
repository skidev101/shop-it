import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function StorefrontLayout({ children }) {
	return (
		<>
			<Header /> {/* Your big, global nav */}
			<main>{children}</main>
			<Footer />
		</>
	);
}
