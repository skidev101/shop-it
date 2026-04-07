import { Header } from "@/components/shared/header";
import { Footer } from "@/components/footer";

export default function StorefrontLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
