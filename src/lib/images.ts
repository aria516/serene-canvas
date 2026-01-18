export interface Photo {
  id: string;
  src: string;
  title: string;
  category: string;
  aspectRatio?: "landscape" | "portrait" | "square";
}

export const categories = [
  "All",
  "Portraits",
  "Landscapes",
  "Events",
  "Street",
  "Architecture",
] as const;

export type Category = (typeof categories)[number];

// Placeholder images from Unsplash
export const photos: Photo[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    title: "Mountain Sunrise",
    category: "Landscapes",
    aspectRatio: "landscape",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
    title: "Portrait in Light",
    category: "Portraits",
    aspectRatio: "portrait",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    title: "Wedding Ceremony",
    category: "Events",
    aspectRatio: "landscape",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80",
    title: "City Lights",
    category: "Street",
    aspectRatio: "landscape",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    title: "Modern Building",
    category: "Architecture",
    aspectRatio: "portrait",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    title: "Natural Portrait",
    category: "Portraits",
    aspectRatio: "square",
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    title: "Forest Path",
    category: "Landscapes",
    aspectRatio: "landscape",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
    title: "Reception Dance",
    category: "Events",
    aspectRatio: "landscape",
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
    title: "Urban Rush",
    category: "Street",
    aspectRatio: "landscape",
  },
  {
    id: "10",
    src: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=800&q=80",
    title: "Glass Towers",
    category: "Architecture",
    aspectRatio: "portrait",
  },
  {
    id: "11",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
    title: "Studio Session",
    category: "Portraits",
    aspectRatio: "portrait",
  },
  {
    id: "12",
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
    title: "Misty Mountains",
    category: "Landscapes",
    aspectRatio: "landscape",
  },
];

export const heroImage = {
  src: "https://i.imgur.com/rMs5C4P.jpeg",
  title: "Capturing Moments",
  subtitle: "Photography that tells your story",
};
