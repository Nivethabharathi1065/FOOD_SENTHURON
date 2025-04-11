import React from "react";
import { Button } from "../../../../components/ui/button";

export const TestimonialsSection = (): JSX.Element => {
  // First row of images
  const topRowImages = [
    { src: "/image-24.png", alt: "Image", width: "419px" },
    { src: "/image-25.png", alt: "Image", width: "268px" },
    { src: "/image-26.png", alt: "Image", width: "494px" },
    { src: "/image-27.png", alt: "Image", width: "193px" },
  ];

  // Second row of images
  const bottomRowImages = [
    { src: "/image-28.png", alt: "Image", width: "204px" },
    { src: "/image-29.png", alt: "Image", width: "494px" },
    { src: "/image-30.png", alt: "Image", width: "268px" },
    { src: "/image-31.png", alt: "Image", width: "408px" },
  ];

  return (
    <section className="w-full max-w-[1603px] mx-auto py-16 relative">
      <h2 className="text-center mb-12 text-[64px] [font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica] font-normal tracking-[-1.28px] leading-[49px] [background:linear-gradient(90deg,rgba(162,131,117,1)_0%,rgba(255,255,255,1)_50%,rgba(198,162,146,1)_100%)] [-webkit-background-clip:text] bg-clip-text text-transparent">
        A Glimpse of Our Creations
      </h2>

      <div className="flex flex-col gap-6">
        {/* Top row of images */}
        <div className="flex items-center gap-[22px] overflow-x-auto">
          {topRowImages.map((image, index) => (
            <img
              key={`top-${index}`}
              className="h-[327px] object-cover"
              style={{ width: image.width }}
              alt={image.alt}
              src={image.src}
            />
          ))}
        </div>

        {/* Bottom row of images */}
        <div className="flex items-center gap-[22px] overflow-x-auto">
          {bottomRowImages.map((image, index) => (
            <img
              key={`bottom-${index}`}
              className="h-[327px] object-cover"
              style={{ width: image.width }}
              alt={image.alt}
              src={image.src}
            />
          ))}
        </div>
      </div>

      {/* View All Work button */}
      <div className="flex justify-center mt-10">
        <Button className="w-[250px] h-[57px] bg-white text-black rounded-[28.5px] relative overflow-hidden [font-family:'Sora',Helvetica] font-semibold text-base tracking-[-0.32px]">
          <span className="relative z-10">View All Work</span>
          <div className="absolute w-[181px] h-[181px] top-16 left-[34px] bg-red-2 rounded-[90.5px]" />
        </Button>
      </div>
    </section>
  );
};
