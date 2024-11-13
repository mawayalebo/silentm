import Banner from "@/components/Banner";
import CTA from "@/components/CTA";
import FeaturedProducts from "@/components/FeaturedProducts";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="">
        <Banner/>
        <FeaturedProducts/>
        <CTA/>
        
      </main>
    </div>
  );
}
