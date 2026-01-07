import { ImageWithFallback } from "@/components/version1-components/figma/ImageWithFallback";

export function ProgramVisuals() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1743286159555-ea765c1bc5e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZyYXJlZCUyMHNhdW5hJTIwdGhlcmFweXxlbnwxfHx8fDE3Njc3NDk4NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Infrared sauna therapy",
      label: "Bio-Hacking Technologies"
    },
    {
      src: "https://images.unsplash.com/photo-1644612105654-b6b0a941ecde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMGNsYXNzfGVufDF8fHx8MTc2NzczMzg0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Yoga and meditation class",
      label: "Daily Activities"
    },
    {
      src: "https://images.unsplash.com/photo-1613637028036-ca0b31a4ad12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMGRldG94JTIwanVpY2V8ZW58MXx8fHwxNzY3NzQ5ODQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Wellness detox juice",
      label: "Personalised Nutrition"
    },
    {
      src: "https://images.unsplash.com/photo-1737352777897-e22953991a32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBtYXNzYWdlJTIwdGhlcmFweXxlbnwxfHx8fDE3Njc2NzkxMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Spa massage therapy",
      label: "Wellness Services"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-md"
            >
              <div className="aspect-square overflow-hidden">
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {/* Overlay label */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <p className="text-white font-medium text-lg px-4 text-center">
                  {image.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
