import { useState, useRef } from "react";
import { photos, categories, type Category, type Photo } from "@/lib/images";
import { Lightbox } from "./Lightbox";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface GalleryProps {
  showFilters?: boolean;
  limit?: number;
}

const PhotoCard = ({
  photo,
  index,
  spanClass,
  onClick,
}: {
  photo: Photo;
  index: number;
  spanClass: string;
  onClick: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  // Apple-style scroll parallax:
  // Card opacity and scale responds subtely to scroll position
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax for the image inside the card
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  // Subtle entry animation
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [0.95, 1]);

  const springScale = useSpring(scale, { stiffness: 50, damping: 20 });
  const springOpacity = useSpring(opacity, { stiffness: 50, damping: 20 });

  return (
    <motion.div
      ref={ref}
      style={{
        scale: springScale,
        // Removed opacity: springOpacity to prevent 'fading from black'
      }}
      className={cn(
        "relative group overflow-hidden rounded-[2rem] bg-neutral-900 shadow-2xl cursor-pointer will-change-transform z-0",
        spanClass
      )}
      onClick={onClick}
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.div
          style={{ y }}
          className="w-full h-[120%] -mt-[10%]"
        >
          <img
            src={photo.src}
            alt={photo.title}
            className="w-full h-full object-cover" // Removed hover scale
            loading="lazy"
          />
        </motion.div>
      </div>

      {/* Apple-style gradient overlay - subtle bottom darkening */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80" />


    </motion.div>
  );
};

export function Gallery({ showFilters = true, limit }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const filteredPhotos = limit ? photos.slice(0, limit) : photos;

  const handleNext = () => {
    if (!selectedPhoto) return;
    const currentIndex = filteredPhotos.findIndex(
      (p) => p.id === selectedPhoto.id
    );
    const nextIndex = (currentIndex + 1) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[nextIndex]);
  };

  const handlePrevious = () => {
    if (!selectedPhoto) return;
    const currentIndex = filteredPhotos.findIndex(
      (p) => p.id === selectedPhoto.id
    );
    const prevIndex =
      (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setSelectedPhoto(filteredPhotos[prevIndex]);
  };

  return (
    <section id="gallery" className="py-24 px-4 md:px-8 w-full bg-black min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 w-full max-w-[2000px] mx-auto">
        {filteredPhotos.map((photo, index) => {
          const pattern = index % 5;
          // Rhythm: Full (6) -> Half (3) -> Half (3) -> Third (2) -> Third (2)
          let spanClass = "md:col-span-2 aspect-[3/4]";

          if (pattern === 0) {
            spanClass = "md:col-span-6 aspect-[16/9] md:aspect-[21/9]";
          } else if (pattern === 1) {
            spanClass = "md:col-span-4 aspect-[16/10]";
          } else if (pattern === 2) {
            spanClass = "md:col-span-2 aspect-[3/4]";
          } else if (pattern === 3 || pattern === 4) {
            spanClass = "md:col-span-3 aspect-[4/3]";
          }

          return (
            <PhotoCard
              key={photo.id}
              photo={photo}
              index={index}
              spanClass={spanClass}
              onClick={() => setSelectedPhoto(photo)}
            />
          );
        })}
      </div>

      <Lightbox
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </section>
  );
}
