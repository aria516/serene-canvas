import { Link } from "react-router-dom";
import { Instagram, Twitter, Linkedin, Mail, ArrowUp } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@lenscraft.com", label: "Email" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-neutral-900/40 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-12">

        {/* Left Side: Call to Action */}
        <div className="max-w-2xl w-full md:w-auto mb-8 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 leading-tight text-neutral-200">
            Let's create something <span className="text-white">timeless.</span>
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center text-lg font-medium border-b border-white/30 pb-1 hover:text-white hover:border-white transition-all text-neutral-400"
          >
            Start a Project
            <ArrowUp className="ml-2 w-4 h-4 rotate-45" />
          </Link>
        </div>

        {/* Right Side: Structured Vertical Group */}
        <div className="flex flex-col items-start md:items-end gap-6 text-neutral-500 text-sm w-full md:w-auto">

          {/* Socials & Phrase Group */}
          <div className="flex flex-col items-start md:items-end gap-2">
            <div className="flex gap-5 items-center">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <p className="text-xs text-neutral-600 font-medium tracking-wide">Made with love. From my morning to your night</p>
          </div>

          {/* Copyright & Back to top Row */}
          <div className="flex items-center gap-6 md:gap-8 pt-2 md:pt-4 border-t border-white/5 md:border-none w-full md:w-auto justify-between md:justify-end">
            <p className="whitespace-nowrap">© {new Date().getFullYear()} Eyes Of Asia.</p>

            <button onClick={scrollToTop} className="hover:text-white transition-colors flex items-center gap-2 whitespace-nowrap group">
              Back to top <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
