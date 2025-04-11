import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ServicesSection = (): JSX.Element => {
  // Testimonial data for mapping
  const testimonials = [
    {
      id: 1,
      image: "/image-37.png",
      isSmall: true,
      position: "right",
    },
    {
      id: 2,
      image: "/image-34.png",
      isSmall: true,
      position: "left",
    },
    {
      id: 3,
      image: "/image-35.png",
      isMain: true,
      quote: "I Really Enjoyed Working With Stunning Events",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nEnim lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Laoreet sit amet cursus sit amet dictut amet ju.",
      author: "Michelle Lindstrom",
      location: "Nagercoil",
    },
    {
      id: 4,
      image: "/image-36.png",
      isSmall: true,
      position: "left",
    },
    {
      id: 5,
      image: "/image-37.png",
      isSmall: true,
      position: "left",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-[30px] w-full py-16">
      <h2 className="w-fit [background:linear-gradient(90deg,rgba(162,131,117,1)_0%,rgba(23,19,18,1)_50%,rgba(198,162,146,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica] font-normal text-transparent text-[64px] text-center tracking-[-1.28px] leading-[49px] whitespace-nowrap">
        What Our Clients Say
      </h2>

      <div className="flex items-center gap-[30px] w-full">
        {/* First small card */}
        <Card className="relative w-[236px] h-[347px] rounded-[20px] border border-solid border-[#a4a4a4]">
          <CardContent className="p-0">
            <img
              className="absolute w-[29px] h-[312px] top-[18px] left-[189px] object-cover"
              alt="Testimonial image"
              src="/image-37.png"
            />
          </CardContent>
        </Card>

        {/* Second small card */}
        <Card className="relative w-[236px] h-[347px] rounded-[20px] border border-solid border-[#a4a4a4]">
          <CardContent className="p-0">
            <img
              className="absolute w-[200px] h-[312px] top-[18px] left-[18px] object-cover"
              alt="Testimonial image"
              src="/image-34.png"
            />
          </CardContent>
        </Card>

        {/* Main testimonial card */}
        <Card className="relative w-[755px] h-[347px] rounded-[20px] border border-solid border-[#a4a4a4]">
          <CardContent className="p-0">
            <div className="inline-flex items-center gap-[30px] absolute top-[38px] left-[245px]">
              <img
                className="relative w-[51px] h-[51px]"
                alt="Quote icon"
                src="/-.svg"
              />

              <h3 className="relative w-[392px] [font-family:'Sora',Helvetica] font-normal text-textdefault text-3xl tracking-[0] leading-[38.7px]">
                I Really Enjoyed Working With Stunning Events
              </h3>
            </div>

            <div className="flex flex-col w-[495px] items-start gap-7 absolute top-[126px] left-[245px]">
              <p className="relative w-[488px] [font-family:'Sora',Helvetica] font-light text-ash text-base tracking-[-0.32px] leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                <br />
                <br />
                Enim lobortis scelerisque fermentum dui faucibus in ornare quam
                viverra. Laoreet sit amet cursus sit amet dictut amet ju.
              </p>

              <div className="inline-flex items-center gap-2.5">
                <span className="[font-family:'Sora',Helvetica] font-normal text-textdefault text-sm tracking-[0] leading-[22.4px]">
                  Michelle Lindstrom
                </span>

                <div className="w-[15px] h-px bg-bordersecondary" />

                <span className="[font-family:'Sora',Helvetica] font-normal text-textdefault text-sm tracking-[0] leading-[22.4px]">
                  Nagercoil
                </span>
              </div>
            </div>

            <img
              className="absolute w-[200px] h-[312px] top-[19px] left-[19px] object-cover"
              alt="Testimonial image"
              src="/image-35.png"
            />
          </CardContent>
        </Card>

        {/* Third small card */}
        <Card className="relative w-[236px] h-[347px] rounded-[20px] border border-solid border-[#a4a4a4]">
          <CardContent className="p-0">
            <img
              className="absolute w-[200px] h-[312px] top-[18px] left-[18px] object-cover"
              alt="Testimonial image"
              src="/image-36.png"
            />
          </CardContent>
        </Card>

        {/* Fourth small card */}
        <Card className="relative w-[236px] h-[347px] rounded-[20px] border border-solid border-[#a4a4a4]">
          <CardContent className="p-0">
            <img
              className="absolute w-7 h-[312px] top-[18px] left-[18px] object-cover"
              alt="Testimonial image"
              src="/image-37.png"
            />
          </CardContent>
        </Card>
      </div>

      {/* Navigation buttons */}
      <div className="inline-flex items-center gap-5">
        <button className="relative w-[58px] h-[58px] rounded-[30px] border-[0.69px] border-solid border-[#a4a4a4] flex items-center justify-center">
          <img
            className="w-[33px] h-[17px] rotate-180"
            alt="Previous"
            src="/group-427318930-7.png"
          />
        </button>

        <button className="relative w-[58px] h-[58px] rounded-[30px] border-[0.69px] border-solid border-[#a4a4a4] flex items-center justify-center">
          <img
            className="w-[33px] h-[17px]"
            alt="Next"
            src="/group-427318930-8.png"
          />
        </button>
      </div>
    </section>
  );
};
