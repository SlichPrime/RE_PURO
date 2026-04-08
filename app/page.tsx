import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Banner from "@/components/Banner";
import Story from "@/components/Story";
import Bestseller from "@/components/Bestseller";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Banner />
      <Story />
      <Bestseller />
      <Menu />
      <Footer />
    </main>
  );
}