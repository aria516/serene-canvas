import { heroImage } from "@/lib/images";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToGallery = () => {
    const gallery = document.getElementById("gallery");
    gallery?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage.src}
          alt={heroImage.title}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4 animate-fade-up">
          {heroImage.title}
        </h1>
        <p
          className="text-lg md:text-xl text-white/80 font-light tracking-wider animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          {heroImage.subtitle}
        </p>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToGallery}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/70 hover:text-primary transition-colors animate-bounce"
          aria-label="Scroll to gallery"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}
