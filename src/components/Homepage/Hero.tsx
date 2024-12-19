import Button from "./Button";
import ScrollingFields from "./ScrollingFields";
import { Eczar } from '@next/font/google';
import Link from "next/link";

const playwrite = Eczar({
  weight: ['400', '700'],
  subsets: ['latin'],
});
export function Hero() {
  return (
    <section className={`py-20 text-center ${playwrite.className} bg-[#131826]`}>
      <h1 className={`text-4xl font-bold mb-4 `}>UNIVERSE OF IDEAS</h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Share your groundbreaking ideas and discover innovations across multiple domains.
        Connect, collaborate, and turn ideas into reality together.
      </p>
      <ScrollingFields />
      <Link href='/Blockchain'>
        <Button>
        </Button>
      </Link>
    </section>
  );
}
