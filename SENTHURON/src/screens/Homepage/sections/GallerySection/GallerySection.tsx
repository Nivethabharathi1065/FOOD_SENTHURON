import { ChevronLeftIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
} from "../../../../components/ui/carousel";

export const GallerySection = (): JSX.Element => {
  // Gallery images data
  const galleryImages = [
    { id: 1, src: "/image-38.png", badgeSrc: "/image-656-3.png" },
    { id: 2, src: "/image-39.png", badgeSrc: "/image-656-3.png" },
    { id: 3, src: "/image-40.png", badgeSrc: "/image-656-3.png" },
    { id: 4, src: "/image-41.png", badgeSrc: "/image-656-3.png" },
  ];

  return (
    <section className="relative w-full py-4 my-8">
      <div className="relative">
        <h2 className="text-center text-[211.6px] leading-[162px] tracking-[-4.23px] [font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica] font-normal [background:linear-gradient(90deg,rgba(162,131,117,1)_0%,rgba(23,19,18,1)_50%,rgba(198,162,146,1)_100%)] [-webkit-background-clip:text] bg-clip-text text-transparent whitespace-nowrap">
          Gallery
        </h2>

        <div className="flex items-center gap-5 justify-center mt-4">
          <Carousel className="w-auto">
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-[27px] h-[27px] bg-white rounded-[13.41px] flex items-center justify-center">
              <ChevronLeftIcon className="w-[17px] h-[17px]" />
            </CarouselPrevious>

            <CarouselContent className="ml-0">
              {galleryImages.map((image) => (
                <CarouselItem
                  key={image.id}
                  className="basis-auto pl-5 first:pl-0"
                >
                  <Card className="relative w-[223px] h-[223px] border-0 overflow-hidden">
                    <CardContent
                      className="p-0 h-full"
                      style={{
                        backgroundImage: `url(${image.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "50% 50%",
                      }}
                    >
                      <img
                        className="absolute w-[23px] h-[23px] bottom-[9px] left-[9px] object-cover"
                        alt="Image"
                        src={image.badgeSrc}
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="flex items-center gap-[19px] absolute top-0 right-0">
          <img
            className="relative w-[100px] h-[100px] object-cover"
            alt="Instagram profile"
            src="/image-42.png"
          />

          <div className="flex flex-col w-[166px] items-start gap-2.5">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Sora',Helvetica] font-bold text-black text-xl tracking-[-0.40px] leading-6">
              stunning_eventz
            </div>

            <div className="relative self-stretch [font-family:'Sora',Helvetica] font-light text-[#403d3d] text-base tracking-[-0.32px] leading-6">
              352 posts
            </div>
          </div>
        </div>

        <div className="mt-8 [font-family:'Sora',Helvetica] font-light text-black text-2xl tracking-[-0.48px] leading-6 whitespace-nowrap">
          See Our Work in Action
        </div>

        <div className="flex items-center gap-[13px] mt-12">
          <div className="relative w-[47px] h-[47px]">
            <img
              className="absolute w-[38px] h-[38px] top-[5px] left-[5px]"
              alt="Social media icon"
              src="/group.png"
            />
          </div>

          <div className="[font-family:'Sora',Helvetica] font-normal text-black text-xl tracking-[-0.40px] leading-6 whitespace-nowrap">
            KEEP UP TO DATE
          </div>

          <div className="w-[58px] h-[58px] bg-red-2 rounded-[29px] flex items-center justify-center ml-4">
            <img
              className="w-9 h-[30px]"
              alt="Instagram icon"
              src="/group-427318930-9.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
