import { Button } from "@/components/ui/button";
import ScrollingFields from "./ScrollingFields";
import { Eczar } from '@next/font/google';

const playwrite = Eczar({
  weight: ['400', '700'],
  subsets: ['latin'],
});
export function Hero() {
  return (
    <section className={`py-20 text-center ${playwrite.className}`}>
      <h1 className={`text-4xl font-bold mb-4 `}>UNIVERSE OF IDEAS</h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Share your groundbreaking ideas and discover innovations across multiple domains.
        Connect, collaborate, and turn ideas into reality together.
      </p>
      <ScrollingFields />
      <Button size="lg" className="mt-3 text-lg bg-[#7d57e8]">Start Exploring</Button>
    </section>
  );
}
