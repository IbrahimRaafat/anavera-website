import { NavBar } from "@/components/organisms/NavBar";
import { Footer } from "@/components/organisms/Footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <NavBar />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </>
  );
}
