import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const JourneySection = (): JSX.Element => {
  // Data for journey metrics to enable mapping
  const journeyMetrics = [
    {
      count: "1,000+",
      description: "Events Covered",
    },
    {
      count: "500+",
      description: "Happy Clients",
    },
    {
      count: "10+",
      description: "Years of Excellence",
    },
    {
      count: "40+",
      description: "Professionals Team",
    },
  ];

  return (
    <div className="flex items-center justify-center w-full gap-[59px] py-8">
      {journeyMetrics.map((metric, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col w-[213.59px] items-center gap-[29px]">
            <div className="w-fit [font-family:'Abhaya_Libre_ExtraBold-Regular',Helvetica] font-normal text-[#1e1716] text-[84px] text-center tracking-[-1.68px] leading-[41.5px] whitespace-nowrap">
              {metric.count}
            </div>
            <div className="w-full [font-family:'Sora',Helvetica] font-light text-black text-2xl text-center tracking-[-0.48px] leading-[normal]">
              {metric.description}
            </div>
          </div>

          {index < journeyMetrics.length - 1 && (
            <Separator orientation="vertical" className="h-[150px]" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
