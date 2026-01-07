import { ImageWithFallback } from "@/components/version1-components/figma/ImageWithFallback";

export function PhotoStrip() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1757940556610-a114be4733bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMHJldHJlYXQlMjBzcGF8ZW58MXx8fHwxNzY3NzQ4MDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Wellness retreat spa"
    },
    {
      src: "https://images.unsplash.com/photo-1723437515844-fd3cb91ef1df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZ291cm1ldCUyMG1lYWx8ZW58MXx8fHwxNzY3NzQ4MDIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Healthy gourmet meal"
    },
    {
      src: "https://images.unsplash.com/photo-1767008458853-8d626dc5644d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwcGVhY2VmdWwlMjBuYXR1cmV8ZW58MXx8fHwxNzY3NjI4MTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Peaceful meditation"
    },
    {
      src: "https://images.unsplash.com/photo-1760647422523-f532034a49ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWxsbmVzcyUyMHRyZWF0bWVudHxlbnwxfHx8fDE3Njc2NjQ2MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Luxury wellness treatment"
    }
  ];

  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div 
              key={index}
              className="aspect-[4/5] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Subtle overlay text */}
      <div className="text-center mt-8">
        <p className="text-sm text-gray-500 italic">
          Where transformation meets tranquility
        </p>
      </div>
    </section>
  );
}
