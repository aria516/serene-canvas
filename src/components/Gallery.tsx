import { useState, useMemo } from "react";
import { photos, categories, type Category, type Photo } from "@/lib/images";
import { Lightbox } from "./Lightbox";
import { cn } from "@/lib/utils";

interface GalleryProps {
  showFilters?: boolean;
  limit?: number;
}

export function Gallery({ showFilters = true, limit }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const filteredPhotos = useMemo(() => {
    const filtered =
      activeCategory === "All"
        ? photos
        : photos.filter((photo) => photo.category === activeCategory);
    return limit ? filtered.slice(0, limit) : filtered;
  }, [activeCategory, limit]);

  const handleImageLoad = (id: string) => {
    setLoadedImages((prev) => new Set(prev).add(id));
  };

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
    <section id="gallery" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-4">
            Featured <span className="text-primary">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            A curated selection of moments captured through the lens
          </p>
        </div>

        {/* Category Filters */}
        {showFilters && (
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className={cn(
                "group cursor-pointer image-card",
                photo.aspectRatio === "portrait" && "sm:row-span-2",
                photo.aspectRatio === "landscape" && "sm:col-span-1"
              )}
              onClick={() => setSelectedPhoto(photo)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={cn(
                  "relative overflow-hidden rounded-lg bg-muted",
                  photo.aspectRatio === "portrait"
                    ? "aspect-[3/4]"
                    : photo.aspectRatio === "square"
                    ? "aspect-square"
                    : "aspect-[4/3]"
                )}
              >
                {/* Skeleton loader */}
                {!loadedImages.has(photo.id) && (
                  <div className="absolute inset-0 bg-muted animate-pulse" />
                )}

                <img
                  src={photo.src}
                  alt={photo.title}
                  className={cn(
                    "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
                    loadedImages.has(photo.id) ? "opacity-100" : "opacity-0"
                  )}
                  loading="lazy"
                  onLoad={() => handleImageLoad(photo.id)}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-white font-medium">{photo.title}</h3>
                  <p className="text-white/70 text-sm">{photo.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </section>
  );
}
