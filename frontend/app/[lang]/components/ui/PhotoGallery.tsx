import Image from "next/image";

export default function PhotoGallery({ photos = [] }: { photos?: string[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3">
      {photos.map((src, index) => (
        <div key={index} className="relative w-full aspect-square">
          <Image
            src={src}
            alt={`Photo ${index + 1}`}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
