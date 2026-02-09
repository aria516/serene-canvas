import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Photos", path: "/gallery" },
  { label: "Journal", path: "/journal" },
  { label: "About", path: "/about" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Increased threshold to avoid flickering at the very top
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        // Increased duration to 1000ms for a very slow, liquid transition
        "fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ease-in-out border-b",
        isScrolled
          ? "bg-white/5 backdrop-blur-3xl border-white/5 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.12)] supports-[backdrop-filter]:bg-black/10"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity"
        >
          EYES OF ASIA
        </Link>

        <div className="flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-white",
                  isActive ? "text-white" : "text-neutral-400"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
