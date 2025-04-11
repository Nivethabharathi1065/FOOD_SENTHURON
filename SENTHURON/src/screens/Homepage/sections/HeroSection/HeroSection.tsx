import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  // Image data for mapping
  const images = [
    {
      src: "/1.png",
      alt: "Element",
      className: "w-[409px] h-[440px] object-cover",
    },
    { src: "/2.png", alt: "Element", className: "w-[327px] h-[375px]" },
    {
      src: "/3.png",
      alt: "Element",
      className: "w-[386px] h-[423px] object-cover",
    },
    {
      src: "/4.png",
      alt: "Element",
      className: "w-[330px] h-[380px] object-cover",
    },
  ];

  return (
    <section className="relative w-full py-16 flex justify-center">
      <div className="relative w-full max-w-[1180px] h-[454px]">
        <div className="absolute w-[765px] h-[269px] top-[81px] left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-[17px] absolute top-[212px] left-1/2 -translate-x-1/2">
            <Button className="w-[250px] h-[57px] bg-[#E3343A] hover:bg-[#E3343A]/90 rounded-[28.5px] font-['Sora',Helvetica] font-semibold text-base tracking-[-0.32px]">
              Request A Quote
            </Button>

            <Button
              variant="outline"
              className="w-[250px] h-[57px] rounded-[28.5px] border-black font-['Sora',Helvetica] font-semibold text-black text-base tracking-[-0.32px]"
            >
              View Packages
            </Button>
          </div>

          <p className="absolute w-[606px] top-[116px] left-1/2 -translate-x-1/2 font-['Sora',Helvetica] font-light text-[#403d3d] text-base text-center tracking-[-0.32px] leading-6">
            Whether it&apos;s a wedding, a milestone celebration, or a
            professional shoot, we&apos;re here to capture your story just the
            way you envision. Share your requirements, and we&apos;ll provide a
            customized quote tailored to your event and preferences.
          </p>

          <h2 className="absolute w-[765px] -top-px left-0 [background:linear-gradient(90deg,rgba(162,131,117,1)_0%,rgba(23,19,18,1)_50%,rgba(198,162,146,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica] font-normal text-transparent text-[64px] text-center tracking-[-1.28px] leading-[49px]">
            Turn Moments into Memories – Let&apos;s Make It Happen!
          </h2>
        </div>

        {/* Images positioned absolutely */}
        <img
          className="absolute w-[409px] h-[440px] top-3.5 left-0 object-cover"
          alt="Element"
          src="/1.png"
        />
        <img
          className="absolute w-[327px] h-[375px] top-0 left-[282px]"
          alt="Element"
          src="/2.png"
        />
        <img
          className="absolute w-[386px] h-[423px] top-[7px] left-[795px] object-cover"
          alt="Element"
          src="/3.png"
        />
        <img
          className="absolute w-[330px] h-[380px] top-[3px] left-[560px] object-cover"
          alt="Element"
          src="/4.png"
        />
      </div>
    </section>
  );
};
