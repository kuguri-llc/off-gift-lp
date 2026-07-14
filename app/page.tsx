import Hero from "@/components/Hero";
import Question from "@/components/Question";
import ThreeActs from "@/components/ThreeActs";
import Products from "@/components/Products";
import SleepBox from "@/components/SleepBox";
import Shiori from "@/components/Shiori";
import Pricing from "@/components/Pricing";
import Scenes from "@/components/Scenes";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Question />
      <ThreeActs />
      <Products />
      <SleepBox />
      <Shiori />
      <Pricing />
      <Scenes />
      <Newsletter />
      <Footer />
    </main>
  );
}
