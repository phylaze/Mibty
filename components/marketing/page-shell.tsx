import { Header } from "@/components/marketing/header";
import { Footer } from "@/components/marketing/footer";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
