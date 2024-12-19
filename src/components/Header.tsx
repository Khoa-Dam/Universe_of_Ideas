import Link from "next/link";
// import { MobileMenu } from "./mobile-menu";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Universe Ideas
        </Link>
        <nav className="space-x-4">
          <Link href="/explore" className="text-sm font-medium hover:underline outline-2">
            Explore
          </Link>
          <Link href="/about" className="text-sm font-medium hover:underline">
            About
          </Link>
          <Button variant="outline">Connect Wallet</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
