import Banner from "@/components/Banner";
import CTA from "@/components/CTA";
import FeaturedProducts from "@/components/FeaturedProducts";
import TestSanity from "@/components/TestSanity";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="">
        <Banner/>
        <TestSanity/>
        <FeaturedProducts/>
        <CTA/>
        
      </main>
    </div>
  );
}
