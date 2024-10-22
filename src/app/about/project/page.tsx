import { DisplayBlock } from "@/components/customs/display-block";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Metadata } from "next";

export default function ProjectPage() {
  return (
    <>
      <DisplayBlock
        title="PartyTimes 都不揪？"
        description="全端專案 - 會議排程系統"
      >
        <div>
          <p></p>
        </div>
      </DisplayBlock>

      <DisplayBlock
        title="臺科第二學生宿舍系統"
        description="全端專案 - 退宿預約系統"
      >
        <div>
          <p></p>
        </div>
      </DisplayBlock>

      <DisplayBlock
        title="Pockety"
        description="全端專案 - 線上記帳App"
      >
        <div>
          <p></p>
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
