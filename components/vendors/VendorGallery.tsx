"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type GalleryImage = { src: string; caption?: string };

export function VendorGallery({ images }: { images: GalleryImage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length],
  );
  const prev = useCallback(
    () =>
      setOpenIndex((i) =>
        i === null ? i : (i - 1 + images.length) % images.length,
      ),
    [images.length],
  );

  // Keyboard controls + scroll lock while the lightbox is open.
  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, next, prev]);

  if (images.length === 0) return null;

  return (
    <>
      {/* Thumbnail grid */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
        {images.map((img, i) => (
          <button
            key={img.src + i}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-label={img.caption ? `View ${img.caption}` : "View photo"}
            className={`group relative overflow-hidden rounded-2xl bg-cream/5 ring-1 ring-cream/10 transition-shadow hover:ring-brass/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-brass ${
              i === 0 ? "col-span-2 aspect-[16/10] md:col-span-1 md:aspect-square" : "aspect-square"
            }`}
          >
            <Image
              src={img.src}
              alt={img.caption ?? "Vendor photo"}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            {img.caption && (
              <span className="absolute inset-x-0 bottom-0 translate-y-2 p-3 text-left text-sm font-medium text-cream opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {img.caption}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20"
          >
            <X className="h-5 w-5" strokeWidth={2} />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Previous photo"
                className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 sm:left-8"
              >
                <ChevronLeft className="h-6 w-6" strokeWidth={2} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Next photo"
                className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 sm:right-8"
              >
                <ChevronRight className="h-6 w-6" strokeWidth={2} />
              </button>
            </>
          )}

          <figure
            className="relative flex max-h-[85vh] w-full max-w-4xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[70vh] w-full">
              <Image
                src={images[openIndex].src}
                alt={images[openIndex].caption ?? "Vendor photo"}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            {images[openIndex].caption && (
              <figcaption className="mt-4 text-center text-sm text-cream/70">
                {images[openIndex].caption}
              </figcaption>
            )}
          </figure>
        </div>
      )}
    </>
  );
}
