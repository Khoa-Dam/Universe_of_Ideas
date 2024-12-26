import Link from "next/link";
// import { MobileMenu } from "./mobile-menu";
import { Button } from "./ui/button";

import { Eczar } from "next/font/google";
import { ConnectButton } from '@rainbow-me/rainbowkit';

const playwrite = Eczar({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const Header = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className={`text-2xl font-bold ${playwrite.className}`}>
          Universe Ideas
        </Link>
        <nav className="space-x-4 flex ">
          <Link href="/explore" className="text-sm font-medium hover:underline outline-2">
            <Button className="bg-indigo-900">Explore</Button>
          </Link>
          <Link href="/about" className="text-sm font-medium hover:underline">
            <Button className="bg-indigo-900">About</Button>
          </Link>
          <ConnectButton label="Connect Wallet" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
