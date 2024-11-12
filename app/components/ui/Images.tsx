import Image from "next/image";

const imageSources = [
  { src: "/1.jpg", alt: "Reserver bord" },
  { src: "/2.jpg", alt: "Åbningstider" },
  { src: "/3.jpg", alt: "Bestil et bord" },
];

export default function Images() {
  return (
    <section className="mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {imageSources.map((img, index) => (
        <figure key={index} className="aspect-square overflow-hidden">
          <Image
            src={img.src}
            alt={img.alt}
            width={600}
            height={1000}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </figure>
      ))}
    </section>
  );
}
