import Image from "next/image";

interface BackgroundImageProps {
  src: string;
  alt: string;
  overlayGradient?: string;
  patternOverlay?: boolean;
  priority?: boolean;
}

export function BackgroundImage({
  src,
  alt,
  overlayGradient = "from-blue-900/85 via-indigo-900/75 to-purple-900/85",
  patternOverlay = true,
  priority = false,
}: BackgroundImageProps) {
  return (
    <div className="absolute inset-0 z-0">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority={priority}
        quality={90}
        sizes="100vw"
      />
      {/* Overlay Gradients */}
      <div className={`absolute inset-0 bg-gradient-to-br ${overlayGradient} dark:from-gray-900/90 dark:via-gray-800/85 dark:to-gray-900/90`}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/95 dark:via-gray-900/40 dark:to-gray-900/98"></div>
      {/* Pattern Overlay */}
      {patternOverlay && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:50px_50px] opacity-30"></div>
      )}
    </div>
  );
}

