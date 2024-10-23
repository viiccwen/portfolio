import { DormCarousel } from "@/components/carousel/dorm-carousel";
import { PartyTimesCarousel } from "@/components/carousel/partytimes-carousel";
import { PocketyCarousel } from "@/components/carousel/pockety-carousel";
import { DisplayBlock } from "@/components/customs/display-block";
import { LinkItem } from "@/components/customs/link-item";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Metadata } from "next";

export default function ProjectPage() {
  return (
    <>
      <DisplayBlock
        title="PartyTimes 都不揪？"
        description="全端專案 - 會議排程系統"
      >
        <div className="flex justify-center">
          <PartyTimesCarousel />
        </div>
        <div className="flex gap-2">
          <LinkItem
            text="URL: PartyTimes (online)"
            url="https://partytimes.org/"
          />
          <p>|</p>
          <LinkItem text="demo page" url="https://partytimes.org/party/0Gf7emMo" />
        </div>
      </DisplayBlock>

      <DisplayBlock
        title="臺科第二學生宿舍系統"
        description="全端專案 - 退宿預約系統"
      >
        <div className="flex justify-center">
          <DormCarousel />
        </div>
        <div className="flex gap-2">
          <LinkItem
            text="GitHub: Dormitory Reservation System"
            url="https://github.com/viiccwen/dorm-reservation-system/"
          />
        </div>
      </DisplayBlock>

      <DisplayBlock title="Pockety" description="全端專案 - 線上記帳App">
        <div className="flex justify-center">
          <PocketyCarousel />
        </div>
        <div className="flex gap-2">
          <LinkItem
            text="URL: Pockety (online)"
            url="https://pockety.vercel.app/"
          />
          <p>|</p>
          <LinkItem text="GitHub" url="https://github.com/viiccwen/pockety" />
        </div>
      </DisplayBlock>

      <div className="fixed right-7 bottom-10">
        <ModeToggle />
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: "Project",
  description: "Project experience",
};
