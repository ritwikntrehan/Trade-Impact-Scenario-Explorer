import Link from "next/link";

const navItems = [
  { href: "/explorer", label: "Explorer" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/request-analysis", label: "Request Analysis" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight text-ink">
          Trade Impact / Tariff Scenario Explorer
        </Link>
        <nav className="flex gap-5 text-sm text-steel">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-accent">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
