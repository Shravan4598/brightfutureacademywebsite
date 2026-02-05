import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import galleryScienceLab from "@/assets/gallery-science-lab.jpg";
import gallerySports from "@/assets/gallery-sports.jpg";
import galleryArt from "@/assets/gallery-art.jpg";
import galleryLibrary from "@/assets/gallery-library.jpg";
import galleryMusic from "@/assets/gallery-music.jpg";
import galleryCafeteria from "@/assets/gallery-cafeteria.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      image: galleryScienceLab,
      title: "Science Laboratory",
      category: "Facilities",
    },
    {
      image: gallerySports,
      title: "Sports & Athletics",
      category: "Activities",
    },
    {
      image: galleryArt,
      title: "Art Studio",
      category: "Creative Arts",
    },
    {
      image: galleryLibrary,
      title: "Library & Learning Center",
      category: "Facilities",
    },
    {
      image: galleryMusic,
      title: "Music & Orchestra",
      category: "Performing Arts",
    },
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;

    if (direction === "prev") {
      setSelectedImage(
        selectedImage === 0 ? galleryItems.length - 1 : selectedImage - 1
      );
    } else {
      setSelectedImage(
        selectedImage === galleryItems.length - 1 ? 0 : selectedImage + 1
      );
    }
  };

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Campus Life
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Explore Our <span className="text-gradient-gold">Campus</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Take a visual tour of our modern facilities, vibrant classrooms, and
            the enriching activities that make Bright Future Academy special.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-card hover:shadow-lg transition-all duration-500"
              onClick={() => openLightbox(index)}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-block px-3 py-1 bg-secondary/90 text-primary text-xs font-semibold rounded-full mb-2">
                  {item.category}
                </span>
                <h3 className="font-display text-xl font-bold text-primary-foreground">
                  {item.title}
                </h3>
              </div>

              {/* View Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-soft">
                <svg
                  className="w-5 h-5 text-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-primary/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 w-12 h-12 bg-card/20 hover:bg-card/30 rounded-full flex items-center justify-center text-primary-foreground transition-colors z-10"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card/20 hover:bg-card/30 rounded-full flex items-center justify-center text-primary-foreground transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("prev");
            }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card/20 hover:bg-card/30 rounded-full flex items-center justify-center text-primary-foreground transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("next");
            }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image */}
          <div
            className="max-w-5xl max-h-[80vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryItems[selectedImage].image}
              alt={galleryItems[selectedImage].title}
              className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
            />
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center">
              <h3 className="font-display text-xl font-bold text-primary-foreground mb-1">
                {galleryItems[selectedImage].title}
              </h3>
              <span className="text-primary-foreground/70 text-sm">
                {galleryItems[selectedImage].category}
              </span>
            </div>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-card/20 rounded-full text-primary-foreground text-sm">
            {selectedImage + 1} / {galleryItems.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
