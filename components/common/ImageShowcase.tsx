import Image from "next/image";

interface ImageShowcaseProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
  columns?: 2 | 3;
}

export function ImageShowcase({ images, columns = 2 }: ImageShowcaseProps) {
  if (images.length === 1) {
    return (
      <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-2xl ring-2 ring-white/20">
        <Image
          src={images[0].src}
          alt={images[0].alt}
          fill
          className="object-cover transition-transform hover:scale-110"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>
    );
  }

  const gridCols = columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2";
  
  return (
    <div className={`grid gap-6 ${gridCols}`}>
      {images.map((image, index) => (
        <div
          key={index}
          className="relative h-48 overflow-hidden rounded-xl shadow-lg md:h-64"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform hover:scale-110"
            sizes={columns === 3 ? "(max-width: 768px) 100vw, 33vw" : "(max-width: 768px) 100vw, 50vw"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      ))}
    </div>
  );
}

