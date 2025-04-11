import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { ClientLogosSection } from "./sections/ClientLogosSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { GallerySection } from "./sections/GallerySection";
import { JourneySection } from "./sections/JourneySection/JourneySection";
import { ServicesSection } from "./sections/ServicesSection/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const Homepage = (): JSX.Element => {
  // Client logos data for mapping
  const clientLogos = [
    { id: 1, src: "/image-16.png", alt: "Client logo" },
    { id: 2, src: "/image-7.png", alt: "Client logo" },
    { id: 3, src: "/image-7.png", alt: "Client logo" },
    { id: 4, src: "/image-8.png", alt: "Client logo" },
    { id: 5, src: "/image-16.png", alt: "Client logo" },
    { id: 6, src: "/image-10.png", alt: "Client logo" },
    { id: 7, src: "/image-11.png", alt: "Client logo" },
    { id: 8, src: "/image-12.png", alt: "Client logo" },
    { id: 9, src: "/image-16.png", alt: "Client logo" },
    { id: 10, src: "/image-16.png", alt: "Client logo" },
    { id: 11, src: "/image-16.png", alt: "Client logo" },
    { id: 12, src: "/image-16.png", alt: "Client logo" },
  ];

  // Navigation items
  const navItems = [
    { id: 1, label: "Portfolio" },
    { id: 2, label: "About Us" },
    { id: 3, label: "Packages" },
  ];

  return (
    <main className="bg-[#ebebeb] flex flex-col items-center w-full overflow-hidden">
      {/* Header and Hero Section */}
      <section className="relative w-full">
        <div className="relative w-full">
          {/* Background elements */}
          <div className="absolute w-full h-[1034px] top-0 left-0 bg-[#f5ebe2] rounded-[584.5px/517px] blur-[119.6px] z-0"></div>

          {/* Hero image */}
          <div className="relative w-full h-[648px]">
            <img
              className="w-full h-full object-cover"
              alt="Hero background"
              src="/mask-group.png"
            />
            {/* Gradient overlay */}
            <div className="absolute top-0 left-0 w-full h-[81px] bg-gradient-to-b from-[rgba(0,0,0,0.55)] to-transparent"></div>
          </div>

          {/* Navigation */}
          <div className="absolute top-[150px] left-0 w-full flex justify-between items-center px-[305px]">
            <div className="flex items-center gap-[54px]">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className="text-white text-sm tracking-[-0.28px] font-normal"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Logo */}
            <img
              className="w-[156px] h-[65px]"
              alt="Logo"
              src="/logo-copy-1.png"
            />

            <div className="flex items-center gap-[38px]">
              <button className="text-white text-sm tracking-[-0.28px] font-normal">
                Services
              </button>
              <img
                className="w-[45px] h-[45px]"
                alt="WhatsApp icon"
                src="/logos-whatsapp-icon.svg"
              />
              <Button className="w-[136px] h-[46px] bg-white text-black rounded-[22px] relative overflow-hidden">
                <div className="absolute w-[145px] h-[145px] top-[51px] left-[-5px] bg-red rounded-[72.4px]" />
                <span className="relative z-10 text-[12.8px] font-semibold tracking-[-0.26px]">
                  Book Now
                </span>
              </Button>
            </div>
          </div>

          {/* Hero content */}
          <div className="absolute top-[576px] left-[305px] max-w-[543px]">
            <h1 className="text-[50px] text-white tracking-[-1.00px] leading-[49px] font-normal [font-family:'Abhaya_Libre_ExtraBold-Regular',Helvetica]">
              Turning Special Moments into Timeless Memories
            </h1>
            <p className="mt-[30px] text-xl text-white tracking-[-0.40px] font-light [font-family:'Sora',Helvetica]">
              From cherished personal moments to professional events, we've got
              you covered.
            </p>
          </div>

          {/* Circular booking button */}
          <div className="absolute w-[173px] h-[173px] top-[708px] left-[859px] bg-[url(/-linked--ellipse-3438.svg)] bg-cover flex items-center justify-center">
            <div className="relative w-[113px] h-[111px]">
              <div className="w-[111px] h-[111px] bg-red-2 rounded-[55.55px] flex items-center justify-center">
                <span className="text-white text-[17px] tracking-[-0.34px] font-semibold text-center [font-family:'Sora',Helvetica]">
                  Book Now
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Journey heading */}
        <div className="w-full text-center mt-[200px]">
          <h2 className="text-[64px] tracking-[-1.28px] leading-[49px] font-normal [background:linear-gradient(90deg,rgba(162,131,117,1)_0%,rgba(23,19,18,1)_50%,rgba(198,162,146,1)_100%)] [-webkit-background-clip:text] bg-clip-text text-transparent [font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica]">
            Our Journey So Far
          </h2>
          <p className="max-w-[606px] mx-auto mt-[20px] text-base text-[#403d3d] tracking-[-0.32px] leading-6 font-light [font-family:'Sora',Helvetica]">
            At Stunning Eventz, we take pride in our legacy of creating
            unforgettable memories through exceptional photography and event
            services. With years of expertise and a dedicated team of
            professionals, we've had the honor of capturing countless special
            moments, turning them into timeless treasures.
          </p>
        </div>
      </section>

      {/* Journey Section */}
      <JourneySection />

      {/* Image Gallery */}
      <section className="relative w-full mt-[40px]">
        <div className="relative">
          <div className="w-full h-[231px] bg-[#ebebeb] rounded-[895.5px/115.5px]"></div>

          <div className="flex items-center justify-center gap-[30.4px] bg-[#ebebeb] py-[40px]">
            <img
              className="w-[187px] h-[521px] object-cover"
              alt="Gallery image"
              src="/image.png"
            />
            <img
              className="w-[315.19px] h-[482.42px] object-cover"
              alt="Gallery image"
              src="/image-1.png"
            />
            <img
              className="w-[315.19px] h-[482.42px] object-cover"
              alt="Gallery image"
              src="/image-2.png"
            />
            <img
              className="w-[315.19px] h-[482.42px] object-cover"
              alt="Gallery image"
              src="/image-3.png"
            />
            <img
              className="w-[185.8px] h-[498px]"
              alt="Gallery image"
              src="/image-4.png"
            />
          </div>

          <img
            className="w-full h-[231px]"
            alt="Ellipse"
            src="/ellipse-800.svg"
          />
        </div>
      </section>

      {/* Know More Button */}
      <div className="w-full flex justify-center mt-[30px]">
        <Button className="w-[250px] h-[57px] bg-[#e2343a] rounded-[28.5px] relative overflow-hidden">
          <div className="absolute w-[181px] h-[181px] top-16 left-[34px] bg-black rounded-[90.5px]" />
          <span className="relative z-10 text-white text-base tracking-[-0.32px] font-semibold [font-family:'Sora',Helvetica]">
            Know More
          </span>
        </Button>
      </div>

      {/* Services Section Heading */}
      <div className="w-full text-center mt-[100px]">
        <h2 className="text-[64px] tracking-[-1.28px] leading-[49px] font-normal [background:linear-gradient(90deg,rgba(162,131,117,1)_0%,rgba(23,19,18,1)_50%,rgba(198,162,146,1)_100%)] [-webkit-background-clip:text] bg-clip-text text-transparent [font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica]">
          Our Services
        </h2>
      </div>

      {/* Client Logos Section */}
      <section className="w-full bg-[#121212] py-[100px]">
        <h2 className="text-[64px] tracking-[-1.28px] leading-[49px] font-normal text-center mb-[50px] [background:linear-gradient(90deg,rgba(162,131,117,1)_0%,rgba(255,255,255,1)_50%,rgba(198,162,146,1)_100%)] [-webkit-background-clip:text] bg-clip-text text-transparent [font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica]">
          Selected Clients
        </h2>

        <div className="flex flex-wrap justify-center gap-[28px] max-w-[1256px] mx-auto">
          {clientLogos.map((logo) => (
            <Card
              key={logo.id}
              className="w-[186px] h-[111px] bg-[#161616] rounded-[10px] border-[0.82px] border-solid border-[#363435] backdrop-blur-[1.65px]"
            >
              <CardContent className="flex items-center justify-center h-full p-0">
                <img
                  className="max-w-[80%] max-h-[60%] object-contain"
                  alt={logo.alt}
                  src={logo.src}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Client Logos Section Component */}
      <ClientLogosSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Know More Services Button */}
      <div className="w-full flex justify-center mt-[30px]">
        <Button className="w-[250px] h-[57px] bg-red-2 rounded-[28.5px] relative overflow-hidden">
          <div className="absolute w-[181px] h-[181px] top-16 left-[34px] bg-black rounded-[90.5px]" />
          <span className="relative z-10 text-white text-base tracking-[-0.32px] font-semibold [font-family:'Sora',Helvetica]">
            Know More Services
          </span>
        </Button>
      </div>

      {/* Photo Products Section */}
      <section className="w-full bg-[#121212] py-[100px]">
        <h2 className="text-[64px] tracking-[-1.28px] leading-[49px] font-normal text-center mb-[30px] [background:linear-gradient(90deg,rgba(162,131,117,1)_0%,rgba(255,255,255,1)_50%,rgba(198,162,146,1)_100%)] [-webkit-background-clip:text] bg-clip-text text-transparent [font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica]">
          Preserve Your Memories in Style
        </h2>

        <p className="max-w-[556px] mx-auto text-base text-white tracking-[-0.32px] leading-6 font-light text-center mb-[50px] [font-family:'Sora',Helvetica]">
          At Stunning Eventz, we go beyond capturing moments by offering
          beautifully designed photo frames and premium photo books. Whether
          it's a grand wedding, a charming baby shoot, or a corporate event, we
          ensure your memories are preserved in stunning physical formats that
          you can cherish forever.
        </p>

        <div className="flex justify-center items-center gap-[50px]">
          <div className="w-[877px] h-[541px] bg-[url(/group-111.png)] bg-cover"></div>

          <div className="relative w-[314px] h-[418px]">
            <img
              className="absolute w-[249px] h-[355px] top-[31px] left-[39px] object-cover"
              alt="Framed photo"
              src="/image-32.png"
            />
            <img
              className="absolute w-[314px] h-[418px] top-0 left-0 object-cover"
              alt="Picture frame"
              src="/pngimg-com---picture-frame-png21-1.png"
            />
          </div>
        </div>

        <div className="flex justify-center mt-[50px]">
          <Button className="w-[250px] h-[57px] bg-red-2 rounded-[28.5px] relative overflow-hidden">
            <div className="absolute w-[181px] h-[181px] top-16 left-[34px] bg-black rounded-[90.5px]" />
            <span className="relative z-10 text-white text-base tracking-[-0.32px] font-semibold [font-family:'Sora',Helvetica]">
              Order Now
            </span>
          </Button>
        </div>
      </section>

      {/* Gallery Section */}
      <GallerySection />

      {/* Navigation button */}
      <div className="relative w-full flex justify-end pr-[50px] mt-[-50px]">
        <Button
          variant="outline"
          size="icon"
          className="w-[27px] h-[27px] bg-white rounded-[13.41px] rotate-180"
        >
          <img
            className="w-[17px] h-[17px] rotate-180"
            alt="Chevron left"
            src="/chevron-left.svg"
          />
        </Button>
      </div>

      {/* Social Media Section */}
      <section className="w-full bg-[#121212] pt-[50px]">
        <p className="text-white text-base tracking-[-0.32px] leading-6 font-light text-center [font-family:'Sora',Helvetica]">
          FOLLOW US ON
        </p>
      </section>

      {/* Footer Section */}
      <FooterSection />
    </main>
  );
};
