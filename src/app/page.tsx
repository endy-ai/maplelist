import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedStartups from "@/components/FeaturedStartups";
import Categories from "@/components/Categories";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedStartups />
        <Categories />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
