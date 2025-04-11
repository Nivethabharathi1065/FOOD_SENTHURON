import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

export const ClientLogosSection = (): JSX.Element => {
  // Data for the photography services
  const photographyServices = [
    {
      id: "wedding",
      title: "Wedding Photography & Videography",
      description:
        "Your wedding is a once-in-a-lifetime event, and we ensure every precious moment is beautifully captured. At Stunning Eventz, we specialize in creating timeless memories with a perfect blend of candid shots and cinematic videography, preserving the emotions, joy, and love of your big day. Let us tell your unique story through our lens.",
      image: "/image-17.png",
      expanded: true,
      iconSrc: "/group-427318930.png",
      iconBg: "bg-red-2",
    },
    {
      id: "newborn",
      title: "New Boom Bby shoots & Toddlers",
      description: "Adorable, creative setups for your baby's first memories.",
      image: "/image-18.png",
      iconSrc: "/group-427318930-1.png",
      iconBg: "bg-[#ffffff7d]",
    },
    {
      id: "ear-piercing",
      title: "Ear piecing Ceremony",
      description:
        "Capture the precious cultural moment with grace and tradition.",
      image: "/image-19.png",
      iconSrc: "/group-427318930-2.png",
      iconBg: "bg-[#ffffff7d]",
    },
    {
      id: "puberty",
      title: "Puberty Ceremony",
      description:
        "Celebrate this milestone with beautiful, respectful photography.",
      image: "/image-20.png",
      iconSrc: "/group-427318930-3.png",
      iconBg: "bg-[#ffffff7d]",
    },
    {
      id: "housewarming",
      title: "Housewarming Ceremony",
      description: "Commemorate your new beginning with warm, vibrant photos.",
      image: "/image-21.png",
      iconSrc: "/group-427318930-4.png",
      iconBg: "bg-[#ffffff7d]",
    },
    {
      id: "baby-shower",
      title: "Baby Shower",
      description:
        "Delight in capturing the love and excitement of this special celebration.",
      image: "/image-22.png",
      iconSrc: "/group-427318930-5.png",
      iconBg: "bg-[#ffffff7d]",
    },
    {
      id: "corporate",
      title: "Corporate Photography",
      description:
        "Elevate your brand and events with professional, impactful photography.",
      image: "/image-23.png",
      iconSrc: "/group-427318930-6.png",
      iconBg: "bg-[#ffffff7d]",
    },
  ];

  return (
    <div className="flex flex-col w-full items-start gap-[17px]">
      <Separator className="w-full" />

      <Accordion type="single" defaultValue="wedding" className="w-full">
        {photographyServices.map((service, index) => (
          <React.Fragment key={service.id}>
            <AccordionItem value={service.id} className="border-none">
              <div className="relative w-full">
                <div className="flex">
                  <img
                    className="w-[389px] h-[101px] object-cover"
                    alt={service.title}
                    src={service.image}
                    style={{
                      height: service.id === "wedding" ? "259px" : "101px",
                    }}
                  />

                  <AccordionTrigger className="flex-1 h-full">
                    <div className="flex flex-col w-full items-start text-left px-[53px]">
                      <h3 className="font-['Sora',Helvetica] font-semibold text-[#000000] text-[28px] tracking-[-0.56px] leading-[49px]">
                        {service.title}
                      </h3>

                      <p className="font-['Sora',Helvetica] font-light text-[#403d3d] text-sm tracking-[-0.28px] leading-6">
                        {service.description}
                      </p>
                    </div>
                  </AccordionTrigger>

                  <div
                    className={`w-[68px] h-[68px] ${service.iconBg} rounded-[34px] flex items-center justify-center mr-4`}
                  >
                    <img
                      className="w-auto h-auto"
                      alt="Expand icon"
                      src={service.iconSrc}
                    />
                  </div>
                </div>

                <AccordionContent>
                  {service.id === "wedding" && (
                    <div className="flex items-center gap-4 ml-[442px] mt-4 mb-4">
                      <Button
                        variant="outline"
                        className="w-[190px] h-[57px] rounded-[28.5px] border border-solid border-[#000000] font-['Sora',Helvetica] font-semibold text-black text-base"
                      >
                        Know More
                      </Button>
                      <Button className="w-[190px] h-[57px] bg-red-2 rounded-[28.5px] font-['Sora',Helvetica] font-semibold text-white text-base">
                        Book Now
                      </Button>
                    </div>
                  )}
                </AccordionContent>
              </div>
            </AccordionItem>

            {index < photographyServices.length - 1 && (
              <Separator className="w-full" />
            )}
          </React.Fragment>
        ))}
      </Accordion>

      <Separator className="w-full" />
    </div>
  );
};
