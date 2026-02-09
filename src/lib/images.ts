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

// Photos from local /public/Photos directory
export const photos: Photo[] = [
  {
    id: "1",
    src: "/Photos/20200317-DSC03587-2.jpg",
    title: "Untitled",
    category: "Landscapes",
    aspectRatio: "landscape",
  },
  {
    id: "2",
    src: "/Photos/20200317-DSC03588-2.jpg",
    title: "Untitled",
    category: "Portraits",
    aspectRatio: "portrait",
  },
  {
    id: "3",
    src: "/Photos/20200317-DSC03680.jpg",
    title: "Untitled",
    category: "Street",
    aspectRatio: "landscape",
  },
  {
    id: "4",
    src: "/Photos/20200317-DSC03691.jpg",
    title: "Untitled",
    category: "Architecture",
    aspectRatio: "portrait",
  },
  {
    id: "5",
    src: "/Photos/20200317-DSC03695.jpg",
    title: "Untitled",
    category: "Landscapes",
    aspectRatio: "landscape",
  },
  {
    id: "6",
    src: "/Photos/20200317-DSC03699.jpg",
    title: "Untitled",
    category: "Portraits",
    aspectRatio: "square",
  },
  {
    id: "7",
    src: "/Photos/20200317-DSC03702.jpg",
    title: "Untitled",
    category: "Events",
    aspectRatio: "landscape",
  },
  {
    id: "8",
    src: "/Photos/20200317-DSC03713.jpg",
    title: "Untitled",
    category: "Street",
    aspectRatio: "portrait",
  },
  {
    id: "9",
    src: "/Photos/20200317-DSC03714.jpg",
    title: "Untitled",
    category: "Architecture",
    aspectRatio: "landscape",
  },
  {
    id: "10",
    src: "/Photos/20200317-DSC03741.jpg",
    title: "Untitled",
    category: "Landscapes",
    aspectRatio: "portrait",
  },
  {
    id: "11",
    src: "/Photos/DSC03152-1.jpg",
    title: "Untitled",
    category: "Portraits",
    aspectRatio: "square",
  },
  {
    id: "12",
    src: "/Photos/DSC03155-2.jpg",
    title: "Untitled",
    category: "Events",
    aspectRatio: "landscape",
  },
  {
    id: "13",
    src: "/Photos/DSC03169-3.jpg",
    title: "Untitled",
    category: "Street",
    aspectRatio: "landscape",
  },
  {
    id: "14",
    src: "/Photos/DSC03184-4.jpg",
    title: "Untitled",
    category: "Architecture",
    aspectRatio: "portrait",
  },
  {
    id: "15",
    src: "/Photos/DSC03199-5.jpg",
    title: "Untitled",
    category: "Landscapes",
    aspectRatio: "landscape",
  },
  {
    id: "16",
    src: "/Photos/photos-1.jpg",
    title: "Untitled",
    category: "Portraits",
    aspectRatio: "portrait",
  },
  {
    id: "17",
    src: "/Photos/photos-2.jpg",
    title: "Untitled",
    category: "Events",
    aspectRatio: "square",
  },
  {
    id: "18",
    src: "/Photos/photos-3.jpg",
    title: "Untitled",
    category: "Street",
    aspectRatio: "landscape",
  },
  {
    id: "19",
    src: "/Photos/photos-4.jpg",
    title: "Untitled",
    category: "Architecture",
    aspectRatio: "landscape",
  },
  {
    id: "20",
    src: "/Photos/photos-5.jpg",
    title: "Untitled",
    category: "Landscapes",
    aspectRatio: "portrait",
  },
  {
    id: "21",
    src: "/Photos/photos-6.jpg",
    title: "Untitled",
    category: "Portraits",
    aspectRatio: "square",
  },
  {
    id: "22",
    src: "/Photos/photos-7.jpg",
    title: "Untitled",
    category: "Events",
    aspectRatio: "landscape",
  },
  {
    id: "23",
    src: "/Photos/photos-8.jpg",
    title: "Untitled",
    category: "Street",
    aspectRatio: "landscape",
  },
];

export const heroImage = {
  src: "/Photos/photos-1.jpg", // Using one of the local photos for hero if needed
  title: "Serenity",
  subtitle: "Finding beauty in the stillness of the moment",
};
