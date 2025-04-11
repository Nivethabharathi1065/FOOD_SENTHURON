import React from "react";

// Define data for quick links and services to make the code more maintainable
const quickLinks = [
  "Home",
  "Portfolio",
  "About Us",
  "Packages",
  "Frame and Book",
];

const servicesColumn1 = [
  "Wedding Photography & Videography",
  "Newborn Baby Shoots & Toddlers",
  "Earpiercing Ceremony",
  "Puberty Ceremony",
  "Naming Ceremony",
  "Housewarming Ceremony",
  "Candid Photography",
  "Modeling Photography",
];

const servicesColumn2 = [
  "Baby Shower",
  "Pre or Post Photoshoot",
  "Birthday Celebrations",
  "Maternity Photoshoot",
  "60th Wedding Anniversary",
  "Product Photography",
  "Corporate Photography",
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-[#121212] text-white overflow-hidden">
      <div className="relative w-full mx-auto max-w-7xl px-4 py-16">
        {/* Top curved shape */}
        <img
          className="absolute w-full top-[-167px] left-0"
          alt="Ellipse"
          src="/ellipse-800.svg"
        />

        {/* Logo and company description */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between gap-12">
          <div className="flex flex-col gap-6 max-w-md">
            <img
              className="w-[276px] h-auto"
              alt="Stunning Eventz Logo"
              src="/logo-copy-2.png"
            />
            <p className="font-light text-sm tracking-[-0.28px] leading-[22px]">
              At Stunning Eventz, we specialize in capturing life&apos;s most
              precious moments with creativity and precision. From weddings to
              corporate events, baby shoots to milestone celebrations, our
              expert team ensures every frame tells a story worth cherishing.
            </p>

            {/* Social media links */}
            <div className="mt-6">
              <h4 className="font-light text-base tracking-[-0.32px] leading-6 mb-4">
                FOLLOW US ON
              </h4>
              <div className="flex items-center gap-2">
                <div className="w-[50px] h-[50px] bg-red-2 rounded-full flex items-center justify-center">
                  <div className="w-[21px] h-[33px] relative">
                    <div className="relative h-[21px] top-1.5 bg-[url(/group-1.png)] bg-[100%_100%]" />
                  </div>
                </div>
                <div className="w-[50px] h-[50px] bg-[#e2343a] rounded-full flex items-center justify-center">
                  <div className="w-[21px] h-[33px] relative">
                    <img
                      className="absolute w-[11px] h-[21px] top-1.5 left-[5px]"
                      alt="Facebook"
                      src="/xmlid-834-.png"
                    />
                  </div>
                </div>
                <div className="w-[50px] h-[50px] bg-red-2 rounded-full flex items-center justify-center">
                  <img
                    className="w-[29px] h-[29px]"
                    alt="Youtube"
                    src="/youtube.svg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-base text-x3md-pure-white leading-5 mb-8">
              QUICK LINKS
            </h3>
            <nav>
              <ul className="flex flex-col gap-3.5">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="font-normal text-sm text-[#ffffffa6] hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services - Two columns */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-base text-x3md-pure-white leading-5 mb-8">
              SERVICES
            </h3>
            <div className="flex gap-8">
              <ul className="flex flex-col gap-3.5">
                {servicesColumn1.map((service, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="font-normal text-sm text-[#ffffffa6] hover:text-white transition-colors whitespace-nowrap"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-3.5">
                {servicesColumn2.map((service, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="font-normal text-sm text-[#ffffffa6] hover:text-white transition-colors whitespace-nowrap"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Circular Hire Us button with rotating text */}
          <div className="relative w-[173px] h-[173px]">
            <div className="absolute w-[173px] h-[173px] bg-[url(/-linked--ellipse-3438-1.svg)] bg-[100%_100%]">
              <div className="relative w-[275px] h-40 top-1.5 left-1.5">
                {/* Rotating text - preserving the original implementation */}
                <div className="absolute w-[275px] h-40 top-0 left-0">
                  <div className="relative w-[161px] h-40">
                    <div className="absolute w-[85px] h-[155px] top-0 left-[76px]">
                      <div className="absolute h-[19px] top-[79px] left-[66px] rotate-[96.41deg] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        W
                      </div>
                      <div className="top-[91px] left-[67px] rotate-[106.68deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        e
                      </div>
                      <div className="top-[101px] left-[63px] rotate-[115.06deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        d
                      </div>
                      <div className="top-[110px] left-[57px] rotate-[124.15deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        d
                      </div>
                      <div className="top-[117px] left-[55px] rotate-[130.63deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        i
                      </div>
                      <div className="top-[122px] left-[47px] rotate-[136.87deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        n
                      </div>
                      <div className="top-[129px] left-[39px] rotate-[145.01deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        g
                      </div>
                      <div className="top-[134px] left-8 rotate-[152.60deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        s
                      </div>
                      <div className="top-[136px] left-[29px] rotate-[157.93deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        {""}
                      </div>
                      <div className="top-0 left-0 rotate-[1.11deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        o
                      </div>
                      <div className="top-px left-2.5 rotate-[9.70deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        d
                      </div>
                      <div className="top-1 left-[21px] rotate-[18.41deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        u
                      </div>
                      <div className="top-[7px] left-[30px] rotate-[26.34deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        c
                      </div>
                      <div className="top-[11px] left-[39px] rotate-[32.89deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        t
                      </div>
                      <div className="top-[15px] left-[45px] rotate-[37.50deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        {""}
                      </div>
                      <div className="top-5 left-[47px] rotate-[43.34deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        S
                      </div>
                      <div className="top-[27px] left-[54px] rotate-[51.46deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        h
                      </div>
                      <div className="top-9 left-[60px] rotate-[59.85deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        o
                      </div>
                      <div className="top-[45px] left-16 rotate-[68.14deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        o
                      </div>
                      <div className="top-[53px] left-[69px] rotate-[75.06deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        t
                      </div>
                      <div className="top-[58px] left-[71px] rotate-[79.64deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        {""}
                      </div>
                      <div className="top-[63px] left-[71px] rotate-[84.04deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        •
                      </div>
                      <div className="top-[69px] left-[73px] rotate-[88.45deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        {""}
                      </div>
                    </div>
                    <div className="top-[138px] left-[101px] rotate-[161.37deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                      {""}
                    </div>
                    <div className="absolute w-3.5 h-[21px] top-[139px] left-[89px]">
                      <div className="top-px left-[5px] rotate-[165.93deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        •
                      </div>
                      <div className="top-0.5 left-0.5 rotate-[170.30deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        {""}
                      </div>
                    </div>
                    <div className="absolute w-3.5 h-5 top-[141px] left-[77px]">
                      <div className="top-0 left-[9px] rotate-[173.82deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        {""}
                      </div>
                      <div className="top-px left-0 rotate-[179.34deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        E
                      </div>
                    </div>
                    <div className="absolute w-[77px] h-[156px] top-1 left-0">
                      <div className="top-[137px] left-[67px] rotate-[-172.94deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        v
                      </div>
                      <div className="top-[135px] left-[58px] rotate-[-165.27deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        e
                      </div>
                      <div className="top-[132px] left-12 rotate-[-157.29deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        n
                      </div>
                      <div className="top-32 left-[42px] rotate-[-150.48deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        t
                      </div>
                      <div className="top-[124px] left-[34px] rotate-[-144.18deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        s
                      </div>
                      <div className="top-[120px] left-8 rotate-[-138.96deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        {""}
                      </div>
                      <div className="top-[117px] left-[29px] rotate-[-135.62deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        {""}
                      </div>
                      <div className="top-[113px] left-6 rotate-[-131.25deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        •
                      </div>
                      <div className="top-[109px] left-[22px] rotate-[-126.66deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        {""}
                      </div>
                      <div className="top-[106px] left-[19px] rotate-[-123.31deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        {""}
                      </div>
                      <div className="top-[98px] left-2.5 rotate-[-116.34deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        C
                      </div>
                      <div className="top-[88px] left-2 rotate-[-107.33deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        e
                      </div>
                      <div className="top-[81px] left-[9px] rotate-[-101.45deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        l
                      </div>
                      <div className="top-[74px] left-[5px] rotate-[-95.52deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        e
                      </div>
                      <div className="top-[63px] left-1 rotate-[-87.13deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        b
                      </div>
                      <div className="top-[54px] left-[7px] rotate-[-79.86deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        r
                      </div>
                      <div className="top-[47px] left-2 rotate-[-73.32deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        a
                      </div>
                      <div className="top-[39px] left-3 rotate-[-66.65deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        t
                      </div>
                      <div className="top-[34px] left-4 rotate-[-61.75deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        i
                      </div>
                      <div className="top-[27px] left-[17px] rotate-[-55.64deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        o
                      </div>
                      <div className="top-[19px] left-[23px] rotate-[-47.29deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        n
                      </div>
                      <div className="top-3 left-[31px] rotate-[-39.79deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        s
                      </div>
                      <div className="top-[9px] left-[38px] rotate-[-34.78deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        {""}
                      </div>
                      <div className="top-[7px] left-[42px] rotate-[-31.20deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        {""}
                      </div>
                      <div className="top-1 left-[45px] rotate-[-26.76deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        •
                      </div>
                      <div className="top-0.5 left-[51px] rotate-[-22.28deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        {""}
                      </div>
                      <div className="top-0 left-[55px] rotate-[-18.84deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        {""}
                      </div>
                    </div>
                    <div className="absolute w-5 h-[22px] top-0 left-[58px]">
                      <div className="top-0.5 left-0.5 rotate-[-12.77deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        P
                      </div>
                      <div className="top-0 left-3 rotate-[-5.96deg] absolute h-[19px] [font-family:'Sora',Helvetica] font-normal text-[#ffffff] text-[15.3px] text-center tracking-[-0.31px] leading-[normal]">
                        r
                      </div>
                    </div>
                  </div>
                </div>
                {/* Hire Us button */}
                <div className="absolute w-[113px] h-[111px] top-[25px] left-[25px]">
                  <a
                    href="#"
                    className="block relative w-[111px] h-[111px] bg-red-2 rounded-full"
                  >
                    <span className="absolute top-11 left-7 text-white text-[17px] tracking-[-0.34px] font-semibold text-center">
                      Hire Us
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
