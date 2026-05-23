import { HeroScroll } from "@/components/sections/HeroScroll";
import { AboutSection } from "@/components/sections/AboutSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ManufacturingSection } from "@/components/sections/ManufacturingSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { Navbar } from "@/components/ui/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-accent-orange selection:text-foreground overflow-x-clip">
      <Navbar />
      <HeroScroll />
      <StatsSection />
      <ManufacturingSection />
      <ClientsSection />
      <AboutSection />
      <ProductsSection />
      <FooterSection />
    </main>
  );
}
